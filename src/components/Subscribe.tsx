export default function Subscribe() {
  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto w-full max-w-[1140px] translate-y-[96px] px-6 lg:px-0">
        <div className="flex flex-col items-center gap-8 rounded-[10px] bg-white px-[70px] py-[58px] shadow-panel md:flex-row md:justify-between md:gap-6">
          <div className="text-center md:text-left">
            <h2 className="max-w-[371px] text-[35px] leading-[45px] font-medium text-ink">
              Subscribe Now for Get Special Features!
            </h2>
            <p className="mt-5 text-base leading-[30px] text-body">
              Let&apos;s subscribe with us and find the fun.
            </p>
          </div>
          <a
            href="#"
            className="shrink-0 rounded-[10px] bg-primary px-[45px] py-[17px] text-base font-bold text-white shadow-cta transition-transform hover:-translate-y-0.5"
          >
            Subscribe Now
          </a>
        </div>
      </div>
    </section>
  );
}
