import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Award,
  Briefcase,
  Cloud,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Preloader } from "@/components/Preloader";
import { ParticleField } from "@/components/ParticleField";
import { TiltCard } from "@/components/TiltCard";
import { Reveal } from "@/components/Reveal";
import interviewShot from "@/assets/project-interview-copilot.jpg";
import rfidShot from "@/assets/project-rfid-healthcare.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nalagatla Sai Varshitha — AI/ML Developer & Python Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Nalagatla Sai Varshitha — AI/ML developer building transformer-powered NLP applications and cloud/IoT systems.",
      },
      {
        property: "og:title",
        content: "Nalagatla Sai Varshitha — AI/ML Developer & Python Engineer",
      },
      {
        property: "og:description",
        content:
          "Transformer-powered NLP apps, cloud-connected IoT systems, and data analytics projects.",
      },
    ],
  }),
  component: Portfolio,
});

const EMAIL = "nvarshithar2005@gmail.com";
const PHONE = "+91-9347992938";
const GITHUB = "https://github.com/Varshitha100305";
const LINKEDIN = "https://linkedin.com/in/nalagatla-sai-varshitha";

const roles = ["AI/ML Developer", "Python Engineer", "NLP Specialist", "Cloud Enthusiast"];

const skillGroups = [
  { icon: Terminal, title: "Languages", items: ["Python", "SQL"] },
  {
    icon: Sparkles,
    title: "AI & ML",
    items: [
      "Natural Language Processing",
      "Hugging Face Transformers",
      "Machine Learning",
      "Prompt Engineering",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & IoT",
    items: ["Cloud Storage & Security", "AWS", "Arduino", "RFID", "Blynk"],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    items: ["Data Collection & Organization", "Log Analysis", "Excel", "Google Sheets"],
  },
  {
    icon: Wrench,
    title: "Tools & Environments",
    items: ["Streamlit", "Git", "GitHub", "VS Code", "Google Colab"],
  },
];

const projects = [
  {
    title: "Interview Copilot",
    image: interviewShot,
    tags: ["Python", "Streamlit", "Hugging Face Transformers", "NLP"],
    description:
      "Streamlit-based mock interview system leveraging Hugging Face transformer models to evaluate user inputs and generate context-aware conversational replies.",
    outcome:
      "Custom structured response workflow that gives candidates real-time, actionable feedback logic.",
    repo: "https://github.com/Varshitha100305/interview_copilot",
    demo: "https://github.com/Varshitha100305/interview_copilot#demo",
  },
  {
    title: "Cloud-Enabled RFID Healthcare Inventory Tracking",
    image: rfidShot,
    tags: ["IoT", "Arduino", "RFID", "Blynk Cloud", "Hardware-to-Cloud"],
    description:
      "Cloud-synchronized inventory tracking system designed for healthcare supply chains, logging item movements in real time.",
    outcome:
      "Resilient data pipeline linking hardware sensors to a Blynk cloud dashboard for live telemetry and audit logging.",
    repo: GITHUB,
  },
];

const experience = [
  {
    role: "Cloud Computing Intern",
    org: "8 Queens Technology, Chennai",
    period: "May 2025 – Jun 2025",
    detail: "Cloud infrastructure, storage pipelines, and deployment security workflows.",
  },
  {
    role: "Cybersecurity Job Simulation",
    org: "Deloitte (Virtual / Forage)",
    period: "Sep 2025",
    detail:
      "Web activity log investigation, anomaly detection, and threat response recommendations.",
  },
];

const education = [
  {
    degree: "B.E. Computer Science",
    org: "RMD Engineering College",
    period: "2022 – 2026",
    score: "CGPA 8.51",
  },
  {
    degree: "Higher Secondary",
    org: "Narayana Junior College, Nellore",
    period: "2020 – 2022",
    score: "82.2%",
  },
];

const certifications = [
  { issuer: "IBM", name: "AI Fundamentals" },
  { issuer: "AWS", name: "Data Engineering Foundations" },
  { issuer: "Oracle", name: "Cloud Infrastructure AI Foundations Associate" },
  { issuer: "HackerRank", name: "Certified in Python & SQL" },
  { issuer: "Great Learning", name: "Prompt Engineering for ChatGPT" },
];

function RoleRotator() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % roles.length), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block h-[1.25em] overflow-hidden align-bottom">
      <motion.span
        key={i}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block text-neon"
      >
        {roles[i]}
      </motion.span>
    </span>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [sent, setSent] = useState(false);

  const errors = {
    name: form.name.trim().length < 2 ? "Please enter your name" : "",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? "" : "Enter a valid email",
    message: form.message.trim().length < 10 ? "Message should be at least 10 characters" : "",
  };
  const valid = !errors.name && !errors.email && !errors.message;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!valid) return;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Portfolio enquiry from ${form.name}`,
    )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20";

  return (
    <form onSubmit={submit} className="glass rounded-2xl p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <input
            className={field}
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            onBlur={() => setTouched({ ...touched, name: true })}
          />
          {touched.name && errors.name && (
            <p className="mt-1 text-xs text-destructive">{errors.name}</p>
          )}
        </div>
        <div>
          <input
            className={field}
            placeholder="Email address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            onBlur={() => setTouched({ ...touched, email: true })}
          />
          {touched.email && errors.email && (
            <p className="mt-1 text-xs text-destructive">{errors.email}</p>
          )}
        </div>
      </div>
      <div className="mt-4">
        <textarea
          rows={5}
          className={field}
          placeholder="Tell me about the role or project…"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          onBlur={() => setTouched({ ...touched, message: true })}
        />
        {touched.message && errors.message && (
          <p className="mt-1 text-xs text-destructive">{errors.message}</p>
        )}
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-neon">
          Send message <Send size={16} />
        </button>
        {sent && <span className="text-xs text-emerald">Opening your mail app…</span>}
      </div>
    </form>
  );
}

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Preloader />
      <Navbar />

      {/* Hero */}
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 grid-mesh" />
        <ParticleField />
        <div className="glow-orb left-[-10%] top-[10%] h-[420px] w-[420px] bg-primary" />
        <div className="glow-orb right-[-8%] top-[35%] h-[380px] w-[380px] bg-violet" />

        <div className="relative mx-auto w-full max-w-5xl px-6 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="chip">
              <MapPin size={12} /> Chennai, India
            </span>
            <h1 className="mt-6 font-display text-[clamp(2.3rem,6vw,4.4rem)] font-bold leading-[1.05] tracking-tight">
              Hi, I&apos;m Nalagatla
              <br />
              Sai Varshitha
            </h1>
            <p className="mt-4 font-display text-[clamp(1.2rem,3vw,2rem)] font-semibold">
              <RoleRotator />
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              I build transformer-powered NLP applications and cloud-connected IoT architectures —
              from a Streamlit mock-interview copilot to an RFID healthcare inventory pipeline
              streaming live telemetry to the cloud.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contact" className="btn-neon">
                Let&apos;s Connect <ArrowRight size={16} />
              </a>
              <a href="#projects" className="btn-ghost-neon">
                View Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative mx-auto max-w-5xl px-6 py-28">
        <Reveal>
          <p className="chip mb-4">01 — About Me</p>
          <h2 className="section-title">Curious by default, engineer by training.</h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            I&apos;m a Computer Science graduate from RMD Engineering College (CGPA 8.51) with
            hands-on experience developing Python NLP applications using Hugging Face and
            Streamlit, alongside cloud and IoT healthcare tracking systems. I enjoy the space
            where models, hardware, and clean product thinking overlap.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-neon">
              <FileText size={16} /> Open Resume
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="btn-ghost-neon !px-4"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="btn-ghost-neon !px-4"
            >
              <Github size={18} />
            </a>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href={`mailto:${EMAIL}`} className="chip">
              <Mail size={12} /> {EMAIL}
            </a>
            <a href={`tel:${PHONE}`} className="chip">
              <Phone size={12} /> {PHONE}
            </a>
          </div>
        </Reveal>
      </section>

      {/* Skills */}
      <section id="skills" className="relative mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="chip mb-4">02 — What I Can Do</p>
          <h2 className="section-title">Skills across the AI-to-cloud stack.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <TiltCard className="h-full p-6">
                <g.icon className="text-primary" size={22} />
                <h3 className="mt-4 font-display text-lg font-semibold">{g.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="glow-orb left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 bg-violet" />
        <Reveal>
          <p className="chip mb-4">03 — Featured Projects</p>
          <h2 className="section-title">Things I&apos;ve built end to end.</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <TiltCard className="h-full overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} interface preview`}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="h-52 w-full object-cover object-top opacity-90"
                />
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="text-emerald">Outcome — </span>
                    {p.outcome}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a href={p.repo} target="_blank" rel="noreferrer" className="btn-ghost-neon">
                      <Github size={16} /> Repository
                    </a>
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="btn-ghost-neon">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="relative mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="chip mb-4">04 — Experience & Education</p>
          <h2 className="section-title">Where I&apos;ve been learning.</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="relative space-y-5 border-l border-border pl-6">
            {experience.map((e, i) => (
              <Reveal key={e.role} delay={i * 0.08}>
                <span className="absolute -left-[5px] mt-5 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_14px_var(--primary)]" />
                <div className="glass glass-hover rounded-2xl p-6">
                  <Briefcase size={18} className="text-primary" />
                  <h3 className="mt-3 font-display text-lg font-semibold">{e.role}</h3>
                  <p className="text-sm text-muted-foreground">{e.org}</p>
                  <p className="mt-1 font-mono text-xs text-primary">{e.period}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="space-y-5">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.08}>
                <div className="glass glass-hover rounded-2xl p-6">
                  <GraduationCap size={18} className="text-violet" />
                  <h3 className="mt-3 font-display text-lg font-semibold">{e.degree}</h3>
                  <p className="text-sm text-muted-foreground">{e.org}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="chip">{e.period}</span>
                    <span className="chip">{e.score}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="chip mb-4">05 — Achievements & Certifications</p>
          <h2 className="section-title">Certified and continuously building.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05}>
              <div className="glass glass-hover flex h-full items-start gap-4 rounded-2xl p-6">
                <Award size={20} className="mt-1 shrink-0 text-primary" />
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-violet">
                    {c.issuer}
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold">{c.name}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative mx-auto max-w-5xl px-6 py-24">
        <div className="glow-orb left-1/4 top-0 h-[360px] w-[360px] bg-primary" />
        <Reveal>
          <p className="chip mb-4">06 — Let&apos;s Work Together</p>
          <h2 className="section-title max-w-3xl">
            Let&apos;s Build Something <span className="text-neon">Intelligent</span> Together.
          </h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Currently open to entry-level AI/ML, Python Developer, and Data Analyst roles.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <ContactForm />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${EMAIL}`} className="chip">
              <Mail size={12} /> {EMAIL}
            </a>
            <a href={`tel:${PHONE}`} className="chip">
              <Phone size={12} /> {PHONE}
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="chip">
              <Github size={12} /> GitHub
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="chip">
              <Linkedin size={12} /> LinkedIn
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <span className="flex items-center gap-2">
            <Cpu size={14} className="text-primary" /> Nalagatla Sai Varshitha
          </span>
          <span className="font-mono text-xs">
            © {new Date().getFullYear()} — Built with care in Chennai.
          </span>
        </div>
      </footer>
    </div>
  );
}
