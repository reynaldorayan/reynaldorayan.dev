import React, { useState, useCallback, useEffect } from "react";
import { SectionItem } from "@/pages/home";
import { cn } from "@/utils/style";

export type HeaderProps = {
    sections: SectionItem[];
};

const Header = ({ sections }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolledSection, setScrolledSection] = useState<string | null>(null);

    const except = ["Welcome"];

    const handleNavigate = useCallback((ref: React.RefObject<HTMLElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: "smooth",
            });
            setIsOpen(false);
        }
    }, []);

    const validSections = sections.filter(
        (section) => section.ref.current !== null
    );

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const section = entry.target.getAttribute("data-title");
                    setScrolledSection(section);
                }
            });
        };

        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions
        );

        validSections.forEach((section) => {
            if (section.ref.current) {
                observer.observe(section.ref.current);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [validSections]);

    const renderLinks = (isMobile: boolean = false) =>
        validSections
            .filter((s) => !except.includes(s.link))
            .map((link) => (
                <a
                    key={link.link}
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavigate(link.ref);
                    }}
                    className={cn(
                        isMobile ? "block px-3 py-2 rounded-md" : "",
                        scrolledSection === link.title
                            ? "text-teal-500"
                            : "text-gray-600"
                    )}
                >
                    {link.link}
                </a>
            ));

    return (
        <header className="bg-white shadow-lg sticky top-0 z-10">
            <div className="w-full max-w-6xl mx-auto px-5 py-5 md:py-8 flex justify-between items-center">
                <div
                    onClick={(e) => {
                        e.preventDefault();
                        scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-xl font-semibold text-teal-500 cursor-pointer"
                >
                    Rayan
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-8">{renderLinks()}</nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="font-light focus:outline-none"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden">
                    <div className="px-2 pb-3">{renderLinks(true)}</div>
                </nav>
            )}
        </header>
    );
};

export default Header;
