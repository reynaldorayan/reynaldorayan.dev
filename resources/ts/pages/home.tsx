import Footer from "@/components/footer";
import Header from "@/components/header";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Portfolio from "@/components/sections/portfolio";
import Skills from "@/components/sections/skills";
import Welcome from "@/components/sections/welcome";
import { ForwardRefExoticComponent, useMemo, useRef } from "react";

export type SectionItem = {
    link: string;
    title: string;
    ref: React.RefObject<HTMLElement>;
    component: ForwardRefExoticComponent<
        { title?: string } & React.RefAttributes<HTMLElement>
    >;
};

export default function Home() {
    const welcomeRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const educationRef = useRef<HTMLElement>(null);
    const skillsRef = useRef<HTMLElement>(null);
    const experienceRef = useRef<HTMLElement>(null);
    const portfolioRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    const sections: SectionItem[] = useMemo(
        () => [
            {
                link: "Welcome",
                title: "Welcome",
                component: Welcome,
                ref: welcomeRef,
            },
            {
                link: "About",
                title: "About Me",
                component: About,
                ref: aboutRef,
            },
            {
                link: "Education",
                title: "Education",
                component: Education,
                ref: educationRef,
            },
            {
                link: "Skills",
                title: "Skills",
                component: Skills,
                ref: skillsRef,
            },
            {
                link: "Experience",
                title: "Experience",
                component: Experience,
                ref: experienceRef,
            },
            {
                link: "Portfolio",
                title: "Portfolio",
                component: Portfolio,
                ref: portfolioRef,
            },
            {
                link: "Contact",
                title: "Contact Me",
                component: Contact,
                ref: contactRef,
            },
        ],
        []
    );

    return (
        <>
            <Header sections={sections} />

            {sections.map(({ title, ref, component: Section }, key) => (
                <Section key={key} title={title} ref={ref} />
            ))}

            <Footer />
        </>
    );
}
