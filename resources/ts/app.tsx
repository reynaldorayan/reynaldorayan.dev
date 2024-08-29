import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import "@/app.css";
``
createInertiaApp({
    resolve: (name: string) => {
        const pages = import.meta.glob("./pages/**/*.tsx", { eager: true });
        return pages[`./pages/${name}.tsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
