import Image from "next/image";

function NetflixLogo() {
  return (
    <span className="text-[26px] font-black tracking-[0.18em] uppercase">Netflix</span>
  );
}

function RedditLogo() {
  return (
    <span className="flex items-center gap-2">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" aria-hidden="true">
        <circle cx="15" cy="15" r="14" fill="currentColor" />
        <g fill="#F8F8F8">
          <circle cx="10.5" cy="15.5" r="1.7" />
          <circle cx="19.5" cy="15.5" r="1.7" />
          <path d="M10.5 19.4c1.2 1 2.7 1.6 4.5 1.6s3.3-.6 4.5-1.6l-.9-1c-1 .8-2.2 1.2-3.6 1.2s-2.6-.4-3.6-1.2l-.9 1Z" />
          <circle cx="21.8" cy="8.4" r="1.4" />
          <path d="M15.6 12.2 16.7 7l4.2.9-.3 1.2-3-.7-.8 4-1.2-.2Z" />
        </g>
      </svg>
      <span className="text-[26px] font-bold lowercase">reddit</span>
    </span>
  );
}

function AmazonLogo() {
  return (
    <span className="relative inline-block">
      <span className="text-[26px] font-bold lowercase tracking-tight">amazon</span>
      <svg
        className="absolute -bottom-1 left-1 w-[84px]"
        viewBox="0 0 90 12"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2 3c22 8 58 8 82-1"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path d="m84 1 5 1-3.4 3.8L84 1Z" fill="currentColor" />
      </svg>
    </span>
  );
}

function DiscordLogo() {
  return (
    <span className="flex items-center gap-2">
      <svg width="32" height="26" viewBox="0 0 32 26" fill="currentColor" aria-hidden="true">
        <path d="M27 2.4A26 26 0 0 0 20.6.5l-.8 1.6a24 24 0 0 0-7.6 0L11.4.5A26 26 0 0 0 5 2.4C1.6 7.5.7 12.5 1.1 17.4a26.2 26.2 0 0 0 7.9 4l1.7-2.7a17 17 0 0 1-2.7-1.3l.7-.5c5.1 2.4 10.7 2.4 15.8 0l.7.5c-.9.5-1.8 1-2.7 1.3l1.7 2.7a26.2 26.2 0 0 0 7.9-4c.5-5.7-.9-10.6-4.1-15ZM11.5 14.4c-1.3 0-2.3-1.2-2.3-2.6s1-2.6 2.3-2.6 2.4 1.2 2.3 2.6c0 1.4-1 2.6-2.3 2.6Zm9 0c-1.3 0-2.3-1.2-2.3-2.6s1-2.6 2.3-2.6 2.4 1.2 2.3 2.6c0 1.4-1 2.6-2.3 2.6Z" />
      </svg>
      <span className="text-[24px] font-bold tracking-[0.08em] uppercase">Discord</span>
    </span>
  );
}

function SpotifyLogo() {
  return (
    <span className="flex items-center gap-2">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" aria-hidden="true">
        <circle cx="15" cy="15" r="14" fill="currentColor" />
        <g stroke="#F8F8F8" strokeWidth="2" strokeLinecap="round" fill="none">
          <path d="M8.5 11.5c4.5-1.4 9.5-1 13 1.2" />
          <path d="M9.3 15.6c3.8-1.1 8-.8 11 1" />
          <path d="M10 19.4c3-.8 6.3-.6 8.7.8" />
        </g>
      </svg>
      <span className="text-[26px] font-bold">Spotify</span>
    </span>
  );
}

const sponsors = [
  { name: "Netflix", node: <NetflixLogo /> },
  { name: "reddit", node: <RedditLogo /> },
  { name: "amazon", node: <AmazonLogo /> },
  { name: "Discord", node: <DiscordLogo /> },
  { name: "Spotify", node: <SpotifyLogo /> },
];

export default function Network() {
  return (
    <section id="help" className="bg-gradient-to-b from-shell to-white pt-[50px]">
      <div className="mx-auto w-full max-w-[1140px] px-6 lg:px-0">
        <h2 className="mx-auto max-w-[384px] text-center text-[35px] leading-[50px] font-medium text-ink">
          Huge Global Network of Fast VPN
        </h2>
        <p className="mx-auto mt-5 max-w-[555px] text-center text-base leading-[30px] text-body">
          See <span className="font-medium text-ink">LaslesVPN</span> everywhere to make it easier
          for you when you move locations.
        </p>

        <div className="mt-[35px]">
          <Image
            src="/images/world-map.png"
            alt="LaslesVPN server locations around the world"
            width={1060}
            height={538}
            className="mx-auto h-auto w-full max-w-[1060px] mix-blend-multiply"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 py-[35px] text-[#A2A6B0] lg:justify-between lg:gap-0">
          {sponsors.map((sponsor) => (
            <span
              key={sponsor.name}
              className="opacity-80 grayscale transition-all duration-300 hover:text-[#6b7280] hover:opacity-100"
            >
              {sponsor.node}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
