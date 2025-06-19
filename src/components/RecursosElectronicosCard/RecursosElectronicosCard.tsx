import { useState } from 'react';
import { Link } from 'react-router-dom';

type RecursosElectronicosCardProps = {
    title: string;
    description: string;
    image: string;
    siteLink: string;
}

export const RecursosElectronicosCard = ({ title, description, image, siteLink }: RecursosElectronicosCardProps) => {
    const [blur, setBlur] = useState(false)

    return (
        <div className="shadow-md bg-gradient-to-t from-white to-slate-200 rounded-3xl h-fit relative transition-transform" onMouseEnter={() => setBlur(true)} onMouseLeave={() => setBlur(false)}>

            <div className={`${blur ? 'opacity-90' : 'opacity-0'} absolute top-1/2 right-1/2 bg-gradient-to-tl from-slate-700 to-black opacity-90 w-full z-10 
            translate-x-1/2 -translate-y-1/2 h-full rounded-3xl transition-all space-y-10`}>
                <p className="text-center p-10 text-white font-bold h-60 overflow-auto">{description}</p>

                <div className='flex justify-center'>
                    <Link to={siteLink} className='bg-slate-100 hover:bg-slate-300 w-10/12 rounded-xl py-2 px-4 text-black text-center transition-colors'>Visitar</Link>
                </div>
            </div>

            <div className={`${blur && 'blur'} z-0`}>
                <img src={image} alt={title} className="rounded-t-3xl w-full shadow h-64 xl:h-80" />

                <h2 className="text-center text-2xl px-10 py-8">{title}</h2>
            </div>

        </div>
    )
}
