import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, ShieldCheck, Truck, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import compostableBags from "@/assets/compostable-bags.png";
import garbageBags from "@/assets/garbage-bags.png";
import shoppingBags from "@/assets/shopping-bags.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const products = [
  {
    title: "Compostable Shopping Bags",
    description: "Certified 100% compostable retail bags for grocery and retail. Strong, flexible, planet-friendly.",
    image: compostableBags,
  },
  {
    title: "Compostable Garbage Bags",
    description: "Plant-based kitchen and waste bags. For every bag used, .12 lbs of CO₂ is removed from the atmosphere.",
    image: garbageBags,
  },
  {
    title: "Custom Compostable Bags",
    description: "Branded compostable bags tailored to your business needs. Available in custom sizes and prints.",
    image: shoppingBags,
  },
];

const trustPoints = [
  { icon: ShieldCheck, title: "Certified Compostable", desc: "Your certification here" },
  { icon: Leaf, title: "Plant-Based Materials", desc: "Made from renewable resources" },
  { icon: Truck, title: "Canada & USA Delivery", desc: "Reliable B2B supply chain" },
  { icon: Recycle, title: "Zero Greenwashing", desc: "Verified claims, real certifications" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
      </div>
      <div className="container relative z-10 py-28 md:py-40">
        <motion.div
          className="max-w-2xl space-y-6"
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeUp} custom={0} className="text-leaf-light text-sm font-semibold uppercase tracking-widest">
            Certified Compostable Packaging
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-serif text-primary-foreground leading-tight">
            Sustainable Packaging for a Greener Tomorrow
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 max-w-xl">
            Premium compostable bags and packaging solutions for businesses across Canada and the USA.
            Strong, certified, and truly biodegradable.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="
    border-white/40
    text-white
    bg-white/10
    backdrop-blur
    hover:bg-white/20
    hover:text-white
    transition-all
  "
              asChild
            >
              <Link to="/products">View Products</Link>
            </Button>


          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Trust bar */}
    <section className="bg-secondary py-12">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((tp, i) => (
            <motion.div
              key={tp.title}
              className="flex items-start gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <div className="rounded-lg bg-primary/10 p-3">
                <tp.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{tp.title}</h3>
                <p className="text-sm text-muted-foreground">{tp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Products preview */}
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Our Products</p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">Compostable Solutions for Every Need</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              className="group rounded-2xl border bg-card overflow-hidden hover:shadow-lg transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-serif text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
                <Button variant="link" className="px-0 text-primary" asChild>
                  <Link to="/contact">Request a Quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-20">
      <div className="container text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-serif text-primary-foreground">Ready to Go Green?</h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto">
          Join hundreds of businesses making the switch to certified compostable packaging. Get a custom quote today.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link to="/contact">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Index;
