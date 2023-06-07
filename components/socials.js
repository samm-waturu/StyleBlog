import React from 'react';
import FB from '../public/img/facebook.png';
import Image from "next/image";


function Socials() {
    return (
        <>

            <div className="inline-flex items-center">
                <a
                    href="https://www.facebook.com/profile.php?id=100070362017802&mibextid=zbWkwl"
                    target="_blank"
                    rel="noopener"
                    className="relative block ml-2">
                    <Image
                        src={FB}
                        alt="facebook logo"
                        unoptimized={true}
                        width="28"
                        height="28"
                    />
                </a>
                {/*

                                <a
                    href="https://instagram.com/adhiamboe_omondi?igshid=ZDdkNTZiNTM"
                    target="_blank"
                    rel="noopener"
                    className="relative block ml-2">
                    <Image
                        src={IG}
                        alt="Instagram logo"
                        unoptimized={true}
                        width="34"
                        height="34"
                    />
                </a>
                <a
                    href="https://tiktok.com/@seamstress01?_t=8bjD6sQ87wz&_r=1"
                    target="_blank"
                    rel="noopener"
                    className="relative block ml-2">
                    <Image
                        src={TK}
                        alt="Tiktok logo"
                        unoptimized={true}
                        width="29"
                        height="29"
                    />
                </a>
                */}

            </div>


        </>
    )
}

export default Socials
