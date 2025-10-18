import logo from "./logo.png";

type ItemData = {
  label: string;
  url: string;
};

const items: ItemData[] = [
  {
    label: "Substack",
    url: "https://thescolon.substack.com",
  },
  {
    label: "Hashnode",
    url: "https://thescolon.hashnode.dev",
  },
  {
    label: "Dev.to",
    url: "https://dev.to/thescolon",
  },
  {
    label: "Linkedin newsletter",
    url: "https://www.linkedin.com/newsletters/the-scolon-7359456360293453826",
  },
];

export function HeroSection() {
  return (
    <section className="flex flex-col items-center py-28">
      <img
        alt="logo"
        className="transition-all duration-300 hover:scale-95"
        height={75}
        src={logo}
        width={75}
      />

      <h2 className="mt-10 text-center font-bold font-heading text-4xl leading-tight">
        Level up your
        <br />
        devs skills
      </h2>

      <p className="mt-6 laptop:w-10/12 text-center text-foreground/60 leading-7">
        A space for developer to learn more about development, design
        applications, growing dev skills and sharing tips and tricks to become
        better developer.
      </p>

      <div className="mt-10 flex flex-col gap-1">
        {items.map((item, i) => (
          <a className="flex items-center gap-2 py-2" href={item.url} key={i}>
            <i className="fi fi-sc-bullet text-foreground/40 text-sm" />
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
