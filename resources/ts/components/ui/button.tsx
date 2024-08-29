import { cn } from "@/utils/style";
import { forwardRef, ButtonHTMLAttributes, Ref } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ ...rest }, ref: Ref<HTMLButtonElement>) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "border py-4 rounded-md hover:scale-105 transition-transform"
                )}
                {...rest}
            />
        );
    }
);

Button.displayName = "Button";

export default Button;
