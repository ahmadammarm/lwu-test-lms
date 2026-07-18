import { Ebook, EbookCard } from "./EbookCard";

interface EbookListProps {
  ebooks: Ebook[];
}

export function EbookList({ ebooks }: EbookListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {ebooks.map((ebook) => (
        <EbookCard key={ebook.id} ebook={ebook} />
      ))}
    </div>
  );
}
