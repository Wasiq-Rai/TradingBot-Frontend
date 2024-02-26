import React from 'react';
import Link from 'next/link';

interface WhyChooseUsItemProps {
    item: {
        src: string;
        alt: string;
        link: string;
        title: React.ReactNode;
        description: string;
    };
}

const WhyChooseUsItem: React.FC<WhyChooseUsItemProps> = (props) => {
    return (
        <div className="max-w-lg bg-none border border-gray-200 rounded-lg shadow">
            <div className="flex justify-center">
                <Link href={props.item.link}>
                    <img className=" py-10 rounded-lg w-24" src={props.item.src} alt={props.item.alt} />
                </Link>
            </div>
            <div className="p-5 text-center">
                <Link href={props.item.link}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {props.item.title}
                    </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.item.description}</p>
            </div>
        </div>
    );
};

export default WhyChooseUsItem;
