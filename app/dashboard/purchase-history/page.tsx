"use client";

import { useState } from "react";
import { initialHistory } from "@/lib/mock-data";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/PageHeader";
import { SearchInput } from "@/components/shared/SearchInput";
import { EmptyState } from "@/components/shared/EmptyState";
import { HistorySummaryStrip } from "@/components/features/history/HistorySummaryStrip";
import { HistoryTable } from "@/components/features/history/HistoryTable";

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

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <PageHeader 
        title="Purchase History" 
        description="View your past transactions and download invoices."
        action={
          <SearchInput 
            value={searchQuery} 
            onChange={handleSearchChange} 
            placeholder="Search by ID or item..." 
          />
        }
      />

      <Card className="rounded-md shadow-sm border border-slate-200 bg-white overflow-hidden flex flex-col">
        <HistorySummaryStrip totalSpent="$663.00" transactionsCount={initialHistory.length} />

        {filteredHistory.length === 0 ? (
          <div className="flex-1">
            <EmptyState 
              title="No transactions found" 
              description={`We couldn't find any invoices matching "${searchQuery}"`} 
            />
          </div>
        ) : (
          <HistoryTable 
            invoices={currentItems}
            currentPage={currentPage}
            totalPages={totalPages}
            startIndex={startIndex}
            itemsPerPage={ITEMS_PER_PAGE}
            totalFiltered={filteredHistory.length}
            onPageChange={setCurrentPage}
          />
        )}
      </Card>
    </div>
  );
}
