import Section from "@/components/section";
import { forwardRef, Ref } from "react";

type ContactProps = {
    title?: string;
};

const Contact = forwardRef<HTMLElement, ContactProps>(
    ({ title }, ref: Ref<HTMLInputElement>) => {
        return <Section ref={ref} title={title}></Section>;
    }
);

Contact.displayName = "Contact";

export default Contact;
