import { PropsWithChildren } from "react";
import { NextUIProvider } from "@nextui-org/react";

type Props = PropsWithChildren & {};

function Providers({ children }: Props) {
    return (
        <>
            <NextUIProvider>{children}</NextUIProvider>
        </>
    );
}

export default Providers;
