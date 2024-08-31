import { cn } from "@/utils/style";
import { forwardRef, PropsWithChildren, Ref } from "react";

type CustomInputProps = PropsWithChildren & {
    title?: string;
};

const Section = forwardRef<HTMLElement, CustomInputProps>(
    ({ title, children }, ref: Ref<HTMLInputElement>) => {
        return (
            <section
                ref={ref}
                data-title={title}
                className={cn("pb-20 lg:min-h-screen")}
            >
                {title ? (
                    <div className="flex justify-center py-12 border-y border-gray-200/70">
                        <h1 className="text-xl font-semibold tracking-wide">
                            {title}
                        </h1>
                    </div>
                ) : (
                    <></>
                )}
                <article>{children}</article>
            </section>
        );
    }
);

Section.displayName = "Section";

export default Section;
