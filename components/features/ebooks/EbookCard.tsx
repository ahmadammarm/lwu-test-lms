import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, BookOpen } from "lucide-react";

export interface Ebook {
  id: number;
  title: string;
  author: string;
  format: string;
  size: string;
  color: string;
}

export function EbookCard({ ebook }: { ebook: Ebook }) {
  return (
    <Card className="rounded-md shadow-sm border border-slate-200 bg-white overflow-hidden flex flex-col hover:shadow-md transition-shadow">
      {/* SaaS Style Ebook Cover */}
      <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-center relative">
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-white/90 backdrop-blur text-slate-700 border border-slate-200 px-2 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider shadow-sm">
            {ebook.format}
          </span>
        </div>
        <div className={`w-36 aspect-[2/3] ${ebook.color} rounded-sm shadow-md relative flex flex-col p-4 overflow-hidden border border-slate-900/10`}>
          <div className="absolute top-0 left-0 w-2 h-full bg-black/10 border-r border-white/10" />
          <div className="flex-1 flex flex-col justify-between pl-3 relative z-10">
            <span className="text-white font-bold text-sm leading-snug line-clamp-4">{ebook.title}</span>
            <span className="text-white/80 text-[10px] font-medium leading-tight">{ebook.author}</span>
          </div>
        </div>
      </div>
      
      <CardHeader className="flex-1 pb-2 pt-5 px-5">
        <CardTitle className="text-base font-bold text-slate-900 leading-snug line-clamp-2 min-h-[2.75rem]">{ebook.title}</CardTitle>
        <p className="text-sm font-medium text-slate-500 mt-1.5">{ebook.author}</p>
      </CardHeader>
      <CardContent className="pb-5 pt-0 px-5">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mt-3">
          <span>{ebook.format}</span>
          <span>•</span>
          <span>{ebook.size}</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2.5 px-5 pb-5 pt-0">
        <Link href={`/dashboard/ebooks/${ebook.id}`} className="w-full">
          <Button className="w-full h-10 bg-[#103B6B] hover:bg-[#0a2646] text-white font-medium rounded-md shadow-sm">
            <BookOpen className="w-4 h-4 mr-2" />
            Read Now
          </Button>
        </Link>
        <Button variant="outline" className="w-full h-10 font-medium rounded-md shadow-sm border-slate-200 text-slate-700 bg-white hover:bg-slate-50">
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </CardFooter>
    </Card>
  );
}
