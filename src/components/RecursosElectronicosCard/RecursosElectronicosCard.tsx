type RecursosElectronicosCardProps = {
    title: string;
    description: string;
    image: string;
    siteLink: string;
}

export const RecursosElectronicosCard = ({ title, description, image, siteLink }: RecursosElectronicosCardProps) => {
    return (
        <div className="shadow-md bg-gradient-to-t from-white to-slate-200 rounded-3xl h-fit hover:blur-sm transition-all hover:rotate-6">
            <img src={image} alt={title} className="rounded-t-3xl w-full shadow h-64" />

            <div className="px-10 py-8">
                <h2 className="text-center text-2xl">{title}</h2>
            </div>
        </div>
    )
}
