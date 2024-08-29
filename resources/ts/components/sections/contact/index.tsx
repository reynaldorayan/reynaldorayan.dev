import Section from "@/components/section";
import Input from "@/components/ui/input";
import { forwardRef, Ref } from "react";

type ContactProps = {
    title?: string;
};

const Contact = forwardRef<HTMLElement, ContactProps>(
    ({ title }, ref: Ref<HTMLInputElement>) => {
        return (
            <Section ref={ref} title={title}>

                <Input type="text" placeholder="Name" />
            </Section>
        );
    }
);

Contact.displayName = "Contact";

export default Contact;
