import Image from "next/image";

type Plan = {
  name: string;
  features: string[];
  price: string;
  suffix?: string;
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Free Plan",
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
    price: "Free",
  },
  {
    name: "Standard Plan",
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
    ],
    price: "$9",
    suffix: " / mo",
  },
  {
    name: "Premium Plan",
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
      "Get New Features",
    ],
    price: "$12",
    suffix: " / mo",
    highlighted: true,
  },
];

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="m5 12.5 4.2 4.2L19 7"
        stroke="#2FAB73"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-gradient-to-b from-white to-shell pt-20 pb-[30px]"
    >
      <div className="mx-auto w-full max-w-[1140px] px-6 lg:px-0">
        <h2 className="mx-auto max-w-[383px] text-center text-[35px] leading-[50px] font-medium text-ink">
          Choose Your Plan
        </h2>
        <p className="mx-auto mt-5 max-w-[555px] text-center text-base leading-[30px] text-body">
          Let&apos;s choose the package that is best for you and explore it happily and
          cheerfully.
        </p>

        <div className="mt-[60px] grid gap-[50px] md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`group flex flex-col items-center rounded-[10px] border-2 bg-white px-[25px] pt-20 pb-[50px] transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary"
                  : "border-line hover:border-primary hover:shadow-panel"
              }`}
            >
              <Image
                src="/images/pricing-box.png"
                alt=""
                width={145}
                height={165}
                className="h-auto w-[145px] mix-blend-multiply"
              />
              <h3 className="mt-[30px] text-lg font-medium text-ink">{plan.name}</h3>

              <ul className="mt-[30px] w-full max-w-[190px] space-y-[10px]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-6">
                    <CheckIcon />
                    <span className="text-sm leading-[30px] text-body">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex w-full flex-col items-center pt-[50px]">
                <p className="text-[25px] leading-[30px] font-medium text-ink">
                  {plan.price}
                  {plan.suffix ? <span className="font-normal text-body">{plan.suffix}</span> : null}
                </p>
                <a
                  href="#"
                  className={`mt-5 w-[178px] rounded-full border-2 border-primary py-[11px] text-center text-base font-bold transition-all ${
                    plan.highlighted
                      ? "bg-primary text-white shadow-cta hover:-translate-y-0.5"
                      : "text-primary hover:bg-primary hover:text-white hover:shadow-cta"
                  }`}
                >
                  Select
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
