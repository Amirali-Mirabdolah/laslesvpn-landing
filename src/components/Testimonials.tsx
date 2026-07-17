"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Testimonial = {
  name: string;
  location: string;
  rating: string;
  quote: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    quote:
      "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    avatar: "/images/avatar1.png"
  },
  {
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: "4.5",
    quote: "“I like it because I like to travel far and still can connect with high speed.”.",
    avatar: "/images/avatar2.png"
  },
  {
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: "4.5",
    quote:
      "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
    avatar: "/images/avatar3.png"
  },
  {
    name: "Eine Voll",
    location: "Berlin, Germany",
    rating: "4.5",
    quote:
      "“The connection is stable everywhere I go. LaslesVPN makes remote work feel completely secure and effortless.”.",
    avatar: "/images/avatar1.png"
  },
];

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FEA250" aria-hidden="true">
      <path d="M12 2.5 14.9 8.6l6.6.8-4.9 4.6 1.3 6.5L12 17.3 6.1 20.5l1.3-6.5L2.5 9.4l6.6-.8L12 2.5Z" />
    </svg>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const maxIndex = testimonials.length - 1;

  const getStep = (scroller: HTMLDivElement) => {
    const first = scroller.children[0] as HTMLElement | undefined;
    const second = scroller.children[1] as HTMLElement | undefined;
    if (first && second) {
      const a = first.getBoundingClientRect();
      const b = second.getBoundingClientRect();
      const step = b.left - a.left;
      if (step > 0) return step;
    }
    return 450;
  };

  const syncFromScroll = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const step = getStep(scroller);
    const index = Math.min(maxIndex, Math.max(0, Math.round(scroller.scrollLeft / step)));
    setActive(index);
    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    setCanPrev(scroller.scrollLeft > 4);
    setCanNext(scroller.scrollLeft < maxScroll - 4);
  }, [maxIndex]);

  useEffect(() => {
    syncFromScroll();
    window.addEventListener("resize", syncFromScroll);
    return () => window.removeEventListener("resize", syncFromScroll);
  }, [syncFromScroll]);

  const goTo = (index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const clamped = Math.min(maxIndex, Math.max(0, index));
    const step = getStep(scroller);
    scroller.scrollTo({ left: clamped * step, behavior: "smooth" });
    setActive(clamped);
  };

  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  return (
    <section id="testimonials" className="bg-white pt-[50px] pb-[30px]">
      <div className="mx-auto w-full max-w-[1140px] px-6 lg:px-0">
        <h2 className="mx-auto max-w-[448px] text-center text-[35px] leading-[50px] font-medium text-ink">
          Trusted by Thousands of Happy Customer
        </h2>
        <p className="mx-auto mt-5 max-w-[555px] text-center text-base leading-[30px] text-body">
          These are the stories of our customers who have joined us with great pleasure when using
          this crazy feature.
        </p>
      </div>

      <div className="mx-auto mt-[60px] w-full max-w-[1140px] px-6 lg:px-0">
        <div
          ref={scrollerRef}
          onScroll={syncFromScroll}
          className="no-scrollbar flex snap-x snap-mandatory gap-[50px] overflow-x-auto scroll-smooth py-1"
        >
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className={`w-[85vw] max-w-[400px] shrink-0 snap-start rounded-[10px] border-2 bg-white p-[30px] transition-colors duration-300 lg:w-[400px] ${index === active ? "border-primary" : "border-line"
                }`}
            >
              <div className="flex items-center gap-5">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="h-[50px] w-[50px] rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-ink">{item.name}</h3>
                  <p className="mt-0.5 text-sm text-body">{item.location}</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-base text-ink">{item.rating}</span>
                  <StarIcon />
                </div>
              </div>
              <p className="mt-5 text-base leading-[30px] text-ink">{item.quote}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-[60px] flex w-full max-w-[1140px] items-center justify-between px-6 lg:px-0">
        <div className="flex items-center gap-[15px]">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => goTo(index)}
              className={`h-[15px] cursor-pointer rounded-full transition-all duration-300 ${index === active ? "w-[45px] bg-primary" : "w-[15px] bg-[#DDE0E4] hover:bg-primary/40"
                }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-5">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            disabled={!canPrev && active === 0}
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border-2 border-primary text-primary transition-all hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-primary"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M15 5l-7 7 7 7"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            disabled={!canNext}
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow-cta transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
