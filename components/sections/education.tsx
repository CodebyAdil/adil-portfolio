'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { education } from '@/lib/portfolio-data';
import { SectionHeading } from '@/components/section-heading';

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-max">
        <SectionHeading index="05" title="Education" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <Card className="border-border/60 transition-colors hover:border-primary/30">
            <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{education.degree}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {education.institution}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {education.period}
                  </p>
                </div>
              </div>
              <Badge
                variant="secondary"
                className="w-fit border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary"
              >
                CGPA: {education.cgpa}
              </Badge>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
