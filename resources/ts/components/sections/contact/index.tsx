import Section from "@/components/section";
import { Button, Input, Textarea } from "@nextui-org/react";
import { forwardRef, Ref } from "react";
import { RiFacebookLine, RiGithubLine, RiLinkedinLine } from "react-icons/ri";

type ContactProps = {
    title?: string;
};

const Contact = forwardRef<HTMLElement, ContactProps>(
    ({ title }, ref: Ref<HTMLInputElement>) => {
        return (
            <Section ref={ref} title={title}>
                <div className="w-full max-w-6xl mx-auto mt-20 px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-36">
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col sm:flex-row gap-5">
                                <Input
                                    placeholder="Name*"
                                    radius="none"
                                    size="lg"
                                    classNames={{
                                        input: "text-sm ",
                                        inputWrapper: "px-5",
                                    }}
                                />
                                <Input
                                    placeholder="Email*"
                                    radius="none"
                                    size="lg"
                                    type="email"
                                    classNames={{
                                        input: "text-sm ",
                                        inputWrapper: "px-5",
                                    }}
                                />
                            </div>
                            <div>
                                <Input
                                    placeholder="Subject*"
                                    radius="none"
                                    size="lg"
                                    classNames={{
                                        input: "text-sm ",
                                        inputWrapper: "px-5",
                                    }}
                                />
                            </div>
                            <div>
                                <Textarea
                                    placeholder="Message*"
                                    radius="none"
                                    size="lg"
                                    classNames={{
                                        input: "text-sm ",
                                        inputWrapper: "px-5 pt-5",
                                    }}
                                />
                            </div>

                            <Button
                                className="font-medium bg-teal-400 text-teal-50"
                                size="lg"
                                radius="none"
                            >
                                Submit
                            </Button>
                        </div>

                        <div>
                            <div>
                                <h3 className="font-medium text-2xl">
                                    Rayan Reynaldo
                                </h3>
                                <p className="font-light text-gray-500">
                                    Full-stack / Software developer
                                </p>
                            </div>

                            <div className="flex flex-col mt-8 gap-5">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-gray-600 font-medium">
                                        Phone
                                    </h3>
                                    <p className="text-gray-500 font-light">
                                        63-991-8940-068
                                    </p>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <h3 className="text-gray-600 font-medium">
                                        Email
                                    </h3>
                                    <p className="text-gray-500 font-light">
                                        connect@reynaldorayan.dev
                                    </p>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <h3 className="text-gray-600 font-medium">
                                        Website
                                    </h3>
                                    <p className="text-gray-500 font-light">
                                        reynaldorayan.dev
                                    </p>
                                </div>

                                <div className="flex gap-5 mt-5">
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
                    </div>
                </div>
            </Section>
        );
    }
);

Contact.displayName = "Contact";

export default Contact;
