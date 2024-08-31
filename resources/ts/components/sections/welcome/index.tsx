import Section from "@/components/section";
import { router } from "@inertiajs/react";
import { Button } from "@nextui-org/react";
import { forwardRef, Ref } from "react";

type WelcomeProps = {
    title?: string;
};

const Welcome = forwardRef<HTMLElement, WelcomeProps>(
    ({}, ref: Ref<HTMLInputElement>) => {
        return (
            <Section ref={ref}>
                <div className="min-h-screen grid justify-center">
                    <div className="flex flex-col items-center gap-8 mt-20 lg:mt-36">
                        <h2 className="text-5xl lg:text-6xl font-semibold text-center text-white opacity-80 lg:leading-snug">
                            Hi <span className="text-teal-500">,</span> I'm
                            <br /> Rayan <br /> Reynaldo
                            <span className="text-6xl ms-2 text-teal-500">
                                .
                            </span>
                        </h2>

                        <p className="font-medium text-lg lg:text-xl tracking-tighter text-white opacity-80">
                            Full-stack / Software Developer
                        </p>

                        <Button
                            onClick={() => {
                                location.href = "/download-resume";
                            }}
                            className="bg-teal-500 py-6 px-6 rounded text-white w-fit"
                        >
                            Download Resume
                        </Button>
                    </div>

                    <div className="container_mouse">
                        <span className="mouse-btn">
                            <span className="mouse-scroll"></span>
                        </span>
                        <span>Scroll Down</span>
                    </div>
                </div>
            </Section>
        );
    }
);

Welcome.displayName = "Welcome";

export default Welcome;
