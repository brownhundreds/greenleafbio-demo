import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { submitToWeb3Forms } from "@/services/web3forms";

type Web3FormField = string | File;

const PRODUCT_OPTIONS = [
  { value: "shopping-bags", label: "Compostable Shopping Bags" },
  { value: "garbage-bags", label: "Compostable Garbage Bags" },
  { value: "custom-bags", label: "Custom Branded Bags" },
  { value: "other", label: "Other / Multiple Products" },
] as const;

function getString(formData: FormData, key: string): string {
  const v = formData.get(key);
  return typeof v === "string" ? v.trim() : "";
}

function buildSubmissionFormData(form: HTMLFormElement, product: string) {
  const formData = new FormData(form);

  // Honeypot: bots often fill it; humans don’t
  const honeypot = getString(formData, "website");
  if (honeypot) return { formData, isSpam: true };

  // Ensure Radix Select is submitted
  formData.set("product", product);

  // Make the email useful for lead triage
  const company = getString(formData, "company") || "Website Contact";
  const email = getString(formData, "email");

  formData.set("subject", `New lead: ${company}`);
  formData.set("from_name", "Greenleaf Bio Website");
  if (email) formData.set("replyto", email);

  return { formData, isSpam: false };
}

const Contact = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [product, setProduct] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);

    try {
      const form = e.currentTarget;
      const { formData, isSpam } = buildSubmissionFormData(form, product);

      // Silently ignore spam submissions
      if (isSpam) return;

      const result = await submitToWeb3Forms(formData);

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you within 1-2 business days.",
        });
        form.reset();
        setProduct("");
      } else {
        toast({
          title: "Couldn’t send message",
          description: result.message || "Please try again.",
        });
      }
    } catch {
      toast({
        title: "Network error",
        description: "Please try again in a moment.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Layout>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary text-sm font-semibold uppercase tracking-widest mb-2"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif text-foreground"
          >
            Request a Quote
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            className="mt-4 text-muted-foreground"
          >
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
                      <a
                        href="mailto:info@greenleaf-bio.com"
                        className="text-foreground hover:text-primary transition-colors"
                      >
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
                        href="https://wa.me/16478343606"
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
                <p className="text-sm text-muted-foreground">
                  We serve businesses across Canada and the United States with reliable shipping and logistics.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="md:col-span-3 space-y-5 rounded-2xl border bg-card p-6 md:p-8">
              {/* Honeypot */}
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

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
                  <Input required type="email" name="email" placeholder="your@email.com" maxLength={255} />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone</label>
                  <Input name="phone" placeholder="(optional)" maxLength={20} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Product Interest</label>
                <Select value={product} onValueChange={setProduct}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent>
                    {PRODUCT_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* ensures it’s included in FormData */}
                <input type="hidden" name="product" value={product} />
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
