import Section from "@/components/section";
import { cn } from "@/utils/style";
import { Button, Chip } from "@nextui-org/react";
import { forwardRef, Ref, useState } from "react";
import { RiGithubLine, RiLink } from "react-icons/ri";
import portfolio from "@/assets/portfolio/porfolio.png";
import comingSoon from "@/assets/portfolio/coming-soon.jpg";

// Define prop types
interface PortfolioProps {
    title?: string;
}

// Define item type
interface Item {
    id: number;
    category: string;
    title: string;
    description: string;
    image: string;
    technologies?: string[];
    github?: string;
    demo?: string;
}

// Sample items
const items: Item[] = [
    {
        id: 1,
        category: "web",
        title: "reynaldorayan.dev",
        image: portfolio,
        technologies: ["vite", "reactjs", "tailwindcss", "nextui"],
        description:
            "My initial version of the portfolio site, crafted using Vite, showcases my work and skills.",
        github: "https://github.com/reynaldorayan/reynaldorayan.dev",
        demo: "https://reynaldorayan.dev",
    },
    {
        id: 2,
        category: "mobile",
        title: "Coming soon",
        image: comingSoon,
        description:
            "Stay tuned for more updates! Exciting new features and content will be added to this portfolio site soon.",
    },
    {
        id: 3,
        category: "design",
        title: "Coming soon",
        image: comingSoon,
        technologies: ["Figma"],
        description:
            "Stay tuned for more updates! Exciting new features and content will be added to this portfolio site soon",
    },
    {
        id: 4,
        category: "web",
        title: "Coming soon",
        image: comingSoon,
        description:
            "Stay tuned for more updates! Exciting new features and content will be added to this portfolio site soon.",
        github: "#",
        demo: "#",
    },
];

// Define filters
const filters = ["all", "design", "web", "mobile"];

const Portfolio = forwardRef<HTMLElement, PortfolioProps>(
    ({ title }, ref: Ref<HTMLElement>) => {
        const [selectedFilter, setSelectedFilter] = useState<string>("all");
        const [visibleItems, setVisibleItems] = useState<number>(2);

        // Handle filter change
        const handleFilterChange = (filter: string) => {
            setSelectedFilter(filter);
            setVisibleItems(3);
        };

        // Handle show more
        const handleShowMore = () => {
            setVisibleItems((prev) => prev + 2); // Show 3 more items on each click
        };

        // Filter items based on selected category
        const filteredItems = items.filter(
            (item) =>
                selectedFilter === "all" || item.category === selectedFilter
        );

        // Items to be displayed based on the visibleItems count
        const displayedItems = filteredItems.slice(0, visibleItems);

        return (
            <Section ref={ref} title={title}>
                <div className="max-w-6xl mx-auto mt-10">
                    <div className="flex justify-center space-x-3 mb-5">
                        {filters.map((filter) => (
                            <Button
                                size="sm"
                                key={filter}
                                onClick={() => handleFilterChange(filter)}
                                className={cn(
                                    "px-4 py-[0.4rem] lg:py-2 rounded uppercase tracking-wide",
                                    {
                                        "bg-teal-500 text-white":
                                            selectedFilter === filter,
                                        "bg-gray-100 text-gray-600":
                                            selectedFilter !== filter,
                                    }
                                )}
                            >
                                {filter}
                            </Button>
                        ))}
                    </div>

                    {/* Display Items */}
                    {displayedItems.length === 0 ? (
                        <div className="flex justify-center w-full">
                            <p className="mt-20 text-gray-400">
                                No items to show
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-5">
                            {displayedItems.map((item) => (
                                <div
                                    key={item.id}
                                    className=" bg-gray-50 flex flex-col md:flex-row gap-5 h-full min-h-64 p-4 group transition-all ease-in-out"
                                >
                                    <div className="h-full lg:w-64 flex flex-col gap-5">
                                        <div className="overflow-hidden rounded border h-full flex">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="object-cover w-full rounded group-hover:scale-110 transition-all duration-400 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-5 justify-around bg-white h-full w-full border border-gray-100 rounded p-5">
                                        <div className="flex justify-between">
                                            <div className="flex flex-col gap-2">
                                                <h3 className="text-lg font-medium">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-400 text-sm uppercase">
                                                    {item.category}
                                                </p>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                {item.github && (
                                                    <a
                                                        href={item.github}
                                                        aria-label="GitHub"
                                                    >
                                                        <RiGithubLine
                                                            size={20}
                                                            className="text-gray-500 hover:text-teal-500 transition-all duration-300 ease-in-out"
                                                        />
                                                    </a>
                                                )}
                                                {item.demo && (
                                                    <a
                                                        href={item.demo}
                                                        aria-label="Demo"
                                                    >
                                                        <RiLink
                                                            size={20}
                                                            className="text-gray-500 hover:text-teal-500 transition-all duration-300 ease-in-out"
                                                        />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-gray-500 font-light">
                                            {item.description}
                                        </p>

                                        {item.technologies ? (
                                            <div className="flex flex-wrap gap-2">
                                                {item.technologies.map(
                                                    (tech) => (
                                                        <Chip
                                                            size="sm"
                                                            className="border bg-gray-100 text-teal-600 border-gray-100 tracking-wide"
                                                            key={tech}
                                                        >
                                                            {tech}
                                                        </Chip>
                                                    )
                                                )}
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Show More Button */}
                    {visibleItems < filteredItems.length && (
                        <div className="text-center mt-5">
                            <Button
                                size="sm"
                                onClick={handleShowMore}
                                className="px-4 bg-teal-500 text-white rounded"
                            >
                                Show More
                            </Button>
                        </div>
                    )}
                </div>
            </Section>
        );
    }
);

Portfolio.displayName = "Portfolio";

export default Portfolio;
