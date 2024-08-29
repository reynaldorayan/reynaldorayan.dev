import { cn } from "@/utils/style";
import { forwardRef, InputHTMLAttributes, Ref } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({}, ref: Ref<HTMLInputElement>) => {
        return <input ref={ref} className={cn("")} />;
    }
);

Input.displayName = "Input";

export default Input;
