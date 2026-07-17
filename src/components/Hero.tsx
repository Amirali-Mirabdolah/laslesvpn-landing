import Image from "next/image";

export default function Hero() {
  return (
    <section id="about" className="mx-auto w-full max-w-[1140px] px-6 pt-[50px] lg:px-0">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
        <div className="order-2 lg:order-1">
          <h1 className="max-w-[555px] text-[34px] leading-[1.4] font-medium text-ink lg:text-[50px]">
            Want anything to be easy with <span className="font-bold">LaslesVPN.</span>
          </h1>
          <p className="mt-5 max-w-[555px] text-base leading-[30px] text-body">
            Provide a network for all your needs with ease and fun using{" "}
            <span className="font-medium text-ink">LaslesVPN</span> discover interesting features
            from us.
          </p>
          <a
            href="#pricing"
            className="mt-[50px] inline-block rounded-[10px] bg-primary px-[77px] py-[17px] text-base font-bold text-white shadow-cta transition-transform hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </div>

        <div className="order-1 lg:order-2">
          <Image
            src="/images/hero-illustration.png"
            alt="Woman working on a laptop with LaslesVPN"
            width={611}
            height={383}
            priority
            className="mx-auto h-auto w-full max-w-[611px] mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
}
