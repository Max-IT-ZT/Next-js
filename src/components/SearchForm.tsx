"use client";
import { useState } from "react";

interface SearchFormProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

export default function SearchForm({ onSearch, isLoading }: SearchFormProps) {
  const [query, setQuery] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(query);
        setQuery("");
      }}
    >
      <input
        type="text"
        name="search"
        placeholder="Пошук..."
        className="border border-gray-300 rounded-md p-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-md p-2 ml-2"
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}
