import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Contact = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 1-2 business days." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
            Get in Touch
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-serif text-foreground">
            Request a Quote
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }} className="mt-4 text-muted-foreground">
            Fill out the form below and our team will respond within 1-2 business days.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-5xl">
          <div className="grid gap-12 md:grid-cols-5">
            {/* Contact info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:info@greenleaf-bio.com" className="text-foreground hover:text-primary transition-colors">
                        info@greenleaf-bio.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a href="tel:+16478343606" className="text-foreground hover:text-primary transition-colors">
                        647-834-3606
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <a
                        href={`https://wa.me/16478343606`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        647-834-3606
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-muted p-6">
                <h4 className="font-semibold text-foreground mb-2">Service Regions</h4>
                <p className="text-sm text-muted-foreground">We serve businesses across Canada and the United States with reliable shipping and logistics.</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5 rounded-2xl border bg-card p-6 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Name *</label>
                  <Input required name="name" placeholder="Your full name" maxLength={100} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Company *</label>
                  <Input required name="company" placeholder="Company name" maxLength={100} />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email *</label>
                  <Input required type="email" name="email" placeholder="you@company.com" maxLength={255} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone</label>
                  <Input name="phone" placeholder="(optional)" maxLength={20} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Product Interest</label>
                <Select name="product">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="shopping-bags">Compostable Shopping Bags</SelectItem>
                    <SelectItem value="garbage-bags">Compostable Garbage Bags</SelectItem>
                    <SelectItem value="custom-bags">Custom Branded Bags</SelectItem>
                    <SelectItem value="other">Other / Multiple Products</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Estimated Volume / Frequency</label>
                <Input name="volume" placeholder="e.g., 10,000 units/month (optional)" maxLength={100} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message *</label>
                <Textarea required name="message" placeholder="Tell us about your needs..." rows={4} maxLength={1000} />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={sending}>
                {sending ? "Sending..." : "Send Inquiry"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
