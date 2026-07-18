import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export interface Activity {
  id: number;
  action: string;
  item: string;
  date: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

export function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <Card className="rounded-md shadow-sm border border-slate-200 bg-white md:col-span-4">
      <CardHeader className="border-b border-slate-100 bg-slate-50/50 py-4">
        <CardTitle className="text-base font-semibold text-slate-900">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader className="bg-slate-50 border-b border-slate-200">
            <TableRow className="hover:bg-transparent">
              <TableHead className="font-semibold text-slate-700">Action</TableHead>
              <TableHead className="font-semibold text-slate-700">Item</TableHead>
              <TableHead className="text-right font-semibold text-slate-700">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity, index) => (
              <TableRow key={activity.id} className={index % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                <TableCell className="font-medium text-slate-900">{activity.action}</TableCell>
                <TableCell className="text-slate-600">{activity.item}</TableCell>
                <TableCell className="text-right text-slate-500 text-sm">{activity.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
