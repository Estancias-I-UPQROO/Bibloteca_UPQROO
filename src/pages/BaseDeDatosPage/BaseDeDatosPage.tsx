import { PageContainer, PageHeader } from "../../components"
import { RecursosElectronicosCard } from "../../components/RecursosElectronicosCard/RecursosElectronicosCard"
import { RecursosElectronicosGrid } from "../../components/RecursosElectronicosGrid/RecursosElectronicosGrid"

export const BaseDeDatosPage = () => {
    return (
        <>
            <PageHeader>Base de datos</PageHeader>

            <PageContainer>
                <RecursosElectronicosGrid>
                    <RecursosElectronicosCard 
                        title="Chicago Journal"
                        description="Example"
                        image="/Chicago_Journal.png"
                        siteLink="Example"
                    />
                    <RecursosElectronicosCard 
                        title="sciELO"
                        description="Example"
                        image="/scielo.png"
                        siteLink="Example"
                    />
                    <RecursosElectronicosCard 
                        title="Redalyc"
                        description="Example"
                        image="/redalyc.jpg"
                        siteLink="Example"
                    />
                    <RecursosElectronicosCard 
                        title="Redalyc"
                        description="Example"
                        image="/redalyc.jpg"
                        siteLink="Example"
                    />

                    <RecursosElectronicosCard 
                        title="Redalyc"
                        description="Example"
                        image="/redalyc.jpg"
                        siteLink="Example"
                    />

                    <RecursosElectronicosCard 
                        title="Redalyc"
                        description="Example"
                        image="/redalyc.jpg"
                        siteLink="Example"
                    />
                </RecursosElectronicosGrid>
            </PageContainer>
        </>
    )
}
