'use client';

import dynamic from 'next/dynamic';

const TaskBreakdownLP = dynamic(() => import('../components/TaskBreakdownLP'), {
  ssr: false
});

export default function TaskBreakdownPage() {
  return <TaskBreakdownLP />;
} 