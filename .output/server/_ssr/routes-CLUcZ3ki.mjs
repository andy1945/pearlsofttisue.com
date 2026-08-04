import { a as __toESM } from "../_runtime.mjs";
import { i as useMotionValue, n as useSpring, o as performance_default, r as useTransform, t as useInView } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as Layers, i as Leaf, n as ShieldCheck, o as Feather, r as Recycle, s as Droplets, t as Sparkles } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CLUcZ3ki.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
/** Split-text reveal (ReactBits "SplitText" style) */
function SplitText({ text, className, delay = 0 }) {
	const words = text.split(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-block", className),
		children: words.map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-block overflow-hidden pb-[0.1em] align-bottom",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
				className: "inline-block",
				initial: {
					y: "110%",
					opacity: 0
				},
				animate: {
					y: "0%",
					opacity: 1
				},
				transition: {
					duration: .9,
					delay: delay + i * .07,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				children: [word, i < words.length - 1 ? "\xA0" : ""]
			})
		}, `${word}-${i}`))
	});
}
/** Reveal on scroll */
function Reveal({ children, delay = 0, y = 28, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .7,
			delay,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		children
	});
}
/** Tilt card following the pointer */
function TiltCard({ children, className }) {
	const ref = (0, import_react.useRef)(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rx = useSpring(useTransform(y, [-.5, .5], [8, -8]), {
		stiffness: 200,
		damping: 20
	});
	const ry = useSpring(useTransform(x, [-.5, .5], [-10, 10]), {
		stiffness: 200,
		damping: 20
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		onPointerMove: (e) => {
			const r = ref.current?.getBoundingClientRect();
			if (!r) return;
			x.set((e.clientX - r.left) / r.width - .5);
			y.set((e.clientY - r.top) / r.height - .5);
		},
		onPointerLeave: () => {
			x.set(0);
			y.set(0);
		},
		style: {
			rotateX: rx,
			rotateY: ry,
			transformPerspective: 900
		},
		className,
		children
	});
}
/** Count-up number */
function CountUp({ to, suffix = "" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, { once: true });
	const [value, setValue] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const start = performance_default.now();
		const duration = 1400;
		let frame = 0;
		const tick = (now) => {
			const p = Math.min((now - start) / duration, 1);
			setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
			if (p < 1) frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [inView, to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [value, suffix]
	});
}
/** Infinite marquee strip */
function Marquee({ items }) {
	const loop = [...items, ...items];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative overflow-hidden py-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "flex w-max gap-12",
			animate: { x: ["0%", "-50%"] },
			transition: {
				duration: 26,
				repeat: Infinity,
				ease: "linear"
			},
			children: loop.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-sm font-semibold tracking-[0.28em] whitespace-nowrap uppercase",
				children: item
			}, i))
		})
	});
}
var logo_mark_default = "/assets/logo-mark-DkJevFu0.png";
var hero_products_default = "/assets/hero-products-BgRM58pZ.jpeg";
var paper_towels_default = "/assets/paper-towels-TwYzucmf.jpeg";
var pack_12_default = "/assets/pack-12-DI96cNyT.jpeg";
var pack_10_default = "/assets/pack-10-cU4GY8NA.jpeg";
var pack_24_default = "/assets/pack-24-wkED6lVh.jpeg";
var napkins_default = "/assets/napkins-CcsoZARA.jpeg";
var promises = [
	{
		icon: Leaf,
		title: "Ultra Soft",
		copy: "Gentle 2-ply fibre engineered for a cloud-like feel."
	},
	{
		icon: Layers,
		title: "Strong & Absorbent",
		copy: "Holds together when wet, soaks up more per sheet."
	},
	{
		icon: Feather,
		title: "Gentle on Skin",
		copy: "Dermatologically tested, kind to sensitive skin."
	},
	{
		icon: ShieldCheck,
		title: "Hygienic & Safe",
		copy: "UNBS certified and hygienically wrapped."
	}
];
var products = [
	{
		name: "Toilet Tissue 12 Rolls",
		spec: "2 PLY · 12 ROLLS",
		img: pack_12_default
	},
	{
		name: "Toilet Tissue 10 Rolls",
		spec: "2 PLY · 10 ROLLS",
		img: pack_10_default
	},
	{
		name: "Toilet Tissue 24 Rolls",
		spec: "2 PLY · 24 ROLLS",
		img: pack_24_default
	},
	{
		name: "Kitchen Paper Towels",
		spec: "2 PLY · X2 ROLLS",
		img: paper_towels_default
	}
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_mark_default,
						alt: "Pearl Soft Tissue logo",
						className: "h-10 w-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden gap-8 font-display text-sm font-medium md:flex",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#products",
								className: "transition-colors hover:text-primary",
								children: "Products"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#quality",
								className: "transition-colors hover:text-primary",
								children: "Quality"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "transition-colors hover:text-primary",
								children: "Stockists"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-40 -right-32 h-[34rem] w-[34rem] rounded-full bg-primary/10 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								transition: { delay: .1 },
								className: "mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Proudly Ugandan"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-5xl leading-[1.05] font-bold md:text-6xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitText, {
										text: "Softness you",
										className: "text-primary"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitText, {
										text: "can trust.",
										className: "text-accent",
										delay: .25
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: {
									opacity: 0,
									y: 16
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									delay: .6,
									duration: .7
								},
								className: "mt-6 max-w-md text-lg text-muted-foreground",
								children: "Pearl Soft Tissue is crafted to deliver exceptional softness, strength and care for your family — every single day."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 16
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									delay: .75,
									duration: .7
								},
								className: "mt-9 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#products",
									className: "surface-brand shadow-soft rounded-full px-7 py-3 font-display text-sm font-semibold transition-transform hover:scale-[1.03]",
									children: "Explore the range"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									className: "rounded-full border border-primary/30 px-7 py-3 font-display text-sm font-semibold text-primary transition-colors hover:bg-primary/5",
									children: "Become a stockist"
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								scale: .94
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							transition: {
								duration: 1,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
								className: "shadow-lift overflow-hidden rounded-[2rem] border border-border bg-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: hero_products_default,
									alt: "Pearl Soft Tissue toilet tissue packs and facial tissue box",
									className: "w-full object-cover"
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "surface-brand",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, { items: [
							"Ultra Soft",
							"Strong & Absorbent",
							"Gentle on Skin",
							"Hygienic & Safe",
							"Septic Safe",
							"Dermatologically Tested",
							"Environmentally Friendly"
						] })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "quality",
				className: "mx-auto max-w-6xl px-6 py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "max-w-xl font-display text-3xl font-semibold md:text-4xl",
					children: ["Pure comfort. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent",
						children: "Every time."
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: promises.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group h-full rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 text-primary transition-colors group-hover:bg-primary/5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-semibold",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: p.copy
								})
							]
						})
					}, p.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "products",
				className: "border-y border-border bg-muted/40 py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs font-semibold tracking-[0.28em] text-accent uppercase",
						children: "The range"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-semibold md:text-4xl",
						children: "Made for every room in the home"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
						children: products.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .07,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
								className: "h-full overflow-hidden rounded-2xl border border-border bg-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-square overflow-hidden bg-background",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.img,
										alt: `Pearl Soft Tissue ${p.name}`,
										loading: "lazy",
										className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-base font-semibold",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-display text-xs tracking-[0.16em] text-accent",
										children: p.spec
									})]
								})]
							})
						}, p.name))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-6 py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-12 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "shadow-soft overflow-hidden rounded-[2rem] border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: napkins_default,
							alt: "Pearl Soft Tissue paper napkins on a set dining table",
							loading: "lazy",
							className: "w-full object-cover"
						})
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: .12,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl font-semibold md:text-4xl",
								children: "Table-ready paper napkins"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted-foreground",
								children: "100 sheets of crisp, absorbent white napkins for restaurants, hotels and family tables. Same Pearl softness, dressed for the occasion."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 grid grid-cols-3 gap-6",
								children: [
									{
										n: 100,
										s: "",
										l: "Sheets per pack"
									},
									{
										n: 2,
										s: "",
										l: "Ply thickness"
									},
									{
										n: 100,
										s: "%",
										l: "UNBS certified"
									}
								].map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-3xl font-bold text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
										to: stat.n,
										suffix: stat.s
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: stat.l
								})] }, stat.l))
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "surface-brand",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:grid-cols-3",
					children: [
						{
							icon: Droplets,
							t: "Septic Safe",
							c: "Breaks down fast, kind to your plumbing."
						},
						{
							icon: Feather,
							t: "Dermatologically Tested",
							c: "Safe for the whole family's skin."
						},
						{
							icon: Recycle,
							t: "Environmentally Friendly",
							c: "Responsibly sourced and recyclable."
						}
					].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * .1,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-6 w-6 opacity-90" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-lg font-semibold",
								children: item.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm opacity-85",
								children: item.c
							})
						]
					}, item.t))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contact",
				className: "mx-auto max-w-3xl px-6 py-24 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold md:text-4xl",
						children: "Stock Pearl in your store"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Wholesale and distribution enquiries are welcome across Uganda and the region."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:sales@pearlsofttissue.com",
						className: "surface-brand shadow-soft mt-8 inline-block rounded-full px-8 py-3 font-display text-sm font-semibold transition-transform hover:scale-[1.03]",
						children: "sales@pearlsofttissue.com"
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_mark_default,
						alt: "Pearl Soft Tissue",
						className: "h-9 w-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Pearl Soft Tissue · Softness You Can Trust"
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
