"use client";
import React from 'react'
import {
    TelegramIcon,
    TelegramShareButton,
    WhatsappShareButton,
    WhatsappIcon,

} from 'next-share';

export default function Text({title, slugFB, slugWA}) {
    return (
        <>
            <p className={"-mt-4"} style={{fontWeight: "lighter",fontStyle: "italic"}}>{title}</p>
            <TelegramShareButton
                url={slugFB}>
                <TelegramIcon size={32} round/>
            </TelegramShareButton>
            <span className={"ml-2"}></span>
            <WhatsappShareButton url={slugWA}>
                <WhatsappIcon size={32} round/>
            </WhatsappShareButton>
        </>
    )
}
