export default function Page() {
  const faqs = [
    {
      q: "What equity grant types are supported?",
      a: "ISO, NSO, RSU, and SAR grants are all supported with accurate vesting schedule calculations and cliff tracking."
    },
    {
      q: "How does the tax calculator work?",
      a: "We estimate AMT exposure for ISOs and ordinary income for NSOs/RSUs based on your grant details and current FMV inputs."
    },
    {
      q: "Can I get calendar alerts for vesting events?",
      a: "Yes. Export vesting milestones to Google Calendar or iCal so you never miss a cliff or quarterly vest date."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Equity Vesting Tracker
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never miss a vesting milestone again
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-8">
          Track every equity grant, cliff date, and vesting schedule in one dashboard. Understand your tax exposure and get calendar alerts before each event.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Tracking — $9/mo
        </a>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📅", title: "Cliff & Vest Alerts", desc: "Calendar exports for every milestone" },
            { icon: "📊", title: "Visual Timeline", desc: "See all grants on one vesting chart" },
            { icon: "🧮", title: "Tax Estimator", desc: "AMT & ordinary income projections" }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited equity grants",
              "ISO, NSO, RSU & SAR support",
              "Vesting timeline dashboard",
              "Cliff & vest calendar alerts",
              "AMT & tax exposure estimates",
              "CSV export"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        © {new Date().getFullYear()} EquityTrack. All rights reserved.
      </footer>
    </main>
  );
}
