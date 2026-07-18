"use client";

import { use } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, PlayCircle, FileText, CheckCircle } from "lucide-react";

export default function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <Link href="/dashboard/courses" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-[#103B6B] transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Courses
      </Link>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content Area */}
        <div className="flex-1 space-y-6">
          <Card className="rounded-md shadow-sm border border-slate-200 bg-white overflow-hidden border-t-4 border-t-[#103B6B]">
            <div className="aspect-video bg-slate-100 flex flex-col items-center justify-center text-slate-400 border-b border-slate-200">
              <PlayCircle className="w-16 h-16 mb-2 text-[#103B6B]/80" />
              <p>Video Player Placeholder</p>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-900">Introduction to Course Module {resolvedParams.id}</CardTitle>
              <p className="text-slate-500 font-medium">Instructor: Jane Doe</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Welcome to this course! In this module, we will cover the foundational concepts you need to succeed. Make sure to review the provided materials and complete the quiz at the end of the section.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Syllabus */}
        <div className="w-full md:w-80 space-y-6">
          <Card className="rounded-md shadow-sm border border-slate-200 bg-white">
            <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
              <CardTitle className="text-base">Course Content</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y divide-slate-100">
                <li className="p-4 bg-[#103B6B]/5 flex items-start gap-3 cursor-pointer hover:bg-slate-50">
                  <PlayCircle className="w-5 h-5 text-[#103B6B] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-[#103B6B]">1. Introduction</p>
                    <p className="text-xs text-slate-500">5 mins</p>
                  </div>
                </li>
                <li className="p-4 flex items-start gap-3 cursor-pointer hover:bg-slate-50">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-700">2. Basic Concepts</p>
                    <p className="text-xs text-slate-500">12 mins</p>
                  </div>
                </li>
                <li className="p-4 flex items-start gap-3 cursor-pointer hover:bg-slate-50">
                  <FileText className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-700">3. Practical Assignment</p>
                    <p className="text-xs text-slate-500">30 mins</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
