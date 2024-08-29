import Section from "@/components/section";
import { forwardRef, Ref } from "react";

type EducationItemProps = {
    duration: string;
    degree: string;
    institution: string;
    location: string;
};

const EducationItem = ({
    duration,
    degree,
    institution,
    location,
}: EducationItemProps) => (
    <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
            <time dateTime={duration}>{duration}</time>
            <p className="text-gray-600 font-light">{degree}</p>
        </div>
        <div className="flex gap-2 items-center">
            <div className="h-2 w-2 bg-teal-400" />
            <div className="border-t border-gray-300 w-full p-0" />
        </div>
        <div>
            <p className="uppercase">{institution}</p>
            <p className="font-light text-sm text-gray-500">{location}</p>
        </div>
    </div>
);

type EducationProps = {
    title?: string;
};

const Education = forwardRef<HTMLElement, EducationProps>(
    ({ title = "Education" }, ref: Ref<HTMLElement>) => {
        return (
            <Section ref={ref} title={title}>
                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-2 lg:mt-20 p-5">
                    <EducationItem
                        duration="2017 - 2019"
                        degree="Information and Communication Technology - Programming"
                        institution="AMA Computer College"
                        location="Lucena City, PH"
                    />
                    <EducationItem
                        duration="2019 - 2024"
                        degree="Bachelor of Science in Information Technology"
                        institution="Colegio de Santo Cristo de Burgos"
                        location="Sariaya, Quezon, PH"
                    />
                </div>
                <div className="max-w-6xl mx-auto p-5">
                    <p className="text-gray-500 font-light mt-5 lg:mt-16 lg:leading-6">
                        During this time, I discovered my passion for
                        programming and deeply engaged in learning. I focused on
                        mastering HTML, CSS, JavaScript, PHP, MySQL, and other
                        technologies, which provided me with a strong foundation
                        in programming concepts and web application development.
                    </p>
                </div>
            </Section>
        );
    }
);

Education.displayName = "Education";

export default Education;
