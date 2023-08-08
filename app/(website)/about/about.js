import Container from "@/components/container";
import {urlForImage} from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";
import {PortableText} from "@/lib/sanity/plugins/portabletext";

export default function About({authors}) {
    return (
        <Container>
            <div className="mx-auto prose text-center dark:prose-invert mt-14">
                    {authors?.map(author => {
                        return(
                            <>
                            <PortableText value={author?.bio}/>
                            </>
                        )
                    })}
                <p>
                    <Link href="/contact">Get in touch</Link>
                </p>
            </div>
        </Container>
    );
}
