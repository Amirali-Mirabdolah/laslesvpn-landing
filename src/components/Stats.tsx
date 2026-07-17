const stats = [
  {
    value: "90+",
    label: "Users",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-3.34 0-8 1.67-8 5v1h16v-1c0-3.33-4.66-5-8-5Z"
          fill="#F53838"
        />
      </svg>
    ),
  },
  {
    value: "30+",
    label: "Locations",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"
          fill="#F53838"
        />
      </svg>
    ),
  },
  {
    value: "50+",
    label: "Servers",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 4h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm0 10h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm2-8v2h2V6H6Zm0 10v2h2v-2H6Z"
          fill="#F53838"
        />
      </svg>
    ),
  },
];

export default function Stats() {
  return (
    <section className="mx-auto w-full max-w-[1140px] px-6 pt-[103px] lg:px-0">
      <div className="grid grid-cols-1 rounded-[10px] bg-white py-[37px] shadow-panel sm:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex items-center justify-center gap-9 py-[22px] sm:py-0 ${index > 0 ? "border-t border-line-soft sm:border-t-0 sm:border-l" : ""
              }`}
          >
            {/* <div className="bg-red-300 w-max"> */}
            <span className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-primary-soft">
              {stat.icon}
            </span>
            <span className="flex flex-col items-center w-[93px]">
              <span className="block text-[25px] leading-[30px] font-bold text-ink">
                {stat.value}
              </span>
              <span className="mt-1 block text-xl text-body">{stat.label}</span>
            </span>
            {/* </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}
