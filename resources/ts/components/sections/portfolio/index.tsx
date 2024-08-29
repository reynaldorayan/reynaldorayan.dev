import Section from "@/components/section";
import { cn } from "@/utils/style";
import { forwardRef, Ref, useState } from "react";

type PortfolioProps = {
    title?: string;
};

type Item = {
    id: number;
    category: string;
    title: string;
};

const items: Item[] = [
    { id: 1, category: "web", title: "Website 1" },
    { id: 2, category: "design", title: "Design 1" },
    { id: 3, category: "web", title: "Website 2" },
    { id: 4, category: "design", title: "Design 2" },
    { id: 5, category: "mobile", title: "Mobile App 1" },
    { id: 6, category: "mobile", title: "Mobile App 2" },
];

const filters = ["all", "web", "design", "mobile"];

const Portfolio = forwardRef<HTMLElement, PortfolioProps>(
    ({ title }, ref: Ref<HTMLInputElement>) => {
        const [selectedFilter, setSelectedFilter] = useState<string>("all");
        const [visibleItems, setVisibleItems] = useState<number>(3);

        // Filter items based on selected category
        const filteredItems = items.filter(
            (item) =>
                selectedFilter === "all" || item.category === selectedFilter
        );

        // Items to be displayed based on the visibleItems count
        const displayedItems = filteredItems.slice(0, visibleItems);

        const handleShowMore = () => {
            setVisibleItems((prev) => prev + 3); // Show 3 more items on each click
        };

        return (
            <Section ref={ref} title={title}>
                <div className="max-w-6xl mx-auto mt-16">
                    <div className="flex justify-center space-x-4 mb-5">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedFilter(filter);
                                    setVisibleItems(3);
                                }}
                                className={cn(
                                    "px-4 py-[0.4rem] lg:py-2 font-light rounded",
                                    {
                                        "bg-teal-500 text-white":
                                            selectedFilter === filter,
                                        "bg-gray-100 text-gray-600":
                                            selectedFilter !== filter,
                                    }
                                )}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Display Items */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-5">
                        {displayedItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex gap-5 h-full min-h-72 p-4 rounded-md bg-white hover:bg-gray-50 group transition-all ease-in-out"
                            >
                                <div>
                                    <div className="group-hover:bg-white h-20 w-32 border border-gray-100 rounded" />
                                </div>
                                <div className="group-hover:bg-white h-full w-full border border-gray-100 rounded p-4">
                                    <h3 className="text-xl font-semibold">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500">
                                        {item.category}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Show More Button */}
                    {visibleItems < filteredItems.length && (
                        <div className="text-center mt-5">
                            <button
                                onClick={handleShowMore}
                                className="px-4 py-2 bg-teal-500 text-white rounded"
                            >
                                Show More
                            </button>
                        </div>
                    )}
                </div>
            </Section>
        );
    }
);

Portfolio.displayName = "Portfolio";

export default Portfolio;
