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
        <Link className="bg-white rounded-3xl mb-5 h-fit hover:cursor-pointer" to={siteLink} onMouseEnter={() => setBlur(true)} onMouseLeave={() => setBlur(false)}>
            <div className='relative'>
                <div className={`${blur && 'opacity-90'} opacity-0 absolute top-1/2 right-1/2 bg-gradient-to-tl from-slate-700 to-black w-full z-10 
                    translate-x-1/2 -translate-y-1/2 h-full rounded-t-3xl transition-all space-y-10`}>
                    <p className="text-center p-10 text-white font-bold h-5/6 overflow-auto">{description}</p>
                </div>

                <img src={image} alt={title} className={`${blur && 'blur'} rounded-t-3xl w-full shadow h-40 xl:h-80`} />
            </div>

            <h2 className="text-center text-2xl px-8 py-5">{title}</h2>

        </Link>
    )
}
