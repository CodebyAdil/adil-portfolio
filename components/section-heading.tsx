'use client';

import { motion } from 'framer-motion';

type SectionHeadingProps = {
  index: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm font-medium text-primary">
          {index}
        </span>
        <div className="h-px w-8 bg-primary/40" />
        <span className="font-mono text-sm text-muted-foreground">
          {title}
        </span>
      </div>
      {subtitle && (
        <p className="mt-3 text-balance text-2xl font-bold tracking-tight md:text-3xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
