import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen } from "lucide-react";

export interface Course {
  id: number;
  title: string;
  instructor: string;
  category: string;
  progress: number;
  totalModules: number;
  completedModules: number;
  hours: number;
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="rounded-md shadow-sm border border-slate-200 bg-white overflow-hidden flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border-t-4 border-t-[#103B6B]">
      <CardHeader className="flex-1 pb-4 pt-5 px-5">
        <div className="flex justify-between items-start mb-3">
          <span className="inline-flex items-center rounded-sm bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600 border border-slate-200">
            {course.category}
          </span>
          {course.progress === 100 && (
            <span className="inline-flex items-center rounded-sm bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-200">
              Completed
            </span>
          )}
        </div>
        <CardTitle className="text-lg font-bold leading-snug text-slate-900 mb-1 line-clamp-2 min-h-[3.5rem]">{course.title}</CardTitle>
        <p className="text-sm font-medium text-slate-500">by {course.instructor}</p>
      </CardHeader>
      
      <CardContent className="pb-5 px-5">
        <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
          <div className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" /> {course.totalModules} modules</div>
          <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {course.hours} hours</div>
        </div>

        <div className="space-y-2.5">
          <div className="flex justify-between text-xs font-semibold text-slate-700">
            <span>{course.progress}% Complete</span>
            <span>{course.completedModules}/{course.totalModules}</span>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
            <div 
              className={`h-full rounded-full transition-all duration-500 ${course.progress === 100 ? 'bg-emerald-500' : 'bg-[#103B6B]'}`} 
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0 px-5 pb-5">
        <Link href={`/dashboard/courses/${course.id}`} className="w-full">
          <Button 
            variant={course.progress === 100 ? "outline" : "default"}
            className={`w-full font-medium h-10 rounded-md shadow-sm ${
              course.progress === 100 
                ? 'border-slate-200 text-slate-700 hover:bg-slate-50' 
                : 'bg-[#103B6B] hover:bg-[#0a2646] text-white'
            }`}
          >
            {course.progress === 100 ? "Review Material" : course.progress === 0 ? "Start Course" : "Continue Learning"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
