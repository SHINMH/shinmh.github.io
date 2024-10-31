import React from "react";
import Link from "next/link";
import IconGithub from "@/components/icon/Github";
import IconLinkedin from "@/components/icon/LinkedIn";

const Footer = ()=>{
    return (
        <footer className={'flex flex-col my-8 items-center gap-4'}>
            <div className={'flex gap-4'}>
                <Link href={''}>
                    <IconGithub
                        className={'hover:fill-fuchsia-800'}
                        height={30}
                        width={30}
                    />
                </Link>
                <Link href={''}>
                    <IconLinkedin
                        className={'hover:fill-blue-700'}
                        height={30}
                        width={30}
                    />
                </Link>
            </div>
            <div>
                © 2024 <span className={'font-bold'}>Shin mh.</span> All rights reserved. | Powered by <Link className={'text-lime-700'} href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHub Pages</Link>.
            </div>
        </footer>
    );
}

export default Footer;