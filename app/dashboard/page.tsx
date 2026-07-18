import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Library, Trophy, ArrowUpRight } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const stats = [
  {
    title: "Active Courses",
    value: "4",
    icon: BookOpen,
    trend: "+1",
    trendText: "this week",
  },
  {
    title: "Ebooks Read",
    value: "12",
    icon: Library,
    trend: "+3",
    trendText: "this month",
  },
  {
    title: "Hours Learned",
    value: "48.5",
    icon: Clock,
    trend: "Top 10%",
    trendText: "of students",
  },
  {
    title: "Certificates",
    value: "3",
    icon: Trophy,
    trend: "+1",
    trendText: "recently",
  },
];

const recentActivity = [
  { id: 1, action: "Completed Module", item: "React Fundamentals", date: "Today, 10:30 AM" },
  { id: 2, action: "Purchased", item: "Advanced Next.js Ebook", date: "Yesterday, 2:15 PM" },
  { id: 3, action: "Started Course", item: "UI/UX Design Principles", date: "Oct 24, 2023" },
  { id: 4, action: "Completed Quiz", item: "CSS Grid Masterclass", date: "Oct 22, 2023" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
        <p className="text-slate-500 mt-1">Welcome back, Student! Here is an overview of your progress.</p>
      </div>

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

      <div className="grid gap-6 md:grid-cols-7">
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
                {recentActivity.map((activity, index) => (
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

        <Card className="rounded-md shadow-sm border border-slate-200 bg-white md:col-span-3 flex flex-col">
          <CardHeader className="border-b border-slate-100 bg-slate-50/50 py-4">
            <CardTitle className="text-base font-semibold text-slate-900">Continue Learning</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-6 flex flex-col justify-center">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-xs font-semibold text-[#103B6B] tracking-wider uppercase mb-1">In Progress</div>
                  <h3 className="font-bold text-slate-900 leading-tight">Frontend Web Development</h3>
                </div>
                <div className="text-xl font-bold text-slate-900">75%</div>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#103B6B] rounded-full" style={{ width: "75%" }} />
              </div>
              <p className="text-sm text-slate-500">You are 3 modules away from earning your certificate.</p>
              <Button className="w-full mt-2 bg-[#103B6B] hover:bg-[#0a2646] text-white font-medium h-10">
                Resume Course
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
