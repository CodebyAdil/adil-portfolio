'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { aboutContent } from '@/lib/portfolio-data';
import { SectionHeading } from '@/components/section-heading';

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <SectionHeading index="01" title="About Me" />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <Card className="h-full border-border/60">
              <CardContent className="p-6 md:p-8">
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {aboutContent.bio}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Card className="h-full border-border/60 bg-primary/5">
              <CardContent className="p-6 md:p-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
                  What I Bring
                </h3>
                <ul className="space-y-3">
                  {aboutContent.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
