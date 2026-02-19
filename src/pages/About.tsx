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
  { icon: Leaf, title: "Sustainability First", desc: "Every decision starts with environmental impact. We use plant-based, compostable resin systems verified against ASTM compostability standards." },
  { icon: Target, title: "No Greenwashing", desc: "We only make claims backed by regulatory compliance and material data. Transparency is non-negotiable for our distributor and institutional partners." },
  { icon: Factory, title: "Scalable Supply", desc: "Manufacturing capacity to support growing businesses — from initial distributor orders to full-scale North American rollout." },
  { icon: Globe, title: "North American Reach", desc: "Serving distributors, foodservice suppliers, and institutional buyers across Canada and the United States with export-ready manufacturing." },
];

const About = () => (
  <Layout>
    <section className="bg-secondary py-16 md:py-24">
      <div className="container text-center max-w-3xl">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
          About Us
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-serif text-foreground">
          Compostable Packaging Manufacturer in Canada & the United States
        </motion.h1>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-4xl space-y-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <p className="text-muted-foreground leading-relaxed text-lg">
            GreenLeaf-Bio is a North American manufacturer of compostable and biodegradable packaging solutions serving
            distributors, private-label partners, foodservice suppliers, and institutional buyers across Canada and the
            United States. We focus on scalable, compliance-driven manufacturing of industrial compostable products
            designed to replace conventional plastic packaging.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Our product portfolio includes compostable bags, biodegradable food packaging, and private-label compostable
            packaging programs engineered to meet ASTM compostability standards and food-contact regulations.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
          <h2 className="text-2xl font-serif text-foreground mb-4">ASTM-Compliant & Food-Contact Safe Materials</h2>
          <p className="text-muted-foreground leading-relaxed">
            GreenLeaf-Bio products are manufactured using compostable resin systems aligned with ASTM D6400 and ASTM D6868
            standards for industrial composting environments. Materials are produced in accordance with U.S. FDA 21 CFR
            food-contact requirements and Health Canada food packaging safety guidelines.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            All formulations are PFAS-Free (no intentionally added per- and polyfluoroalkyl substances) and BPA-Free,
            supporting the transition toward safer and regulation-compliant packaging solutions.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
          <h2 className="text-2xl font-serif text-foreground mb-4">Supporting Distributors & Private Label Programs</h2>
          <p className="text-muted-foreground leading-relaxed">
            GreenLeaf-Bio is structured to support high-volume distributor partnerships throughout Canada and the United
            States. Our manufacturing model prioritizes supply chain stability, scalable production capacity, and
            regulatory transparency.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            We offer private-label compostable packaging manufacturing programs for distributors, wholesalers, and
            institutional procurement partners seeking North American sourcing alternatives.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}>
          <h2 className="text-2xl font-serif text-foreground mb-4">Positioned for the Plastic Regulation Shift</h2>
          <p className="text-muted-foreground leading-relaxed">
            As federal, provincial, and state-level plastic bans accelerate across North America, organizations are
            actively transitioning to compliant compostable alternatives. GreenLeaf-Bio was established to meet this
            demand with reliable, export-ready manufacturing and compliance-focused material selection.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}>
          <h2 className="text-2xl font-serif text-foreground mb-4">Growth & Expansion Strategy</h2>
          <p className="text-muted-foreground leading-relaxed">
            The company's expansion roadmap includes phased production scaling, certification pathways through recognized
            third-party compostability bodies, distributor agreement development, and entry into municipal and government
            procurement channels across North America.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            GreenLeaf-Bio's objective is to become a trusted supplier of industrial compostable packaging products in
            Canada and the United States by combining environmental responsibility with disciplined operational growth.
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
        <h2 className="text-3xl font-serif text-primary-foreground">Partner with GreenLeaf-Bio</h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto">
          Let's discuss how our compostable packaging can fit your distributor or institutional procurement needs.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link to="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default About;
