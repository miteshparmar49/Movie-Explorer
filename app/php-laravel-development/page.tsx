import type { Metadata } from "next";
import Link from "next/link";

// ---------------------------------------------------------------------------
// SEO metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title:
    "PHP & Laravel Development Services | MVP InfoTech",
  description:
    "Custom PHP and Laravel development for ecommerce and web applications — secure, scalable backends, API integrations and Laravel-powered storefronts. 12+ years experience, 2,000+ projects delivered.",
  alternates: {
    canonical: "https://www.mvpinfotech.in/php-laravel-development",
  },
  openGraph: {
    title: "PHP & Laravel Development Services | MVP InfoTech",
    description:
      "Custom PHP and Laravel development — secure, scalable backends and API integrations built by an ecommerce specialist.",
    url: "https://www.mvpinfotech.in/php-laravel-development",
    siteName: "MVP InfoTech",
    type: "website",
    images: [
      {
        url: "https://www.mvpinfotech.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "MVP InfoTech — PHP & Laravel Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PHP & Laravel Development Services | MVP InfoTech",
    description:
      "Custom PHP and Laravel development — secure, scalable backends and API integrations.",
    images: ["https://www.mvpinfotech.in/og-image.png"],
  },
};

// ---------------------------------------------------------------------------
// Content (typed so it's easy to extend / move to a CMS later)
// ---------------------------------------------------------------------------
interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

interface WhyPoint {
  stat: string;
  label: string;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    icon: "🧩",
    title: "Custom Laravel Applications",
    description:
      "End-to-end Laravel builds — clean MVC architecture, Eloquent ORM, queues and jobs for background processing.",
  },
  {
    icon: "🛒",
    title: "Laravel Ecommerce Backends",
    description:
      "Custom storefronts, cart and checkout logic, and headless commerce APIs built on Laravel for full control.",
  },
  {
    icon: "🔌",
    title: "API Development & Integration",
    description:
      "RESTful and Laravel Sanctum/Passport-secured APIs that connect your store to payment gateways, ERPs and CRMs.",
  },
  {
    icon: "🛠️",
    title: "Legacy PHP Modernisation",
    description:
      "Migrate legacy PHP codebases to modern Laravel — improved performance, security and maintainability.",
  },
  {
    icon: "⚙️",
    title: "Admin Panels & Dashboards",
    description:
      "Role-based admin dashboards with Laravel Nova/Filament for inventory, orders and customer management.",
  },
  {
    icon: "🚀",
    title: "Performance & Security Audits",
    description:
      "Query optimisation, caching (Redis), and security hardening following Laravel and OWASP best practices.",
  },
];

const techStack = [
  { name: "Laravel", note: "PHP framework" },
  { name: "PHP 8+", note: "Core language" },
  { name: "MySQL", note: "Database" },
  { name: "Redis", note: "Caching & queues" },
  { name: "Livewire", note: "Reactive UI" },
  { name: "REST APIs", note: "Integrations" },
];

const whyChooseUs: WhyPoint[] = [
  {
    stat: "12+",
    label: "Years",
    title: "Full-Stack Ecommerce Experience",
    description:
      "PHP and Laravel expertise applied directly to real ecommerce problems, not generic CRUD apps.",
  },
  {
    stat: "100%",
    label: "Clean code",
    title: "Maintainable Architecture",
    description:
      "Well-structured, documented Laravel code following PSR standards, built for easy handover and long-term growth.",
  },
  {
    stat: "98%",
    label: "On-time rate",
    title: "Fast & Reliable Delivery",
    description:
      "Thorough testing and transparent communication at every stage, from planning to deployment.",
  },
  {
    stat: "∞",
    label: "Support",
    title: "Long-Term Support",
    description:
      "Post-launch monitoring, bug fixes and continuous improvements to keep your application running smoothly.",
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function PhpLaravelDevelopmentPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* ---------------------------------------------------------------- */}
      {/* Hero */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80">
            Available for new projects
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            PHP &amp; Laravel Development{" "}
            <span className="text-red-500">Built for Ecommerce</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Secure, scalable Laravel applications and PHP backends — from
            custom storefronts and admin panels to API integrations, built by
            a full-stack ecommerce developer with 12+ years of experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/ourwork"
              className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Our Work
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-sm text-white/60">
            <div>
              <span className="text-2xl font-bold text-white">12+</span> Years Exp.
            </div>
            <div>
              <span className="text-2xl font-bold text-white">2,000+</span> Projects
            </div>
            <div>
              <span className="text-2xl font-bold text-white">10+</span> Countries
            </div>
            <div>★★★★★ 5.0 rated</div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Services */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-500">
          What We Do
        </p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
          PHP &amp; Laravel services built for real results
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          Every engagement is designed to give your application a solid,
          secure foundation that scales with your business.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 p-6 transition hover:border-red-300 hover:shadow-lg"
            >
              <div className="text-3xl">{service.icon}</div>
              <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Tech stack */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-red-500">
            Tech Stack
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Tools we use to build PHP &amp; Laravel apps
          </h2>

          <div className="mt-10 flex flex-wrap gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="rounded-xl border border-slate-200 bg-white px-5 py-3"
              >
                <div className="font-semibold">{tech.name}</div>
                <div className="text-xs text-slate-500">{tech.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Why choose us */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-500">
          Why Choose Us
        </p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
          The difference you&apos;ll feel
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((point) => (
            <div key={point.title}>
              <div className="text-3xl font-bold text-red-500">
                {point.stat}
              </div>
              <div className="text-xs uppercase tracking-wide text-slate-500">
                {point.label}
              </div>
              <h3 className="mt-3 font-semibold">{point.title}</h3>
              <p className="mt-2 text-sm text-slate-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CTA */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-slate-950 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">
            Have a PHP or Laravel project in mind?
          </h2>
          <p className="mt-4 text-white/70">
            Free consultation · No obligation · Fast response
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-red-500 px-8 py-3 font-semibold text-white transition hover:bg-red-600"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}