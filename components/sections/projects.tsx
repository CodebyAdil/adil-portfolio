'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { StatusBadge } from '@/components/status-badge';
import { projects } from '@/lib/portfolio-data';
import { SectionHeading } from '@/components/section-heading';
import { cn } from '@/lib/utils';

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <SectionHeading index="04" title="Projects" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => {
            const isPlaceholder = project.status === 'placeholder';
            return (
              <motion.div
                key={`${project.title}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -6 }}
              >
                <Card
                  className={cn(
                    'group flex h-full flex-col transition-all duration-300',
                    isPlaceholder
                      ? 'border-dashed border-muted-foreground/30 bg-transparent'
                      : 'border-border/60 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5'
                  )}
                >
                  <CardContent className="flex flex-1 flex-col p-6">
                    {/* Header */}
                    <div className="mb-3 flex items-start justify-between gap-2">
                      <h3
                        className={cn(
                          'text-base font-semibold',
                          isPlaceholder && 'text-muted-foreground/60'
                        )}
                      >
                        {isPlaceholder ? (
                          <span className="flex items-center gap-2">
                            <Plus className="h-4 w-4" />
                            {project.title}
                          </span>
                        ) : (
                          project.title
                        )}
                      </h3>
                      <StatusBadge status={project.status} />
                    </div>

                    {/* Description */}
                    <p
                      className={cn(
                        'flex-1 text-sm leading-relaxed',
                        isPlaceholder
                          ? 'text-muted-foreground/50'
                          : 'text-muted-foreground'
                      )}
                    >
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    {project.techStack.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Links */}
                    {!isPlaceholder && (
                      <div className="mt-5 flex items-center gap-3 border-t border-border/50 pt-4">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
