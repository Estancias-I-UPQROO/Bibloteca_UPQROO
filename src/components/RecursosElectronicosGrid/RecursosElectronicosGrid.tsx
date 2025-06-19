import type { PropsWithChildren } from "react"
import './styles.css'

export const RecursosElectronicosGrid = ({children}: PropsWithChildren) => {
    return (
        <section className="recursos-grid">
            {children}
        </section>
    )
}
