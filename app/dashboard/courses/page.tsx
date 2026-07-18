"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Clock, BookOpen } from "lucide-react";

const initialCourses = [
  { id: 1, title: "Frontend Web Development", instructor: "Jane Doe", category: "Engineering", progress: 75, totalModules: 12, completedModules: 9, hours: 24 },
  { id: 2, title: "UI/UX Design Principles", instructor: "John Smith", category: "Design", progress: 30, totalModules: 10, completedModules: 3, hours: 16 },
  { id: 3, title: "Advanced React Patterns", instructor: "Alice Johnson", category: "Engineering", progress: 0, totalModules: 8, completedModules: 0, hours: 12 },
  { id: 4, title: "Backend with Node.js", instructor: "Bob Brown", category: "Engineering", progress: 100, totalModules: 15, completedModules: 15, hours: 32 },
];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = initialCourses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">My Courses</h1>
          <p className="text-slate-500 mt-1">Continue learning and track your progress.</p>
        </div>
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            type="search"
            placeholder="Search courses or categories..."
            className="w-full pl-9 h-10 rounded-md shadow-sm border-slate-200 bg-white focus-visible:ring-[#103B6B]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {filteredCourses.length === 0 ? (
        <div className="py-16 text-center bg-white rounded-md shadow-sm border border-slate-200">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-4">
            <Search className="w-6 h-6 text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-1">No courses found</h3>
          <p className="text-slate-500">We couldn't find any courses matching "{searchQuery}"</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="rounded-md shadow-sm border border-slate-200 bg-white overflow-hidden flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border-t-4 border-t-[#103B6B]">
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
          ))}
        </div>
      )}
    </div>
  );
}
