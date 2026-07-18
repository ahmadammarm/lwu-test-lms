import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchInput({ value, onChange, placeholder = "Search...", className = "w-full sm:w-80" }: SearchInputProps) {
  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
      <Input
        type="search"
        placeholder={placeholder}
        className="w-full pl-9 h-10 rounded-md shadow-sm border-slate-200 bg-white focus-visible:ring-[#103B6B]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
