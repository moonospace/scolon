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
    label: "Linkedin",
    url: "https://www.linkedin.com/newsletters/the-scolon-7359456360293453826",
  },
];

export function HeroSection() {
  return (
    <section className="container mx-auto flex flex-col items-center px-5 py-28 lg:px-0">
      <svg
        data-name="Layer 2"
        height={75}
        id="Layer_2"
        viewBox="0 0 107.83 107.85"
        width={75}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g data-name="Layer 1" id="Layer_1-2">
          <g data-name="New Symbol 420" id="New_Symbol_420">
            <g data-name="Layer 2" id="Layer_2-2">
              <g data-name="Layer 1-2" id="Layer_1-2">
                <rect height="9.38" width="14.06" x="37.51" y="98.47" />
                <rect height="9.38" width="28.13" x="23.45" y="84.38" />
                <rect height="9.38" width="37.51" x="14.06" y="70.32" />
                <rect height="9.38" width="51.58" y="56.26" />
                <rect height="14.06" width="9.38" x="98.45" y="56.28" />
                <rect height="28.13" width="9.38" x="84.38" y="56.28" />
                <rect height="37.51" width="9.38" x="70.32" y="56.28" />
                <rect height="51.58" width="9.38" x="56.28" y="56.28" />
                <rect height="9.38" width="14.06" x="56.26" />
                <rect height="9.38" width="28.13" x="56.28" y="14.06" />
                <rect height="9.38" width="37.51" x="56.26" y="28.15" />
                <rect height="9.38" width="51.58" x="56.26" y="42.19" />
                <rect height="14.06" width="9.38" y="37.51" />
                <rect height="28.13" width="9.38" x="14.06" y="23.45" />
                <rect height="37.51" width="9.38" x="28.13" y="14.06" />
                <rect height="51.58" width="9.38" x="42.19" />
              </g>
            </g>
          </g>
        </g>
      </svg>

      <h2 className="mt-10 text-center font-medium text-5xl tracking-tighter">
        Scolon.
      </h2>

      <p className="mt-6 text-center text-foreground/80 leading-relaxed lg:w-4/12">
        A space for developer to learn more about development, design
        applications, growing dev skills and sharing tips and tricks to become
        better developer.
      </p>

      <div className="mt-10 flex flex-col gap-1">
        {items.map((item, i) => (
          <a className="flex items-center gap-2 py-2" href={item.url} key={i}>
            <svg
              className="fill-foreground/40"
              height="10"
              viewBox="0 0 24 24"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Z" />
            </svg>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
