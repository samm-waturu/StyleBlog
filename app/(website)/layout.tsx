import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";

export async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    metadataBase: new URL(settings.url),
    title: {
      default:
        settings?.title ||
        "StyleBook - Keeping up with fashion trends",
      template: "%s | StyleBook"
    },
    description:
      settings?.description ||
      "StyleBook - Keeping up with fashion trends",
    keywords: ["Next.js", "Sanity", "Tailwind CSS"],
    authors: [{ name: "Samwel muiruri" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "StyleBook",
      card: "null"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <>

      {/*<Scroll/>*/}

      <Navbar {...settings} />

      <div>
        {children}
      </div>

      <Footer {...settings} />
    </>
  );
}
