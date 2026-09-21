'use client';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { ProjectStatus } from '@/lib/portfolio-data';

const statusConfig: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  live: {
    label: 'Live',
    className:
      'border-emerald-500/30 bg-emerald-500/10 text-emerald-500 dark:text-emerald-400',
  },
  'in-progress': {
    label: 'In Progress',
    className:
      'border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400',
  },
  placeholder: {
    label: '',
    className: '',
  },
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  if (status === 'placeholder') return null;
  const config = statusConfig[status];
  return (
    <Badge
      variant="outline"
      className={cn('gap-1.5 px-2.5 py-0.5 text-xs font-semibold', config.className)}
    >
      <span
        className={cn(
          'h-1.5 w-1.5 rounded-full',
          status === 'live' ? 'bg-emerald-500' : 'bg-amber-500'
        )}
      />
      {config.label}
    </Badge>
  );
}
