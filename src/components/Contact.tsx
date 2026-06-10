"use client";

import { Input } from "@/components/base/input/input";
import { Select } from "@/components/base/select/select";
import { TextArea as UITextArea } from "@/components/base/textarea/textarea";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-brand-mist py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-orange">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
              Get in Touch
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-brand-blue-dark md:text-4xl lg:text-5xl">
              Begin your wellness{" "}
              <span className="italic text-brand-green">journey.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-muted md:text-lg">
              Visit our clinic in Bradbury, give us a call, or send an email.
              We&apos;ll arrange a confidential consultation to discuss the right
              treatment plan for you.
            </p>

            <div className="mt-10 space-y-4">
              <InfoCard
                icon={<PinIcon />}
                label="Visit the Clinic"
                lines={["Suite 1, 67 Jacaranda Ave", "Bradbury NSW 2560"]}
              />
              <InfoCard
                icon={<PhoneIcon />}
                label="Phone"
                lines={["1300 205 970"]}
                href="tel:1300205970"
              />
              <InfoCard
                icon={<MailIcon />}
                label="Email"
                lines={["macarthurinfusions@outlook.com.au"]}
                href="mailto:macarthurinfusions@outlook.com.au"
              />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <form
              className="rounded-2xl border border-brand-border bg-white p-7 shadow-sm md:p-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="font-display text-2xl font-semibold text-brand-blue-dark">
                Book an appointment
              </h3>
              <p className="mt-2 text-sm text-brand-muted">
                Share a few details and we&apos;ll be in touch within one
                business day.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <Field label="Full name" id="name" placeholder="Jane Smith" />
                <Field label="Phone" id="phone" type="tel" placeholder="0400 000 000" />
                <Field
                  label="Email"
                  id="email"
                  type="email"
                  placeholder="you@email.com"
                  className="sm:col-span-2"
                />
                <SelectField
                  label="Area of interest"
                  id="interest"
                  className="sm:col-span-2"
                  options={[
                    "IV Infusion Therapies",
                    "Wellness & Nutrient Injections",
                    "Women's Health & Healthy Ageing",
                    "Recovery & Performance",
                    "Beauty & Skin Health",
                    "Clinical Consultation",
                    "Not sure, please recommend something",
                  ]}
                />
                <TextArea
                  label="Tell us about your goals (optional)"
                  id="message"
                  className="sm:col-span-2"
                  placeholder="What would you like to feel, achieve, or recover from?"
                />
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-orange/20 transition hover:bg-brand-orange-soft sm:w-auto"
              >
                Send enquiry
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <p className="mt-4 text-xs text-brand-muted">
                Your information stays confidential. Submissions are reviewed by
                our clinical team.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  label,
  lines,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  lines: string[];
  href?: string;
}) {
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    href ? (
      <a
        href={href}
        className="flex items-start gap-4 rounded-xl border border-brand-border bg-white p-5 transition hover:border-brand-green/40 hover:shadow-md"
      >
        {children}
      </a>
    ) : (
      <div className="flex items-start gap-4 rounded-xl border border-brand-border bg-white p-5">
        {children}
      </div>
    );

  return (
    <Wrapper>
      <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green">
        {icon}
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted">
          {label}
        </div>
        <div className="mt-1 text-sm font-medium leading-relaxed text-brand-blue-dark">
          {lines.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  className = "",
}: {
  label: string;
  id: string;
  type?: "text" | "tel" | "email";
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">
        {label}
      </span>
      <Input
        aria-label={label}
        name={id}
        type={type}
        placeholder={placeholder}
        className="mt-2"
      />
    </div>
  );
}

function SelectField({
  label,
  id,
  options,
  className = "",
}: {
  label: string;
  id: string;
  options: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">
        {label}
      </span>
      <Select
        aria-label={label}
        name={id}
        placeholder="Select an option"
        className="mt-2"
        items={options.map((o) => ({ id: o, label: o }))}
      >
        {(item) => <Select.Item {...item} />}
      </Select>
    </div>
  );
}

function TextArea({
  label,
  id,
  placeholder,
  className = "",
}: {
  label: string;
  id: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">
        {label}
      </span>
      <UITextArea
        aria-label={label}
        name={id}
        rows={4}
        placeholder={placeholder}
        className="mt-2"
      />
    </div>
  );
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2.3z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
