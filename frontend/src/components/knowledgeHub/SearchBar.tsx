"use client";

import { Search } from "lucide-react";

interface Props {
    search: string;
    setSearch: (value: string) => void;
}

export default function SearchBar({
    search,
    setSearch,
}: Props) {

    return (

        <div className="relative">

            <Search
                className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"
                size={22}
            />

            <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                w-full
                rounded-2xl
                border
                border-gray-200 dark:border-slate-700
                bg-white dark:bg-slate-900
                py-5
                pl-16
                pr-6
                text-lg
                outline-none
                shadow-sm
                transition
                focus:border-green-500
                focus:ring-4
                focus:ring-green-100
                "
            />

        </div>

    );

}