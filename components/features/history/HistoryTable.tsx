import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";

export interface Invoice {
  id: string;
  item: string;
  date: string;
  amount: string;
  status: string;
}

interface HistoryTableProps {
  invoices: Invoice[];
  currentPage: number;
  totalPages: number;
  startIndex: number;
  itemsPerPage: number;
  totalFiltered: number;
  onPageChange: (page: number) => void;
}

export function HistoryTable({ 
  invoices, 
  currentPage, 
  totalPages, 
  startIndex, 
  itemsPerPage, 
  totalFiltered,
  onPageChange 
}: HistoryTableProps) {
  return (
    <>
      <div className="overflow-x-auto flex-1">
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
            {invoices.map((invoice, index) => (
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
      </div>

      <div className="bg-white border-t border-slate-200 px-6 py-3 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Showing <span className="font-medium text-slate-900">{startIndex + 1}</span> to <span className="font-medium text-slate-900">{Math.min(startIndex + itemsPerPage, totalFiltered)}</span> of <span className="font-medium text-slate-900">{totalFiltered}</span> results
        </p>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8 w-8 p-0"
            onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
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
            onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next Page</span>
          </Button>
        </div>
      </div>
    </>
  );
}
