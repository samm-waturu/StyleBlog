import Container from "@/components/container";
import {urlForImage} from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";
import {PortableText} from "@/lib/sanity/plugins/portabletext";

export default function About({authors, settings}) {
    return (
        <Container>
            <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
                About
            </h1>
            <div className="text-center">
                <p className="text-lg">I am {authors.slice(0, 3).map(author => {
                        return author.name
                    }
                )}
                </p>
            </div>

            {/*

                  <div className="grid grid-cols-3 gap-5 mt-6 mb-16 md:mt-16 md:mb-32 md:gap-16">
                    {authors.slice(0, 3).map(author => {
                      const imageProps = urlForImage(author?.image) || null;
                      return (
                        <div
                          key={author._id}
                          className="relative overflow-hidden rounded-md aspect-square odd:translate-y-10 odd:md:translate-y-16">
                            <Image
                              src={imageProps.src}
                              alt={author.name || " "}
                              fill
                              sizes="(max-width: 320px) 100vw, 320px"
                              className="object-cover"
                            />



               <Link href={`/author/${author.slug}`}>
                <Image
                  src={imageProps.src}
                  alt={author.name || " "}
                  fill
                  sizes="(max-width: 320px) 100vw, 320px"
                  className="object-cover"
                />
              </Link>


        </div>

    );
}
)
}
</div>

  */}

            <div className="mx-auto prose text-center dark:prose-invert mt-14">
                    {authors.slice(0, 3).map(author => {
                        return(
                            <>
                            <PortableText value={author.bio}/>
                            </>
                        )
                    })}


                <p>
                    <Link href="/contact">Get in touch</Link>
                </p>
            </div>
        </Container>
    )
        ;
}
