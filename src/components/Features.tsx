import Image from "next/image";

const featureList = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits.",
];

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#2FAB73" />
      <path
        d="m7 12.4 3.1 3.1L17 8.6"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Features() {
  return (
    <section id="features" className="mx-auto w-full max-w-[1140px] px-6 pt-[95px] pb-[130px] lg:px-0">
      <div className="grid items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-[170px]">
        <Image
          src="/images/feature-illustration.png"
          alt="Man presenting LaslesVPN features"
          width={508}
          height={415}
          className="mx-auto h-auto w-full max-w-[508px] mix-blend-multiply"
        />

        <div className="max-w-[380px]">
          <h2 className="text-[35px] leading-[50px] font-medium text-ink">
            We Provide Many Features You Can Use
          </h2>
          <p className="mt-5 text-base leading-[30px] text-body">
            You can explore the features that we provide with fun and have their own functions
            each feature.
          </p>
          <ul className="mt-5 space-y-[15px]">
            {featureList.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckIcon />
                <span className="text-sm leading-[30px] text-body">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
