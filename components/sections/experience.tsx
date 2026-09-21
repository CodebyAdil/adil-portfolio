'use client';

import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/lib/portfolio-data';
import { SectionHeading } from '@/components/section-heading';

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <SectionHeading index="03" title="Experience" />

        <div className="mt-10 space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="border-border/60 transition-colors hover:border-primary/30">
                <CardContent className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold">{exp.role}</h3>
                        {exp.liveUrl && (
                          <a
                            href={exp.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                          >
                            <Badge
                              variant="secondary"
                              className="gap-1 border-primary/20 bg-primary/10 text-primary"
                            >
                              <ExternalLink className="h-3 w-3" />
                              Live
                            </Badge>
                          </a>
                        )}
                      </div>
                      <p className="mt-1 text-sm font-medium text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>
                    <Badge variant="outline" className="w-fit text-xs">
                      {exp.period}
                    </Badge>
                  </div>

                  {/* Description */}
                  <div className="mt-4 space-y-4">
                    {exp.description.split('\n\n').map((para, i) => (
                      <p
                        key={i}
                        className="text-sm leading-relaxed text-muted-foreground md:text-base"
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="mt-5 space-y-2.5">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-sm text-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
