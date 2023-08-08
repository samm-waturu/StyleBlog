import Container from "@/components/container";
import Link from "next/link";

export default function About({authors, settings}) {
    return (
        <Container>
            <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
                About
            </h1>
            <div className="text-center">
                <p className="text-lg">About StyleBook</p>
            </div>
            <div className="mx-auto prose text-center dark:prose-invert mt-14">
                <p>
        {
            authors.bio
        }
                </p>
                <p>
                    <Link href="/contact">Get in touch</Link>
                </p>
            </div>
        </Container>
    );
}
