import { PageHeader } from "@/components/shared/PageHeader";
import { StatCards } from "@/components/features/dashboard/StatCards";
import { RecentActivity } from "@/components/features/dashboard/RecentActivity";
import { LearningProgress } from "@/components/features/dashboard/LearningProgress";
import { recentActivity } from "@/lib/mock-data";
import { BookOpen, Clock, Library, Trophy } from "lucide-react";

// For stats that use icons, we keep them here since icons are React components
const dashboardStats = [
  { title: "Active Courses", value: "4", icon: BookOpen, trend: "+1", trendText: "this week" },
  { title: "Ebooks Read", value: "12", icon: Library, trend: "+3", trendText: "this month" },
  { title: "Hours Learned", value: "48.5", icon: Clock, trend: "Top 10%", trendText: "of students" },
  { title: "Certificates", value: "3", icon: Trophy, trend: "+1", trendText: "recently" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <PageHeader 
        title="Dashboard" 
        description="Welcome back, Student! Here is an overview of your progress."
      />

      <StatCards stats={dashboardStats} />

      <div className="grid gap-6 md:grid-cols-7">
        <RecentActivity activities={recentActivity} />
        <LearningProgress />
      </div>
    </div>
  );
}
