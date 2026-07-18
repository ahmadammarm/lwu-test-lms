import React from "react";

interface PageHeaderProps {
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
        <p className="text-slate-500 mt-1">{description}</p>
      </div>
      {action && <div className="w-full sm:w-auto">{action}</div>}
    </div>
  );
}
