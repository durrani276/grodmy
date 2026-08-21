import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  ArrowRight, TrendingUp, Users, BookOpen, BarChart3,
  CheckCircle, Menu, X, Star, Target, Award, Zap,
  Globe, MessageSquare, ChevronRight,
} from "lucide-react";

const DISPLAY = "'Playfair Display', Georgia, serif";
const MONO = "'DM Mono', 'Courier New', monospace";

function CountUp({ target, suffix = "", decimals = 0 }: { target: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const steps = 50;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target, decimals]);

  return <span ref={ref}>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}</span>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#FAFAF7] text-[#141418] overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
    >
      {/* ─── NAV ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAFAF7]/95 backdrop-blur border-b border-black/8 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-[#1C2260] rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm" style={{ fontFamily: MONO }}>G</span>
            </div>
            <span className="font-bold text-xl tracking-tight" style={{ fontFamily: DISPLAY }}>
              Grodemy
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {["Services", "How It Works", "Results", "For Instructors"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-[#6B6B72] hover:text-[#141418] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-[#141418] hover:text-[#1C2260] transition-colors">
              Log in
            </a>
            <a
              href="#"
              className="bg-[#E8481C] text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-[#d03d15] transition-colors flex items-center gap-2"
            >
              Get Started <ArrowRight size={14} />
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-[#141418]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-[#FAFAF7] border-t border-black/8 px-6 py-6 flex flex-col gap-4">
            {["Services", "How It Works", "Results", "For Instructors"].map((item) => (
              <a key={item} href="#" className="text-base font-medium text-[#141418]">
                {item}
              </a>
            ))}
            <a
              href="#"
              className="bg-[#E8481C] text-white px-5 py-3 rounded-md text-sm font-medium text-center mt-2"
            >
              Get Started
            </a>
          </div>
        )}
      </header>

      {/* ─── HERO ─── */}
      <section className="pt-28 lg:pt-36 pb-20 lg:pb-28 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_460px] gap-14 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2.5 border border-[#1C2260]/20 bg-[#1C2260]/6 rounded-full px-4 py-1.5 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E8481C] animate-pulse" />
              <span
                className="text-xs text-[#1C2260] tracking-widest uppercase font-medium"
                style={{ fontFamily: MONO }}
              >
                Udemy Business Marketing
              </span>
            </div>

            <h1
              className="text-5xl lg:text-[68px] font-bold leading-[1.04] tracking-tight mb-6"
              style={{ fontFamily: DISPLAY }}
            >
              Bring corporate learners to{" "}
              <em className="italic text-[#E8481C] not-italic" style={{ fontStyle: "italic" }}>
                your
              </em>{" "}
              courses.
            </h1>

            <p className="text-lg lg:text-xl text-[#6B6B72] leading-relaxed max-w-[520px] mb-10">Grodemy runs targeted outreach campaigns that connect enterprise L&D teams with Udemy Business instructors — turning buried listings into high-enrollment, high-engagement programs.</p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#"
                className="bg-[#1C2260] text-white px-7 py-4 rounded-md font-medium hover:bg-[#141850] transition-colors flex items-center gap-2.5 text-sm"
              >
                Grow My Enrollments <ArrowRight size={15} />
              </a>
              <a
                href="#"
                className="text-sm font-medium text-[#141418] hover:text-[#E8481C] transition-colors underline underline-offset-4"
              >
                See how it works →
              </a>
            </div>

            <div className="mt-12 pt-10 border-t border-black/10 grid grid-cols-3 gap-6">
              {[
                { label: "Average enrollment lift", value: "340%" },
                { label: "Corporate teams reached/mo", value: "1,200+" },
                { label: "Instructor ROI", value: "4.8×" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div
                    className="text-2xl lg:text-3xl font-bold text-[#1C2260]"
                    style={{ fontFamily: DISPLAY }}
                  >
                    {value}
                  </div>
                  <div className="text-xs text-[#6B6B72] mt-1 leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Live dashboard card */}
          <div className="relative">
            <div className="bg-[#1C2260] rounded-2xl p-6 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-white/4 -translate-y-1/3 translate-x-1/4 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-[#E8481C]/15 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs text-white/50 uppercase tracking-widest" style={{ fontFamily: MONO }}>
                    Live Dashboard
                  </span>
                  <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-2.5 py-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-white/80">Active</span>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="text-sm text-white/50 mb-1">This Month's Enrollments</div>
                  <div className="text-4xl font-bold" style={{ fontFamily: DISPLAY }}>
                    2,847
                  </div>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <TrendingUp size={13} className="text-green-400" />
                    <span className="text-sm text-green-400 font-medium">+312% vs. last quarter</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: "Completion Rate", value: "78%", Icon: CheckCircle },
                    { label: "Avg. Rating", value: "4.9★", Icon: Star },
                    { label: "Corporate Teams", value: "34", Icon: Users },
                    { label: "Revenue", value: "$18,240", Icon: BarChart3 },
                  ].map(({ label, value, Icon }) => (
                    <div key={label} className="bg-white/10 rounded-xl p-3.5">
                      <Icon size={13} className="text-white/40 mb-2" />
                      <div className="text-lg font-bold leading-none mb-1">{value}</div>
                      <div className="text-xs text-white/40">{label}</div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-4">
                  <div
                    className="text-xs text-white/40 mb-3 uppercase tracking-widest"
                    style={{ fontFamily: MONO }}
                  >
                    Recent Activity
                  </div>
                  {[
                    { company: "Salesforce L&D", count: 48, time: "2m ago" },
                    { company: "Accenture Training", count: 120, time: "1h ago" },
                    { company: "IBM Workforce Dev", count: 67, time: "3h ago" },
                  ].map(({ company, count, time }) => (
                    <div
                      key={company}
                      className="flex items-center justify-between py-2.5 border-b border-white/6 last:border-0"
                    >
                      <div>
                        <div className="text-sm font-medium">{company}</div>
                        <div className="text-xs text-white/40">{count} enrolled</div>
                      </div>
                      <span className="text-xs text-white/30" style={{ fontFamily: MONO }}>
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* ─── LOGO BAR ─── */}
      <div className="border-y border-black/8 bg-white/50 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p
            className="text-xs text-[#6B6B72] uppercase tracking-widest text-center mb-7"
            style={{ fontFamily: MONO }}
          >
            Instructors trusted by teams at
          </p>
          <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-3">
            {["Deloitte", "IBM", "Accenture", "Microsoft", "Salesforce", "Amazon", "JPMorgan Chase"].map(
              (corp) => (
                <span
                  key={corp}
                  className="text-[#141418]/35 font-semibold text-sm lg:text-base tracking-tight"
                >
                  {corp}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* ─── PROBLEM ─── */}
      <section className="py-24 lg:py-36 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p
              className="text-xs text-[#E8481C] uppercase tracking-widest mb-5"
              style={{ fontFamily: MONO }}
            >
              The Problem
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold leading-[1.15] mb-6"
              style={{ fontFamily: DISPLAY }}
            >
              25,000+ courses on Udemy Business. Most corporate teams never find yours.
            </h2>
            <p className="text-[#6B6B72] text-lg leading-relaxed mb-8">
              You built an exceptional course. But inside Udemy Business's vast catalog, even 5-star content gets buried. L&D managers don't browse — they're pitched to. Grodemy runs the outreach so you don't have to.
            </p>
            <ul className="space-y-4">
              {[
                "Corporate L&D buyers receive 40+ vendor pitches per week — yours needs to break through",
                "Enterprise purchasing cycles require sustained, multi-touch outreach over weeks or months",
                "Without internal advocacy, even excellent courses stall at single-digit enrollments",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E8481C]/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E8481C]" />
                  </div>
                  <p className="text-sm text-[#6B6B72] leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                label: "Average Instructor Visibility",
                value: "4%",
                sub: "of enterprise teams aware of top-rated courses",
                bg: "bg-[#F2F1EE]",
                textColor: "text-[#141418]",
              },
              {
                label: "Global L&D Online Budget",
                value: "$62B",
                sub: "allocated annually, growing 14% year-over-year",
                bg: "bg-[#1C2260]",
                textColor: "text-white",
              },
              {
                label: "Competing Courses",
                value: "25K+",
                sub: "fighting for the same enterprise training budgets",
                bg: "bg-[#E8481C]",
                textColor: "text-white",
              },
              {
                label: "Decision Makers Reached",
                value: "1,200+",
                sub: "monthly by Grodemy campaigns across verticals",
                bg: "bg-[#F2F1EE]",
                textColor: "text-[#141418]",
              },
            ].map(({ label, value, sub, bg, textColor }) => (
              <div key={label} className={`${bg} rounded-2xl p-6`}>
                <div
                  className={`text-3xl lg:text-4xl font-bold mb-2 ${textColor}`}
                  style={{ fontFamily: DISPLAY }}
                >
                  {value}
                </div>
                <div
                  className={`text-xs font-medium uppercase tracking-wide mb-1.5 opacity-60 ${textColor}`}
                  style={{ fontFamily: MONO }}
                >
                  {label}
                </div>
                <div className={`text-xs leading-relaxed opacity-55 ${textColor}`}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-24 lg:py-36 bg-[#1C2260] text-white px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[300px_1fr] gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <p
                className="text-xs text-[#E8481C] uppercase tracking-widest mb-4"
                style={{ fontFamily: MONO }}
              >
                The Method
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold leading-tight"
                style={{ fontFamily: DISPLAY }}
              >
                How Grodemy works
              </h2>
              <p className="mt-6 text-white/55 leading-relaxed text-base">
                A proven three-phase process that turns your Udemy Business listing into a must-have for enterprise L&D programs.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-5 py-3 rounded-md text-sm transition-colors"
              >
                View full process <ChevronRight size={14} />
              </a>
            </div>

            <div>
              {[
                {
                  num: "01",
                  title: "Course & Market Audit",
                  desc: "We analyze your course positioning, competitive landscape inside Udemy Business, and identify the corporate verticals most likely to benefit — and buy. Week 1–2.",
                  Icon: BookOpen,
                  detail: ["Competitive catalog mapping", "Ideal buyer persona definition", "Keyword and title optimization"],
                },
                {
                  num: "02",
                  title: "Targeted L&D Outreach",
                  desc: "Our team runs multi-channel outreach campaigns to L&D managers and HR leaders at 500+ target companies — via email, LinkedIn, and industry communities. Weeks 3–10.",
                  Icon: Target,
                  detail: ["Personalized outreach sequences", "LinkedIn decision-maker targeting", "Pilot program introductions"],
                },
                {
                  num: "03",
                  title: "Enrollment & Engagement Growth",
                  desc: "As enrollments compound, we optimize campaigns in real-time, track completion rates, and build long-term relationships with corporate training teams. Week 10+.",
                  Icon: TrendingUp,
                  detail: ["Real-time campaign optimization", "Completion rate monitoring", "Enterprise expansion pathways"],
                },
              ].map(({ num, title, desc, Icon, detail }, i) => (
                <div
                  key={num}
                  className="flex gap-7 pb-14 last:pb-0 border-b border-white/10 last:border-0 pt-14 first:pt-0"
                >
                  <div
                    className="text-5xl font-bold text-white/15 leading-none flex-shrink-0 pt-1"
                    style={{ fontFamily: MONO }}
                  >
                    {num}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon size={17} className="text-[#E8481C]" />
                      <h3
                        className="text-xl font-bold"
                        style={{ fontFamily: DISPLAY }}
                      >
                        {title}
                      </h3>
                    </div>
                    <p className="text-white/55 leading-relaxed mb-5">{desc}</p>
                    <ul className="flex flex-col gap-2">
                      {detail.map((d) => (
                        <li key={d} className="flex items-center gap-2.5 text-sm text-white/70">
                          <div className="w-1 h-1 rounded-full bg-[#E8481C] flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24 lg:py-36 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p
            className="text-xs text-[#E8481C] uppercase tracking-widest mb-4"
            style={{ fontFamily: MONO }}
          >
            What We Do
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold leading-[1.15]"
            style={{ fontFamily: DISPLAY }}
          >
            Full-stack marketing for Udemy Business instructors
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              Icon: Globe,
              title: "Corporate Outreach Campaigns",
              desc: "Direct-to-L&D campaigns that put your course in front of decision makers at 500+ enterprise companies actively allocating Udemy Business licenses.",
            },
            {
              Icon: Target,
              title: "Vertical Targeting",
              desc: "Precision targeting by industry, company size, and L&D maturity — so your Python for Finance course reaches finance teams, not everyone.",
            },
            {
              Icon: BarChart3,
              title: "Real-Time Analytics Dashboard",
              desc: "A live portal showing enrollment sources, campaign performance, completion rates, and revenue attribution updated daily.",
            },
            {
              Icon: MessageSquare,
              title: "Content Repositioning",
              desc: "We reframe your descriptions, learning objectives, and titles for corporate buyers who think in business outcomes, not course topics.",
            },
            {
              Icon: Users,
              title: "L&D Partnership Development",
              desc: "We broker introductions and pilot agreements with corporate training managers, turning one enrollment into a company-wide deployment.",
            },
            {
              Icon: Award,
              title: "Ongoing Growth Management",
              desc: "Monthly strategy reviews, campaign refreshes, and expansion into new verticals as your course catalog and reputation grow.",
            },
          ].map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-[#F2F1EE] hover:bg-[#1C2260] rounded-2xl p-8 transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-[#E8481C]/12 group-hover:bg-[#E8481C]/20 flex items-center justify-center mb-6 transition-colors">
                <Icon size={17} className="text-[#E8481C]" />
              </div>
              <h3
                className="text-lg font-bold mb-3 group-hover:text-white transition-colors"
                style={{ fontFamily: DISPLAY }}
              >
                {title}
              </h3>
              <p className="text-sm text-[#6B6B72] group-hover:text-white/55 leading-relaxed transition-colors">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── RESULTS ─── */}
      <section className="py-24 lg:py-32 bg-[#F2F1EE] px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p
                className="text-xs text-[#E8481C] uppercase tracking-widest mb-4"
                style={{ fontFamily: MONO }}
              >
                Proven Results
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold leading-[1.15] mb-6"
                style={{ fontFamily: DISPLAY }}
              >
                Instructors who work with us don't plateau.
              </h2>
              <p className="text-[#6B6B72] text-lg leading-relaxed mb-10">
                The numbers below represent real outcomes from Grodemy campaigns run over the past 18 months. Not cherry-picked — these are program averages across all instructors we've served.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#1C2260] text-white px-6 py-3.5 rounded-md text-sm font-medium hover:bg-[#141850] transition-colors"
              >
                View Case Studies <ArrowRight size={14} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                { target: 340, suffix: "%", label: "Average enrollment increase in 90 days" },
                { target: 85, suffix: "+", label: "Instructors scaled with Grodemy campaigns" },
                { target: 1200, suffix: "+", label: "Corporate L&D teams reached per month" },
                { target: 4.8, suffix: "×", label: "Average return on marketing investment", decimals: 1 },
              ].map(({ target, suffix, label, decimals }) => (
                <div key={label} className="bg-white rounded-2xl p-8">
                  <div
                    className="text-4xl lg:text-5xl font-bold text-[#1C2260] mb-3"
                    style={{ fontFamily: DISPLAY }}
                  >
                    <CountUp target={target} suffix={suffix} decimals={decimals} />
                  </div>
                  <div className="text-sm text-[#6B6B72] leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 lg:py-36 px-6 lg:px-10 max-w-7xl mx-auto">
        <p
          className="text-xs text-[#E8481C] uppercase tracking-widest text-center mb-14"
          style={{ fontFamily: MONO }}
        >
          From Instructors
        </p>
        <div className="grid lg:grid-cols-2 gap-7">
          {[
            {
              quote:
                "Within 60 days of launching our Grodemy campaign, three Fortune 500 L&D teams had piloted my course. By month four, two of them deployed it company-wide to over 1,400 employees.",
              name: "Marcus Chen",
              role: "Instructor — Data Analytics for Business Leaders",
              result: "1,400 corporate enrollments",
            },
            {
              quote:
                "I had a 4.8-star course sitting at 200 enrollments for two years. Grodemy repositioned it for enterprise buyers and ran outreach to HR tech companies. Now I'm at 3,800 enrollments with recurring license deals.",
              name: "Priya Nambiar",
              role: "Instructor — HR Transformation & People Analytics",
              result: "3,800 total enrollments",
            },
          ].map(({ quote, name, role, result }) => (
            <div
              key={name}
              className="bg-[#1C2260] rounded-2xl p-10 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-white/3 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
              <div className="flex gap-0.5 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={13} fill="#E8481C" className="text-[#E8481C]" />
                ))}
              </div>
              <blockquote
                className="text-lg leading-relaxed text-white/85 mb-8 relative z-10"
                style={{ fontFamily: DISPLAY }}
              >
                &ldquo;{quote}&rdquo;
              </blockquote>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="font-semibold text-white">{name}</div>
                  <div className="text-sm text-white/45 mt-0.5">{role}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div
                    className="text-xs text-[#E8481C] uppercase tracking-wide"
                    style={{ fontFamily: MONO }}
                  >
                    Result
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">{result}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing tease */}
        <div className="mt-14 border border-black/10 rounded-2xl p-8 lg:p-10 grid lg:grid-cols-[1fr_auto] gap-8 items-center bg-white">
          <div>
            <div
              className="text-xs text-[#6B6B72] uppercase tracking-widest mb-3"
              style={{ fontFamily: MONO }}
            >
              Our Model
            </div>
            <h3
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: DISPLAY }}
            >
              Zero upfront cost — we earn only when you do.
            </h3>
            <p className="text-[#6B6B72] text-sm leading-relaxed max-w-xl">
              Grodemy runs on a pure revenue-share model. No retainers, no monthly fees, no risk to you. We take a small agreed percentage only after revenue lands in your account.
            </p>
          </div>
          <a
            href="#"
            className="bg-[#E8481C] text-white px-7 py-4 rounded-md text-sm font-medium whitespace-nowrap hover:bg-[#d03d15] transition-colors flex items-center gap-2"
          >
            How Revenue Share Works <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 lg:py-28 border-t border-black/8 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[300px_1fr] gap-16">
          <div>
            <p
              className="text-xs text-[#E8481C] uppercase tracking-widest mb-4"
              style={{ fontFamily: MONO }}
            >
              Common Questions
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold leading-tight"
              style={{ fontFamily: DISPLAY }}
            >
              Answers for instructors
            </h2>
          </div>
          <div className="divide-y divide-black/8">
            {[
              {
                q: "Do I need a large course catalog to work with Grodemy?",
                a: "No. We've achieved strong results for instructors with a single flagship course. Depth and quality matter far more than catalog size in corporate settings.",
              },
              {
                q: "How is Grodemy different from Udemy's own promotions?",
                a: "Udemy's promotions are algorithmic and catalog-wide. Grodemy does targeted, relationship-driven outreach directly to L&D decision makers at named companies — it's a fundamentally different motion.",
              },
              {
                q: "What kind of courses perform best?",
                a: "Professional skills with clear business applications — leadership, data, software, compliance, sales, finance, and project management — perform consistently well. Niche technical courses also do well when we target the right vertical.",
              },
              {
                q: "How long before I see results?",
                a: "Most instructors see meaningful enrollment movement within 45–60 days. Full campaign velocity typically arrives at the 90-day mark as relationships compound.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="py-6">
                <div
                  className="font-semibold mb-2 text-[#141418]"
                  style={{ fontFamily: DISPLAY }}
                >
                  {q}
                </div>
                <p className="text-sm text-[#6B6B72] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="mx-4 lg:mx-8 mb-24 rounded-3xl bg-[#E8481C] text-white overflow-hidden relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 70% 50%, rgba(255,255,255,0.12) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
          style={{ background: "#141418", transform: "translate(-30%, 40%)" }}
        />
        <div className="max-w-3xl mx-auto px-10 py-20 lg:py-28 relative z-10 text-center">
          <p
            className="text-xs text-white/55 uppercase tracking-widest mb-6"
            style={{ fontFamily: MONO }}
          >
            Ready to grow?
          </p>
          <h2
            className="text-4xl lg:text-6xl font-bold leading-[1.08] mb-6"
            style={{ fontFamily: DISPLAY }}
          >
            Your next 1,000 corporate enrollments start here.
          </h2>
          <p className="text-white/70 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Book a free 30-minute strategy call. We'll audit your Udemy Business listing and show you exactly where the growth opportunity is.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="bg-white text-[#E8481C] px-8 py-4 rounded-md font-medium hover:bg-white/92 transition-colors flex items-center gap-2 text-sm"
            >
              Book a Free Strategy Call <ArrowRight size={14} />
            </a>
            <a
              href="#"
              className="text-white/65 text-sm hover:text-white transition-colors underline underline-offset-4"
            >
              Learn how revenue share works →
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-black/8 px-6 lg:px-10 py-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[220px_1fr] gap-12 mb-12">
            <div>
              <a href="#" className="flex items-center gap-2.5 mb-5">
                <div className="w-7 h-7 bg-[#1C2260] rounded-md flex items-center justify-center">
                  <span
                    className="text-white font-bold text-xs"
                    style={{ fontFamily: MONO }}
                  >
                    G
                  </span>
                </div>
                <span
                  className="font-bold text-lg tracking-tight"
                  style={{ fontFamily: DISPLAY }}
                >
                  Grodemy
                </span>
              </a>
              <p className="text-sm text-[#6B6B72] leading-relaxed">
                Marketing for Udemy Business instructors who want enterprise reach.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  title: "Services",
                  links: ["Corporate Outreach", "Vertical Targeting", "Analytics", "Content Repositioning"],
                },
                {
                  title: "Company",
                  links: ["About Us", "Case Studies", "Blog", "Careers"],
                },
                {
                  title: "Get Started",
                  links: ["Book a Call", "How We Earn", "FAQ", "Contact"],
                },
              ].map(({ title, links }) => (
                <div key={title}>
                  <div
                    className="text-xs font-medium uppercase tracking-widest text-[#141418] mb-5"
                    style={{ fontFamily: MONO }}
                  >
                    {title}
                  </div>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm text-[#6B6B72] hover:text-[#141418] transition-colors"
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

          <div className="border-t border-black/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#6B6B72]" style={{ fontFamily: MONO }}>
              © 2025 Grodemy Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-[#6B6B72] hover:text-[#141418] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
