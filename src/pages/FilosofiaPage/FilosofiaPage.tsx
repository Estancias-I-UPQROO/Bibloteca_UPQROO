import { PageContainer, PageHeader } from "../../components"

export const FilosofiaPage = () => {
    return (
        <>
            <PageHeader>Filosofía</PageHeader>

            <PageContainer>
                <section>
                    La Biblioteca Kaxáant de la Universidad Politécnica de Quintana Roo (UPQROO) se concibe como un pilar fundamental en el apoyo a los procesos de enseñanza, aprendizaje e investigación de la comunidad universitaria. Su filosofía se encuentra sólidamente cimentada en una clara misión, visión y valores que orientan su quehacer diario.
                </section>

                <section>
                    <h2 className="text-center text-orange-500 uppercase font-bold text-2xl my-5">Misión</h2>
                    Apoyar los procesos de enseñanza, aprendizaje e investigación de la comunidad universitaria, facilitando el acceso a recursos de información especializados que fortalezcan el desarrollo académico y la innovación.
                </section>

                <section>
                    <h2 className="text-center text-orange-500 uppercase font-bold text-2xl my-5">Visión</h2>
                    Ser reconocida como un centro de información de excelencia, que contribuya de manera efectiva al cumplimiento de los objetivos estratégicos de la Universidad Politécnica de Quintana Roo, a través de servicios y recursos de información de vanguardia.
                </section>
            </PageContainer>
        </>
    )
}
