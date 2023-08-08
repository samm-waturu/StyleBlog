import Container from "@/components/container";
import Link from "next/link";
import { PortableText } from "@/lib/sanity/plugins/portabletext";

export default function About({ authors }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About
      </h1>

      <div className="text-center">
        <p className="text-lg">
          I am{" "}
          {authors.map(author => {
            return author.name;
          })}
        </p>
      </div>
      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        {authors.map(author => {
          return (
            <>
              <PortableText value={author.bio} />
            </>
          );
        })}
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
