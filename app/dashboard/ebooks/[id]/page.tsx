"use client";

import { use } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Download, BookOpen, Clock, FileText } from "lucide-react";

export default function EbookDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <Link href="/dashboard/ebooks" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-[#103B6B] transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Ebooks
      </Link>

      <Card className="rounded-md shadow-sm border border-slate-200 bg-white overflow-hidden p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Ebook Cover */}
          <div className="w-full md:w-64 shrink-0 flex flex-col items-center">
            <div className={`w-full aspect-[2/3] bg-[#103B6B] rounded-sm shadow-xl relative flex flex-col p-6 overflow-hidden border border-slate-900/10`}>
              <div className="absolute top-0 left-0 w-2 h-full bg-black/10 border-r border-white/10" />
              <div className="flex-1 flex flex-col justify-between pl-3 relative z-10">
                <span className="text-white font-bold text-xl leading-snug">Book Title Example {resolvedParams.id}</span>
                <span className="text-white/80 font-medium leading-tight">Jane Doe</span>
              </div>
            </div>
          </div>

          {/* Ebook Details */}
          <div className="flex-1 space-y-6">
            <div>
              <div className="inline-flex items-center rounded-sm bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600 border border-slate-200 mb-4">
                PDF Document
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Book Title Example {resolvedParams.id}</h1>
              <p className="text-lg text-slate-600 font-medium">By Jane Doe</p>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-500 border-y border-slate-100 py-4">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-400" />
                <span>350 Pages</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>~ 8 Hours read</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-700">12 MB</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Description</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                This comprehensive guide covers everything you need to know about the topic. Whether you are a beginner looking to understand the basics, or an advanced user wanting to master the more complex patterns, this ebook is perfectly tailored for your learning journey.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button className="h-11 px-8 bg-[#103B6B] hover:bg-[#0a2646] text-white font-medium rounded-md shadow-sm">
                <BookOpen className="w-4 h-4 mr-2" />
                Read Online
              </Button>
              <Button variant="outline" className="h-11 px-8 font-medium rounded-md shadow-sm border-slate-200 text-slate-700 bg-white hover:bg-slate-50">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
