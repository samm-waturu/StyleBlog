import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Socials from "@/components/socials";


export default function Footer(props) {
    return (
        <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
            <div className="text-center text-sm">
                <a
                    href="https://bytebuds-io.web.app"
                    target="_blank"
                    rel="noopener"
                    className={"font-light"}>
                    Modded with ❤ by <span className={"font-bold"}>Bytebuds</span>
                    <br/>

                    {/*<span className={"font-light text-[4]"}>Web3templates</span>*/}
                </a>
            </div>

            <div className="text-center text-sm mt-1 font-light">
                {/* {props?.copyright}*/}
                © {new Date().getFullYear()}
            </div>

            <div className="mt-2 flex items-center justify-between">
                <div className="mt-5">
                    <Socials/>
                </div>
                <ThemeSwitch/>
            </div>
        </Container>
    );
}

