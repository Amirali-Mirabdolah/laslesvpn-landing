export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5" aria-label="LaslesVPN home">
      <svg width="35" height="35" viewBox="0 0 35 35" fill="none" aria-hidden="true">
        <path
          d="M17.5 1.5 32 9.75v15.5L17.5 33.5 3 25.25V9.75L17.5 1.5Z"
          fill="#F53838"
        />
        <path
          d="m10.5 12 7 12 7-12h-4.2l-2.8 5.2L14.7 12h-4.2Z"
          fill="#fff"
        />
        <circle cx="17.5" cy="10" r="1.8" fill="#fff" />
      </svg>
      <span className="text-xl font-bold tracking-[0.01em] text-ink">
        Lasles<span className="font-bold">VPN</span>
      </span>
    </a>
  );
}
