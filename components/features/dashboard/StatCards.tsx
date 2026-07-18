import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export interface StatItem {
  title: string;
  value: string;
  icon: React.ElementType;
  trend: string;
  trendText: string;
}

interface StatCardsProps {
  stats: StatItem[];
}

export function StatCards({ stats }: StatCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <Card key={i} className="rounded-md shadow-sm border border-slate-200 bg-white border-l-4 border-l-[#103B6B]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-slate-600">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
              <div className="flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-sm">
                <ArrowUpRight className="w-3 h-3 mr-0.5" />
                {stat.trend}
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-1">{stat.trendText}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
