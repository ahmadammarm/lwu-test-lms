"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, BookOpen, Search } from "lucide-react";

const initialEbooks = [
  { id: 1, title: "Modern JavaScript Deep Dive", author: "Sarah Drasner", format: "PDF", size: "12 MB", color: "bg-[#103B6B]" },
  { id: 2, title: "CSS Architecture for Large Projects", author: "Harry Roberts", format: "EPUB", size: "8 MB", color: "bg-slate-800" },
  { id: 3, title: "The Accessible Web", author: "Léonie Watson", format: "PDF", size: "15 MB", color: "bg-blue-900" },
  { id: 4, title: "Design Systems in Practice", author: "Diana Mounter", format: "PDF", size: "22 MB", color: "bg-indigo-950" },
  { id: 5, title: "Mastering TypeScript", author: "Matt Pocock", format: "EPUB", size: "9 MB", color: "bg-cyan-900" },
  { id: 6, title: "Refactoring UI", author: "Adam Wathan", format: "PDF", size: "30 MB", color: "bg-slate-900" },
];

export default function EbooksPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEbooks = initialEbooks.filter(ebook => 
    ebook.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    ebook.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Ebooks Library</h1>
          <p className="text-slate-500 mt-1">Browse and download your purchased ebooks.</p>
        </div>
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            type="search"
            placeholder="Search titles or authors..."
            className="w-full pl-9 h-10 rounded-md shadow-sm border-slate-200 bg-white focus-visible:ring-[#103B6B]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {filteredEbooks.length === 0 ? (
        <div className="py-16 text-center bg-white rounded-md shadow-sm border border-slate-200">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-4">
            <Search className="w-6 h-6 text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-1">No ebooks found</h3>
          <p className="text-slate-500">We couldn't find any ebooks matching "{searchQuery}"</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEbooks.map((ebook) => (
            <Card key={ebook.id} className="rounded-md shadow-sm border border-slate-200 bg-white overflow-hidden flex flex-col hover:shadow-md transition-shadow">
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
          ))}
        </div>
      )}
    </div>
  );
}
