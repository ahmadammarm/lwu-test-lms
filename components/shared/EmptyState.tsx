import React from "react";
import { Search } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export function EmptyState({ 
  title = "No results found", 
  description = "We couldn't find any items matching your search.",
  icon = <Search className="w-6 h-6 text-slate-400" />
}: EmptyStateProps) {
  return (
    <div className="py-16 text-center bg-white rounded-md shadow-sm border border-slate-200">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-slate-500">{description}</p>
    </div>
  );
}
