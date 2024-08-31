import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import Providers from "@/components/providers";
import "@/app.css";

createInertiaApp({
    resolve: (name: string) => {
        const pages = import.meta.glob("./pages/**/*.tsx", { eager: true });
        return pages[`./pages/${name}.tsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <Providers>
                <App {...props} />
            </Providers>
        );
    },
    progress: {
        color: "teal",
        showSpinner: true,
    },
});
