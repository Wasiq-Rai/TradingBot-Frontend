'use client';

import React from 'react';
import Link from 'next/link';

interface WhyChooseUsItemProps { item: { src: string; alt: string; link: string; title: React.ReactNode; description: string; }; }

const WhyChooseUsItem: React.FC<WhyChooseUsItemProps> = (props) => { return ( <div className="choose-item"> <div className="choose-icon"> <img src={props.item.src} alt={props.item.alt} /> </div> <div className="choose-content"> <h2 className="title"> <Link href={props.item.link}>{props.item.title}</Link> </h2> <p>{props.item.description}</p> </div> </div> ); };

export default WhyChooseUsItem;