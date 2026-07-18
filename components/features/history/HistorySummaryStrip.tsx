import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

interface HistorySummaryStripProps {
  totalSpent: string;
  transactionsCount: number;
}

export function HistorySummaryStrip({ totalSpent, transactionsCount }: HistorySummaryStripProps) {
  return (
    <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-center gap-6">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Total Spent</p>
          <p className="text-xl font-bold text-slate-900">{totalSpent}</p>
        </div>
        <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Transactions</p>
          <p className="text-xl font-bold text-slate-900">{transactionsCount}</p>
        </div>
      </div>
      <Button variant="outline" className="h-9 font-medium rounded-md shadow-sm border-slate-200 text-slate-700 bg-white hover:bg-slate-100">
        <FileText className="w-4 h-4 mr-2" />
        Export CSV
      </Button>
    </div>
  );
}
