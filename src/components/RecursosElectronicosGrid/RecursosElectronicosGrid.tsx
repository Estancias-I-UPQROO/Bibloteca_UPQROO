import type { PropsWithChildren } from "react"

export const RecursosElectronicosGrid = ({children}: PropsWithChildren) => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-x-28">
            {children}
        </section>
    )
}
