import { motion } from "motion/react";
import { Leaf, Layers, Feather, ShieldCheck, Recycle, Droplets, Sparkles } from "lucide-react";
import { Platform, PixelRatio } from "react-bits";
import { CountUp, Marquee, Reveal, SplitText, TiltCard } from "@/components/motion-primitives";
import logo from "@/assets/logo-mark.png";
import heroRange from "@/assets/hero-products.jpeg";
import paperTowels from "@/assets/paper-towels.jpeg";
import pack12 from "@/assets/pack-12.jpeg";
import pack10 from "@/assets/pack-10.jpeg";
import pack24 from "@/assets/pack-24.jpeg";
import napkins from "@/assets/napkins.jpeg";
export default Index;

const promises = [
  { icon: Leaf, title: "Ultra Soft", copy: "Gentle 2-ply fibre engineered for a cloud-like feel." },
  {
    icon: Layers,
    title: "Strong & Absorbent",
    copy: "Holds together when wet, soaks up more per sheet.",
  },
  { icon: Feather, title: "Gentle on Skin", copy: "Dermatologically tested, kind to sensitive skin." },
  { icon: ShieldCheck, title: "Hygienic & Safe", copy: "UNBS certified and hygienically wrapped." },
];

const products = [
  { name: "Toilet Tissue 12 Rolls", spec: "2 PLY · 12 ROLLS", img: pack12 },
  { name: "Toilet Tissue 10 Rolls", spec: "2 PLY · 10 ROLLS", img: pack10 },
  { name: "Toilet Tissue 24 Rolls", spec: "2 PLY · 24 ROLLS", img: pack24 },
  { name: "Kitchen Paper Towels", spec: "2 PLY · X2 ROLLS", img: paperTowels },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <img src={logo} alt="Pearl Soft Tissue logo" className="h-10 w-auto" />
          <nav className="hidden gap-8 font-display text-sm font-medium md:flex">
            <a href="#products" className="transition-colors hover:text-primary">
              Products
            </a>
            <a href="#quality" className="transition-colors hover:text-primary">
              Quality
            </a>
            <a href="#contact" className="transition-colors hover:text-primary">
              Stockists
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -right-32 h-[34rem] w-[34rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase"
            >
              <Sparkles className="h-3.5 w-3.5" /> Proudly Ugandan
            </motion.p>
            <h1 className="font-display text-5xl leading-[1.05] font-bold md:text-6xl">
              <SplitText text="Softness you" className="text-primary" />
              <br />
              <SplitText text="can trust." className="text-accent" delay={0.25} />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-6 max-w-md text-lg text-muted-foreground"
            >
              Pearl Soft Tissue brings cloud-like softness and dependable strength to every roll.
              Perfect for sensitive skin, tough on spills, and made for everyday family life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="#products"
                className="surface-brand shadow-soft rounded-full px-7 py-3 font-display text-sm font-semibold transition-transform hover:scale-[1.03]"
              >
                Shop the collection
              </a>
              <a
                href="#contact"
                className="rounded-full border border-primary/30 px-7 py-3 font-display text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                Find a stockist
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <TiltCard className="shadow-lift overflow-hidden rounded-[2rem] border border-border bg-card">
              <img
                src={heroRange}
                alt="Pearl Soft Tissue toilet tissue packs and facial tissue box"
                className="w-full object-cover"
              />
            </TiltCard>
          </motion.div>
        </div>

        <section className="mx-auto max-w-6xl px-6 py-14">
          <div className="rounded-[2rem] border border-border bg-slate-50 p-10 shadow-soft">
            <h2 className="text-3xl font-semibold text-slate-950">
              Softness designed to make every day feel more comfortable.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              Pearl Soft Tissue is made with gentle, absorbent fibres so you can trust each sheet to care for sensitive skin and clean up life’s everyday moments.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-4xl font-semibold text-primary">2</p>
                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-muted-foreground">
                  ply comfort
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-4xl font-semibold text-accent">100</p>
                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-muted-foreground">
                  sheets per roll
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-4xl font-semibold text-primary">Fast</p>
                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-muted-foreground">
                  septic-safe breakdown
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="surface-brand">
          <Marquee
            items={[
              "Ultra Soft",
              "Strong & Absorbent",
              "Gentle on Skin",
              "Hygienic & Safe",
              "Septic Safe",
              "Dermatologically Tested",
              "Environmentally Friendly",
            ]}
          />
        </div>
      </section>

      {/* PROMISES */}
      <section id="quality" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="max-w-xl font-display text-3xl font-semibold md:text-4xl">
            Pure comfort that works as hard as it feels.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-soft">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 text-primary transition-colors group-hover:bg-primary/5">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="border-y border-border bg-muted/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="font-display text-xs font-semibold tracking-[0.28em] text-accent uppercase">
              The range
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              Premium tissue built for home, kitchen, and family life
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.07}>
                <TiltCard className="h-full overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="aspect-square overflow-hidden bg-background">
                    <img
                      src={p.img}
                      alt={`Pearl Soft Tissue ${p.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-semibold">{p.name}</h3>
                    <p className="mt-1 font-display text-xs tracking-[0.16em] text-accent">
                      {p.spec}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NAPKINS FEATURE */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="shadow-soft overflow-hidden rounded-[2rem] border border-border">
              <img
                src={napkins}
                alt="Pearl Soft Tissue paper napkins on a set dining table"
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Table-ready paper napkins
            </h2>
            <p className="mt-4 text-muted-foreground">
              100 sheets of crisp, absorbent white napkins for restaurants, hotels and family
              tables. Same Pearl softness, dressed for the occasion.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { n: 100, s: "", l: "Sheets per pack" },
                { n: 2, s: "", l: "Ply thickness" },
                { n: 100, s: "%", l: "UNBS certified" },
              ].map((stat) => (
                <div key={stat.l}>
                  <p className="font-display text-3xl font-bold text-primary">
                    <CountUp to={stat.n} suffix={stat.s} />
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CARE STRIP */}
      <section className="surface-brand">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:grid-cols-3">
          {[
            { icon: Droplets, t: "Septic Safe", c: "Breaks down fast, kind to your plumbing." },
            { icon: Feather, t: "Dermatologically Tested", c: "Safe for the whole family's skin." },
            { icon: Recycle, t: "Environmentally Friendly", c: "Responsibly sourced and recyclable." },
          ].map((item, i) => (
            <Reveal key={item.t} delay={i * 0.1}>
              <item.icon className="h-6 w-6 opacity-90" />
              <h3 className="mt-4 font-display text-lg font-semibold">{item.t}</h3>
              <p className="mt-1 text-sm opacity-85">{item.c}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Stock Pearl in your store
          </h2>
          <p className="mt-4 text-muted-foreground">
            Wholesale and distribution enquiries are welcome across Uganda and the region.
          </p>
          <a
            href="mailto:sales@pearlsofttissue.com"
            className="surface-brand shadow-soft mt-8 inline-block rounded-full px-8 py-3 font-display text-sm font-semibold transition-transform hover:scale-[1.03]"
          >
            sales@pearlsofttissue.com
          </a>
        </Reveal>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">
          <img src={logo} alt="Pearl Soft Tissue" className="h-9 w-auto" />
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Pearl Soft Tissue · Softness you can trust, strength you can rely on.
          </p>
        </div>
      </footer>
    </div>
  );
}
