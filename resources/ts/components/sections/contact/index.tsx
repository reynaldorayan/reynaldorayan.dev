import Section from "@/components/section";
import { Button, Input, Textarea } from "@nextui-org/react";
import { forwardRef, Ref } from "react";
import { RiFacebookLine, RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "@inertiajs/react";
import Swal from "sweetalert2";

const schema = z.object({
    name: z.string().min(1, "Name is required"),
    subject: z.string().min(1, "Subject is required"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof schema>;

type ContactProps = {
    title?: string;
};

const Contact = forwardRef<HTMLElement, ContactProps>(
    ({ title }, ref: Ref<HTMLInputElement>) => {
        const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
        } = useForm<FormData>({
            resolver: zodResolver(schema),
        });

        const onSubmit = (data: FormData) => {
            router.post("/send-mail", data, {
                onFinish() {
                    reset();

                    Swal.fire({
                        title: "Email Sent!",
                        text: "Your message has been successfully delivered.",
                        icon: "success",
                    });
                },
            });
        };

        return (
            <Section ref={ref} title={title}>
                <div className="w-full max-w-6xl mx-auto mt-20 px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-36">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col sm:flex-row gap-5">
                                    <Input
                                        isClearable
                                        placeholder="Name*"
                                        radius="none"
                                        size="lg"
                                        classNames={{
                                            input: "text-sm text-gray-600 font-light",
                                            inputWrapper:
                                                "px-5 rounded bg-gray-50/80 border-gray-100 focus-within:!bg-teal-50 focus-within:border-teal-100 border",
                                        }}
                                        {...register("name")}
                                        errorMessage={errors.name?.message}
                                        isInvalid={errors.name?.message != null}
                                    />
                                    <Input
                                        isClearable
                                        placeholder="Email*"
                                        radius="none"
                                        size="lg"
                                        type="email"
                                        classNames={{
                                            input: "text-sm text-gray-600 font-light",
                                            inputWrapper:
                                                "px-5 rounded bg-gray-50/80 border-gray-100 focus-within:!bg-teal-50 focus-within:border-teal-100 border",
                                        }}
                                        {...register("email")}
                                        errorMessage={errors.email?.message}
                                        isInvalid={
                                            errors.email?.message != null
                                        }
                                    />
                                </div>
                                <div>
                                    <Input
                                        isClearable
                                        labelPlacement="outside"
                                        placeholder="Subject*"
                                        radius="none"
                                        size="lg"
                                        classNames={{
                                            input: "text-sm text-gray-600 font-light",
                                            inputWrapper:
                                                "px-5 rounded bg-gray-50/80 border-gray-100 focus-within:!bg-teal-50 focus-within:border-teal-100 border",
                                        }}
                                        {...register("subject")}
                                        errorMessage={errors.subject?.message}
                                        isInvalid={
                                            errors.subject?.message != null
                                        }
                                    />
                                </div>
                                <div>
                                    <Textarea
                                        placeholder="Message*"
                                        radius="none"
                                        size="lg"
                                        classNames={{
                                            input: "text-sm text-gray-600 font-light",
                                            inputWrapper:
                                                "px-5 pt-5 rounded bg-gray-50/80 border-gray-100 focus-within:!bg-teal-50 focus-within:border-teal-100 border",
                                        }}
                                        {...register("message")}
                                        errorMessage={errors.message?.message}
                                        isInvalid={
                                            errors.message?.message != null
                                        }
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="rounded font-semibold bg-teal-400 text-teal-50"
                                    radius="none"
                                    size="md"
                                >
                                    Submit
                                </Button>
                            </div>
                        </form>

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
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-gray-600 font-medium">
                                        Phone
                                    </h3>
                                    <p className="text-gray-500 font-light">
                                        63-991-8940-068
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h3 className="text-gray-600 font-medium">
                                        Email
                                    </h3>
                                    <p className="text-gray-500 font-light">
                                        connect@reynaldorayan.dev
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2">
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
                                        className="p-2 rounded-md border border-gray-100 hover:bg-teal-600 group"
                                    >
                                        <RiFacebookLine
                                            size={22}
                                            className="text-teal-500 group-hover:text-teal-50 transition-all duration-300 ease-in-out"
                                        />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/reynaldorayan"
                                        className="p-2 rounded-md border border-gray-100 hover:bg-teal-600 group"
                                    >
                                        <RiLinkedinLine
                                            size={22}
                                            className="text-teal-500 group-hover:text-teal-50 transition-all duration-300 ease-in-out"
                                        />
                                    </a>
                                    <a
                                        href="https://github.com/reynaldorayan"
                                        className="p-2 rounded-md border border-gray-100 hover:bg-teal-600 group"
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
