import Logo from "./Logo";

const columns = [
  {
    title: "Product",
    links: ["Download", "Pricing", "Locations", "Server", "Countries", "Blog"],
  },
  {
    title: "Engage",
    links: ["LaslesVPN ?", "FAQ", "Tutorials", "About Us", "Privacy Policy", "Terms of Service"],
  },
  {
    title: "Earn Money",
    links: ["Affiliate", "Become Partner"],
  },
];

const socials = [
  {
    name: "Facebook",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.3H7.6V13h2.7v8h3.2Z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 5.9c-.7.3-1.5.6-2.3.7a4 4 0 0 0 1.8-2.3c-.8.5-1.7.8-2.6 1a4 4 0 0 0-7 3.7A11.5 11.5 0 0 1 3.5 4.7a4 4 0 0 0 1.3 5.4c-.7 0-1.3-.2-1.9-.5a4 4 0 0 0 3.3 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.8 2.8A8.1 8.1 0 0 1 2 18.2 11.4 11.4 0 0 0 8.3 20c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 4.3c2.5 0 2.8 0 3.8.1 2.6.1 3.8 1.3 3.9 3.9 0 1 .1 1.3.1 3.8s0 2.8-.1 3.8c-.1 2.5-1.3 3.8-3.9 3.9-1 0-1.3.1-3.8.1s-2.8 0-3.8-.1c-2.6-.1-3.8-1.4-3.9-3.9 0-1-.1-1.3-.1-3.8s0-2.8.1-3.8c.1-2.6 1.3-3.8 3.9-3.9 1-.1 1.3-.1 3.8-.1ZM12 2.5c-2.6 0-2.9 0-3.9.1-3.4.1-5.4 2-5.5 5.5-.1 1-.1 1.3-.1 3.9s0 2.9.1 3.9c.1 3.4 2 5.4 5.5 5.5 1 .1 1.3.1 3.9.1s2.9 0 3.9-.1c3.4-.1 5.4-2 5.5-5.5.1-1 .1-1.3.1-3.9s0-2.9-.1-3.9c-.1-3.4-2-5.4-5.5-5.5-1-.1-1.3-.1-3.9-.1Zm0 4.6a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8Zm0 8a3.2 3.2 0 1 1 0-6.3 3.2 3.2 0 0 1 0 6.3Zm5.1-9.2a1.1 1.1 0 1 0 0 2.3 1.1 1.1 0 0 0 0-2.3Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-shell pt-[180px] pb-[100px]">
      <div className="mx-auto grid w-full max-w-[1140px] gap-14 px-6 lg:grid-cols-[340px_1fr] lg:gap-[126px] lg:px-0">
        <div>
          <Logo />
          <p className="mt-5 max-w-[340px] text-base leading-[30px] text-body">
            <span className="font-medium text-ink">LaslesVPN</span> is a private virtual network
            that has unique features and has high security.
          </p>
          <div className="mt-[30px] flex items-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-primary shadow-social transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="mt-[30px] text-base text-[#AFB5C0]">
            ©2020<span className="font-medium">LaslesVPN</span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-[126px]">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-medium text-ink">{column.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-base leading-[30px] text-body transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
