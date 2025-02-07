
import { useState } from "react";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import IconGrid from "@/components/IconGrid";
import { icons } from "@/lib/icons";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [styleFilter, setStyleFilter] = useState("all");

  const filteredIcons = icons.filter((icon) => {
    const matchesSearch = icon.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStyle = 
      styleFilter === "all" ||
      (styleFilter === "duotone" && icon.name.toLowerCase().includes("duo")) ||
      (styleFilter === "fill" && icon.name.toLowerCase().includes("fill")) ||
      (styleFilter === "line" && icon.name.toLowerCase().includes("line"));
    
    return matchesSearch && matchesStyle;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <Hero />
        <div className="mb-8">
          <SearchBar onSearch={setSearchQuery} />
          <div className="mt-4 max-w-xs mx-auto">
            <Select onValueChange={setStyleFilter} defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Filter by style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Styles</SelectItem>
                <SelectItem value="duotone">Duo Tone</SelectItem>
                <SelectItem value="fill">Fill</SelectItem>
                <SelectItem value="line">Line</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <IconGrid icons={filteredIcons} />
      </div>
    </div>
  );
};

export default Index;
