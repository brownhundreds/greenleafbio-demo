import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import compostableBags from "@/assets/compostable-bags.png";
import garbageBags from "@/assets/garbage-bags.png";
import shoppingBags from "@/assets/shopping-bags.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const products = [
  {
    title: "Compostable Shopping Bags",
    description: "Certified 100% compostable retail and grocery bags made from plant-based materials. Designed for strength, flexibility, and a healthier planet.",
    useCases: ["Grocery stores", "Retail shops", "Farmers markets", "Food service"],
    image: compostableBags,
  },
  {
    title: "Compostable Garbage Bags",
    description: "Plant-based tall kitchen and waste bags. For every bag used, .12 lbs of CO₂ is net removed from the atmosphere. USDA certified biobased product.",
    useCases: ["Residential waste", "Commercial kitchens", "Institutional facilities", "Municipal programs"],
    image: garbageBags,
  },
  {
    title: "Custom Branded Bags",
    description: "Fully customizable compostable bags with your branding. Available in multiple sizes, thicknesses, and print options to match your business identity.",
    useCases: ["Restaurant takeout", "E-commerce packaging", "Event giveaways", "Corporate sustainability"],
    image: shoppingBags,
  },
];

const Products = () => (
  <Layout>
    <section className="bg-secondary py-16 md:py-24">
      <div className="container text-center max-w-3xl">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
          Our Products
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-serif text-foreground">
          Compostable Packaging Solutions
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }} className="mt-4 text-muted-foreground">
          Inquiry-based ordering — no minimum for first orders. Request a quote and we'll work with your volume needs.
        </motion.p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container space-y-20">
        {products.map((p, i) => (
          <motion.div
            key={p.title}
            className={`grid gap-10 items-center md:grid-cols-2 ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="rounded-2xl overflow-hidden bg-muted">
                <img src={p.image} alt={p.title} className="w-full object-cover" />
              </div>
            </div>
            <div className={`space-y-5 ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <h2 className="text-2xl md:text-3xl font-serif text-foreground">{p.title}</h2>
              <p className="text-muted-foreground">{p.description}</p>
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Ideal for:</p>
                <ul className="grid grid-cols-2 gap-2">
                  {p.useCases.map((u) => (
                    <li key={u} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild>
                <Link to="/contact">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Products;
