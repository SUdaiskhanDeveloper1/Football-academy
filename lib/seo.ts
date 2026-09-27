import type { Metadata } from "next";
import { images, type SiteImage } from "@/lib/images";
import { siteConfig } from "@/data/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: SiteImage;
  type?: "website" | "article";
  publishedTime?: string;
};

/** Builds consistent per-page metadata: canonical URL, Open Graph and Twitter cards. */
export function buildMetadata({ title, description, path, image = images.youthMatchAction, type = "website", publishedTime }: PageMetaInput): Metadata {
  const ogImage = { url: image.src.src, width: image.src.width, height: image.src.height, alt: image.alt };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "en_GB",
      type,
      images: [ogImage],
      ...(publishedTime ? { publishedTime } : {})
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url]
    }
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}
