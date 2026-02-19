import { motion } from "framer-motion";
import { ShieldCheck, Award, FileCheck, HelpCircle, Leaf } from "lucide-react";
import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const certs = [
  {
    icon: ShieldCheck,
    title: "ASTM D6400 Compliant",
    desc: "Manufactured using compostable resin compliant with ASTM D6400 — the North American standard for industrial compostability.",
  },
  {
    icon: Leaf,
    title: "Industrial Composting",
    desc: "Designed specifically for industrial composting environments, ensuring full material breakdown under certified facility conditions.",
  },
  {
    icon: FileCheck,
    title: "PFAS-Free & BPA-Free",
    desc: "No intentionally added per- and polyfluoroalkyl substances (PFAS) and completely BPA-Free, supporting safer packaging transitions.",
  },
  {
    icon: Award,
    title: "FDA & Health Canada Compliant",
    desc: "Materials meet U.S. FDA 21 CFR and Health Canada food-contact safety requirements for direct food packaging applications.",
  },
  {
    icon: ShieldCheck,
    title: "Made in North America",
    desc: "Manufactured in North America to support local supply chains, reduce import risk, and ensure regulatory traceability.",
  },
];

const faqs = [
  {
    q: "What does 'industrially compostable' mean?",
    a: "Industrially compostable products are designed to break down in a commercial composting facility — not in a backyard compost bin. These facilities maintain specific temperature, humidity, and aeration conditions that accelerate biodegradation. GreenLeaf-Bio products are formulated to fully decompose within the timeframes required by ASTM D6400 under those conditions.",
  },
  {
    q: "Are GreenLeaf-Bio products certified to ASTM D6400?",
    a: "Our products are manufactured using compostable resin systems aligned with ASTM D6400 standards for industrial composting. We are actively pursuing third-party certification pathways through recognized compostability bodies. Contact us for the latest compliance documentation for your procurement requirements.",
  },
  {
    q: "Do your products contain PFAS or BPA?",
    a: "No. GreenLeaf-Bio products are PFAS-Free (no intentionally added per- and polyfluoroalkyl substances) and BPA-Free. We prioritize material formulations that meet the health and regulatory standards expected by food-contact and institutional buyers across Canada and the United States.",
  },
  {
    q: "Are your products safe for food contact?",
    a: "Yes. GreenLeaf-Bio materials are produced in accordance with U.S. FDA 21 CFR food-contact requirements and Health Canada food packaging safety guidelines, making them appropriate for direct food-contact applications in foodservice, retail, and institutional settings.",
  },
  {
    q: "Where are your products manufactured?",
    a: "Our products are made in North America. This allows us to maintain supply chain stability, meet North American regulatory standards, and provide faster lead times compared to overseas alternatives — a key advantage for distributors and institutional buyers.",
  },
  {
    q: "What packaging products does GreenLeaf-Bio offer?",
    a: "Our current portfolio includes compostable shopping bags, compostable garbage bags, and custom branded/private-label bags. We serve foodservice, retail, waste management, and institutional buyers across Canada and the United States. Reach out to discuss product specifications and volume pricing.",
  },
  {
    q: "How do I request a quote or start a distributor conversation?",
    a: "Use the Request a Quote form on our Contact page. Provide your company name, product interest, and a brief description of your needs. Our team responds within 1–2 business days. For larger volume or distributor inquiries, you can also reach us directly by phone or email.",
  },
];

const Certifications = () => (
  <Layout>
    <section className="bg-secondary py-16 md:py-24">
      <div className="container text-center max-w-3xl">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
          Trust & Compliance
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-serif text-foreground">
          Certifications & Compliance
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }} className="mt-4 text-muted-foreground">
          GreenLeaf-Bio products are manufactured to meet North American compostability standards, food-contact regulations, and chemical safety requirements.
        </motion.p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              className="rounded-2xl border bg-card p-6 text-center space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <c.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-muted py-16 md:py-24">
      <div className="container max-w-3xl">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-serif text-foreground">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`q-${i}`} className="rounded-xl border bg-card px-6">
              <AccordionTrigger className="text-left font-medium text-foreground">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </Layout>
);

export default Certifications;
