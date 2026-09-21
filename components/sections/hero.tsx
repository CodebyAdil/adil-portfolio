'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { heroContent, personalInfo } from '@/lib/portfolio-data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 md:px-10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-chart-2/10 blur-[100px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-3xl text-center"
      >
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <Badge
            variant="secondary"
            className="gap-1.5 border-primary/20 bg-primary/10 px-3 py-1 text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {personalInfo.availability}
          </Badge>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-balance text-4xl font-bold tracking-tight md:text-6xl"
        >
          {heroContent.headline}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 text-balance text-lg font-medium text-primary md:text-xl"
        >
          {heroContent.tagline}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mt-3 text-sm font-medium text-muted-foreground md:text-base"
        >
          {heroContent.subline}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-2xl text-balance text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          {heroContent.supportingLine}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <Button
            size="lg"
            onClick={() => scrollTo('#projects')}
            className="group gap-2"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo('#contact')}
          >
            Contact Me
          </Button>
          <Button
            size="lg"
            variant="ghost"
            asChild
            className="gap-2"
          >
            <a href={personalInfo.resumeUrl} download>
              <Download className="h-4 w-4" />
              Resume
            </a>
          </Button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-5 w-9 rounded-full border-2 border-muted-foreground/30 p-1"
        >
          <div className="mx-auto h-1.5 w-1 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
