import Logo from "./Logo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Help", href: "#help" },
];

export default function Header() {
  return (
    <header className="mx-auto flex h-[100px] w-full max-w-[1140px] items-center justify-between px-6 lg:px-0">
      <Logo />

      <nav className="hidden items-center gap-10 lg:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-base text-body transition-colors hover:text-primary"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-[30px]">
        <a href="#" className="text-base font-medium text-ink transition-colors hover:text-primary">
          Sign In
        </a>
        <a
          href="#"
          className="rounded-full border border-primary px-[38px] py-[10px] text-base font-medium text-primary transition-all hover:bg-primary hover:text-white hover:shadow-cta"
        >
          Sign Up
        </a>
      </div>
    </header>
  );
}
