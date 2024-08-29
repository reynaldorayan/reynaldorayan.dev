import Section from "@/components/section";
import { forwardRef, Ref } from "react";
import {
    Html5OriginalWordmark,
    Css3PlainWordmark,
    JavascriptOriginal,
    TypescriptOriginal,
    MysqlOriginal,
    PostgresqlOriginal,
    MariadbOriginalWordmark,
    PhpOriginal,
    NodejsOriginalWordmark,
    LaravelOriginal,
    ReactOriginalWordmark,
    CodeigniterPlainWordmark,
    NextjsOriginalWordmark,
    PostmanOriginal,
    GitOriginalWordmark,
    VscodeOriginal,
} from "devicons-react";

type SkillsProps = {
    title?: string;
};

const techIcons = [
    Html5OriginalWordmark,
    Css3PlainWordmark,
    JavascriptOriginal,
    TypescriptOriginal,
    MysqlOriginal,
    PostgresqlOriginal,
    MariadbOriginalWordmark,
    PhpOriginal,
    NodejsOriginalWordmark,
    LaravelOriginal,
    ReactOriginalWordmark,
    CodeigniterPlainWordmark,
    NextjsOriginalWordmark,
    PostmanOriginal,
    GitOriginalWordmark,
    VscodeOriginal,
];

const skills = [
    {
        title: "Problem-solving",
        description: "Addressing and resolving complex technical issues.",
    },
    {
        title: "Communication",
        description:
            "Collaborating with team members, stakeholders, and clients.",
    },
    {
        title: "Time Management",
        description: "Prioritizing tasks and managing deadlines effectively.",
    },
    {
        title: "Adaptability",
        description: "Keeping up with new technologies and industry trends.",
    },
    {
        title: "Continuous Learning",
        description: "Expanding knowledge and skills through ongoing learning.",
    },
];

const Skills = forwardRef<HTMLElement, SkillsProps>(
    ({}, ref: Ref<HTMLElement>) => {
        return (
            <Section ref={ref} title="Skills">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 p-5 lg:mt-20 mt-10">
                    <div>
                        <h3 className="text-gray-600 font-medium mb-4">
                            Tech Stack and Software Tools
                        </h3>
                        <div className="grid grid-cols-4 gap-3 opacity-90 justify-items-center">
                            {techIcons.map((Icon, index) => (
                                <Icon key={index} size={50} />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        {skills.map((skill, index) => (
                            <div key={index} className="flex flex-col gap-1">
                                <h4 className="text-gray-600">{skill.title}</h4>
                                <p className="text-gray-500 font-light flex items-center gap-2">
                                    <span className="block h-2 w-2 rounded-sm border-[.1px] border-teal-400 rotate-45" />
                                    {skill.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        );
    }
);

Skills.displayName = "Skills";

export default Skills;
