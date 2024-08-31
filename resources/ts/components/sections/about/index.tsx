import Section from "@/components/section";
import { forwardRef, Ref } from "react";
import me from "@/assets/images/about-me.jpg";
import { RiFacebookLine, RiGithubLine, RiLinkedinLine } from "react-icons/ri";

export type AboutProps = {
    title?: string;
};

const About = forwardRef<HTMLElement, AboutProps>(
    ({ title }, ref: Ref<HTMLInputElement>) => {
        return (
            <Section ref={ref} title={title}>
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:mt-20 p-5">
                    <div className="flex flex-col gap-8">
                        <p className="">
                            I'm an enthusiastic full-stack developer with
                            expertise in both front-end and back-end
                            development. I specialize in crafting scalable
                            solutions that address client needs, excel at
                            solving complex problems, and am committed to
                            staying ahead with the latest technologies. I aim to
                            join a forward-thinking organization where I can
                            contribute to impactful projects and drive success
                            through innovation.
                        </p>

                        <p className="text-gray-600 font-light">
                            I value collaboration, effective communication, and
                            a user-centric approach. I’m dedicated to creating
                            efficient, user-friendly applications that make an
                            impact. I’m eager to tackle new challenges and drive
                            success for my team and projects.
                        </p>

                        <div className="border-b"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div>
                                <h3 className="text-gray-600 font-medium">
                                    Phone
                                </h3>
                                <p className="text-gray-600 font-light">
                                    63-991-8940-068
                                </p>
                            </div>

                            <div>
                                <h3 className="text-gray-600 font-medium">
                                    Email
                                </h3>
                                <p className="text-gray-600 font-light">
                                    connect@reynaldorayan.dev
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 justify-center items-center my-5">
                        <div className="w-fit min-h-48 max-h-48 max-w-48 min-w-48 lg:min-h-64 lg:max-h-64 lg:max-w-64 lg:min-w-64 bg-teal-100 rounded-lg relative shadow-inner z-0">
                            <img
                                src={me}
                                alt="About"
                                className="rounded-lg max-w-48 min-w-48 min-h-48 max-h-48 lg:max-h-64 lg:max-w-64 lg:min-w-64 lg:min-h-64 absolute -top-5 left-5 opacity-90 z-10"
                            />
                            <div className="rounded-lg max-w-48 min-w-48 min-h-48 max-h-48 lg:max-h-64 lg:max-w-64 lg:min-w-64 lg:min-h-64 inset-0 absolute -top-5 left-5 z-10 bg-teal-900/10" />
                        </div>

                        <div className="flex gap-5">
                            <a
                                href="https://www.facebook.com/reynaldorayan.dev"
                                className="p-1 rounded-md border border-gray-100 hover:bg-teal-600 group"
                            >
                                <RiFacebookLine
                                    size={22}
                                    className="text-teal-500 group-hover:text-teal-50 transition-all duration-300 ease-in-out"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/reynaldorayan"
                                className="p-1 rounded-md border border-gray-100 hover:bg-teal-600 group"
                            >
                                <RiLinkedinLine
                                    size={22}
                                    className="text-teal-500 group-hover:text-teal-50 transition-all duration-300 ease-in-out"
                                />
                            </a>
                            <a
                                href="https://github.com/reynaldorayan"
                                className="p-1 rounded-md border border-gray-100 hover:bg-teal-600 group"
                            >
                                <RiGithubLine
                                    size={22}
                                    className="text-teal-500 group-hover:text-teal-50 transition-all duration-300 ease-in-out"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </Section>
        );
    }
);

About.displayName = "About";

export default About;
