import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Factory, Leaf, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const values = [
  { icon: Leaf, title: "Sustainability First", desc: "Every decision starts with environmental impact. We use plant-based materials and verified processes." },
  { icon: Target, title: "No Greenwashing", desc: "We only make claims backed by third-party certifications. Transparency is non-negotiable." },
  { icon: Factory, title: "Scalable Supply", desc: "Manufacturing capacity to support growing businesses — from first order to full-scale rollout." },
  { icon: Globe, title: "North American Reach", desc: "Serving businesses across Canada and the United States with reliable logistics." },
];

const About = () => (
  <Layout>
    <section className="bg-secondary py-16 md:py-24">
      <div className="container text-center max-w-3xl">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
          About Us
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-serif text-foreground">
          Built for Businesses. Rooted in Science.
        </motion.h1>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-4xl space-y-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <h2 className="text-2xl font-serif text-foreground mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            GreenLeaf Bio exists to make compostable packaging the standard — not the exception. We provide businesses with
            high-performance, certified compostable products that meet the same durability standards as conventional plastics,
            without the environmental cost.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
          <h2 className="text-2xl font-serif text-foreground mb-4">Who We Serve</h2>
          <p className="text-muted-foreground leading-relaxed">
            From independent grocers and restaurant chains to municipalities and institutional buyers, we partner with
            organizations that take sustainability seriously. Our products serve the food service, retail, waste management,
            and hospitality industries across Canada and the USA.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
          <h2 className="text-2xl font-serif text-foreground mb-4">Manufacturing & Scale</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our manufacturing infrastructure is built for reliability and scale. Whether you're ordering for a single
            location or a nationwide rollout, we deliver consistent quality with the supply chain dependability that B2B
            buyers require.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="bg-muted py-16 md:py-24">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-serif text-foreground text-center mb-12">Our Values</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="rounded-2xl bg-card border p-6 space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <v.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-primary py-16">
      <div className="container text-center space-y-6">
        <h2 className="text-3xl font-serif text-primary-foreground">Partner with GreenLeaf Bio</h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto">
          Let's discuss how our compostable packaging can fit your business needs.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link to="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default About;
