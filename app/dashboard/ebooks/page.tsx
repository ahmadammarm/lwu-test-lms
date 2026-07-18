"use client";

import { useState } from "react";
import { initialEbooks } from "@/lib/mock-data";
import { PageHeader } from "@/components/shared/PageHeader";
import { SearchInput } from "@/components/shared/SearchInput";
import { EmptyState } from "@/components/shared/EmptyState";
import { EbookList } from "@/components/features/ebooks/EbookList";

export default function EbooksPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEbooks = initialEbooks.filter(ebook => 
    ebook.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    ebook.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <PageHeader 
        title="Ebooks Library" 
        description="Browse and download your purchased ebooks."
        action={
          <SearchInput 
            value={searchQuery} 
            onChange={setSearchQuery} 
            placeholder="Search titles or authors..." 
          />
        }
      />

      {filteredEbooks.length === 0 ? (
        <EmptyState 
          title="No ebooks found" 
          description={`We couldn't find any ebooks matching "${searchQuery}"`} 
        />
      ) : (
        <EbookList ebooks={filteredEbooks} />
      )}
    </div>
  );
}
