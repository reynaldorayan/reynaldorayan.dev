import Section from "@/components/section";
import { forwardRef, Ref } from "react";
import { cn } from "@/utils/style";

type ExperienceProps = {
    title?: string;
};

type ExperienceItemProps = {
    date: string;
    position: string;
    company: string;
    location: string;
    description: string;
    reverse?: boolean;
};

const ExperienceItem = ({
    date,
    position,
    company,
    location,
    description,
    reverse = false,
}: ExperienceItemProps) => {
    return (
        <div
            className={cn(
                "lg:min-w-96 mx-auto flex flex-col lg:gap-10 gap-5",
                reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            )}
        >
            <div
                className={cn(
                    "flex flex-col lg:w-6/12",
                    reverse ? "items-start" : "lg:items-end"
                )}
            >
                <time dateTime={date}>{date}</time>
                <p className="text-gray-500 font-light uppercase">{position}</p>
            </div>
            <div className="hidden lg:flex flex-col justify-center items-center gap-1 pt-1">
                <div className="h-2 w-2 rounded bg-teal-400" />
                <div className="h-56 border-l-2 bg-gray-500" />
            </div>
            <div
                className={cn(
                    "flex flex-col gap-5 lg:w-6/12",
                    reverse ? "items-start lg:items-end" : "lg:items-start"
                )}
            >
                <div
                    className={cn({
                        "lg:text-end": reverse,
                        "lg:text-start": !reverse,
                    })}
                >
                    <p className="uppercase">{company}</p>
                    <p className="text-gray-600 font-light text-sm">
                        {location}
                    </p>
                </div>
                <p
                    className={cn("text-gray-500 font-light", {
                        "lg:text-end": reverse,
                        "lg:text-start": !reverse,
                    })}
                >
                    {description}
                </p>
            </div>
        </div>
    );
};

const Experience = forwardRef<HTMLElement, ExperienceProps>(
    ({ title }, ref: Ref<HTMLElement>) => {
        return (
            <Section ref={ref} title={title}>
                <div className="max-w-6xl mx-auto p-5 grid mt-20">
                    <div className="flex flex-col justify-center items-center lg:gap-0 gap-10">
                        <ExperienceItem
                            date="Apr - Jun 2023"
                            position="Junior Programmer"
                            company="Maryhill College, Inc."
                            location="Lucena City, PH"
                            description="Experienced in maintaining and optimizing multiple codebases, with a strong emphasis on system debugging and the efficient development of features for legacy systems. Adept at enhancing system stability and driving performance improvements."
                        />
                        <ExperienceItem
                            date="Sep 2024 - Present"
                            position="Junior Programmer"
                            company="Maryhill College, Inc."
                            location="Lucena City, PH"
                            description="Acquiring expertise in GIT for version control and Docker for containerization, while managing similar tasks as previously."
                            reverse
                        />
                    </div>
                </div>
            </Section>
        );
    }
);

Experience.displayName = "Experience";

export default Experience;
