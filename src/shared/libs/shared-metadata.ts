type GeneratedMetadataInput = {
  title: string;
  description: string;
  image?: string;
};

export function generatedMetadata({
  title,
  description,
  image,
}: GeneratedMetadataInput):
  | (
      | React.DetailedHTMLProps<
          React.MetaHTMLAttributes<HTMLMetaElement>,
          HTMLMetaElement
        >
      | undefined
    )[]
  | undefined {
  return [
    { title },
    {
      name: "description",
      content: description,
    },
    {
      name: "keywords",
      content:
        "Developer Newsletter, Developer contents, Developer Tips, Resources, Courses",
    },
    { name: "creator", content: "nyomansunima" },
    { name: "publisher", content: "nyomansunima" },
    { name: "application-name", content: "Nyoman Sunima" },
    {
      name: "google-site-verification",
      content: "AuqbcUk22FdxPy-EYAxlRF3H37Rcpvhnbk3p__3fDNA",
    },
    { name: "category", content: "Websites" },
    { name: "generator", content: "Tanstack start" },
    { name: "pinterest-rich-pin", content: "true" },
    {
      name: "og:title",
      content: title,
    },
    {
      name: "og:description",
      content: description,
    },
    {
      name: "og:image",
      content:
        image ??
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1764749978275/8d439e58-75ff-4106-99e7-f6d66b867ca3.png",
    },
    { name: "og:locale", content: "en_US" },
    { name: "og:type", content: "website" },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "nyomansunima" },
    { name: "twitter:creator", content: "@nyomansunima" },
    {
      name: "twitter:image",
      content:
        image ??
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1764749978275/8d439e58-75ff-4106-99e7-f6d66b867ca3.png",
    },
  ];
}
