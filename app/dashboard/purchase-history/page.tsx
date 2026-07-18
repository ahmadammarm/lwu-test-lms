"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Search, FileText, ChevronLeft, ChevronRight } from "lucide-react";

const initialHistory = [
  { id: "INV-001", item: "Frontend Web Development Course", date: "2023-10-15", amount: "$99.00", status: "Completed" },
  { id: "INV-002", item: "UI/UX Design Principles Course", date: "2023-09-22", amount: "$89.00", status: "Completed" },
  { id: "INV-003", item: "Modern JavaScript Deep Dive (Ebook)", date: "2023-08-10", amount: "$24.00", status: "Completed" },
  { id: "INV-004", item: "Advanced React Patterns Course", date: "2023-07-05", amount: "$129.00", status: "Completed" },
  { id: "INV-005", item: "Backend with Node.js Course", date: "2023-06-18", amount: "$109.00", status: "Completed" },
  { id: "INV-006", item: "Figma Masterclass", date: "2023-05-12", amount: "$49.00", status: "Completed" },
  { id: "INV-007", item: "The Accessible Web (Ebook)", date: "2023-04-30", amount: "$15.00", status: "Completed" },
  { id: "INV-008", item: "Fullstack Architecture", date: "2023-03-21", amount: "$149.00", status: "Completed" },
];

const ITEMS_PER_PAGE = 5;

export default function PurchaseHistoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredHistory = initialHistory.filter(invoice => 
    invoice.item.toLowerCase().includes(searchQuery.toLowerCase()) || 
    invoice.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredHistory.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredHistory.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset page to 1 when search changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Purchase History</h1>
          <p className="text-slate-500 mt-1">View your past transactions and download invoices.</p>
        </div>
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            type="search"
            placeholder="Search by ID or item..."
            className="w-full pl-9 h-10 rounded-md shadow-sm border-slate-200 bg-white focus-visible:ring-[#103B6B]"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <Card className="rounded-md shadow-sm border border-slate-200 bg-white overflow-hidden flex flex-col">
        {/* SaaS Summary Strip */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Total Spent</p>
              <p className="text-xl font-bold text-slate-900">$663.00</p>
            </div>
            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Transactions</p>
              <p className="text-xl font-bold text-slate-900">{initialHistory.length}</p>
            </div>
          </div>
          <Button variant="outline" className="h-9 font-medium rounded-md shadow-sm border-slate-200 text-slate-700 bg-white hover:bg-slate-100">
            <FileText className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>

        <CardContent className="p-0 overflow-x-auto flex-1">
          {filteredHistory.length === 0 ? (
            <div className="py-16 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-4">
                <Search className="w-6 h-6 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">No transactions found</h3>
              <p className="text-slate-500">We couldn't find any invoices matching "{searchQuery}"</p>
            </div>
          ) : (
            <Table className="min-w-[700px]">
              <TableHeader className="bg-white">
                <TableRow className="hover:bg-transparent border-b border-slate-200">
                  <TableHead className="w-[120px] font-semibold text-slate-700 h-12 px-6">Invoice ID</TableHead>
                  <TableHead className="font-semibold text-slate-700 h-12">Item</TableHead>
                  <TableHead className="font-semibold text-slate-700 h-12">Date</TableHead>
                  <TableHead className="font-semibold text-slate-700 h-12">Status</TableHead>
                  <TableHead className="text-right font-semibold text-slate-700 h-12">Amount</TableHead>
                  <TableHead className="text-right font-semibold text-slate-700 h-12 px-6">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentItems.map((invoice, index) => (
                  <TableRow key={invoice.id} className={index % 2 === 0 ? "bg-slate-50/50" : "bg-white"}>
                    <TableCell className="font-mono text-sm font-semibold text-[#103B6B] px-6 py-4">
                      {invoice.id}
                    </TableCell>
                    <TableCell className="font-medium text-slate-900 py-4">{invoice.item}</TableCell>
                    <TableCell className="whitespace-nowrap text-slate-500 text-sm font-medium py-4">{invoice.date}</TableCell>
                    <TableCell className="py-4">
                      <span className="inline-flex items-center rounded-sm bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-200">
                        {invoice.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right font-bold text-slate-900 py-4">{invoice.amount}</TableCell>
                    <TableCell className="text-right px-6 py-4">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-[#103B6B] hover:bg-slate-100 rounded-md">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download Invoice</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
        
        {/* Pagination Footer */}
        {filteredHistory.length > 0 && (
          <div className="bg-white border-t border-slate-200 px-6 py-3 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              Showing <span className="font-medium text-slate-900">{startIndex + 1}</span> to <span className="font-medium text-slate-900">{Math.min(startIndex + ITEMS_PER_PAGE, filteredHistory.length)}</span> of <span className="font-medium text-slate-900">{filteredHistory.length}</span> results
            </p>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="h-8 w-8 p-0"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous Page</span>
              </Button>
              <span className="text-sm text-slate-600 font-medium px-2">
                Page {currentPage} of {totalPages}
              </span>
              <Button 
                variant="outline" 
                size="sm" 
                className="h-8 w-8 p-0"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next Page</span>
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
