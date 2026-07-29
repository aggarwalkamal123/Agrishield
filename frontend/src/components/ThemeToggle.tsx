"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {

    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (

        <button
            onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
            }
            className="h-12 w-12 rounded-full border border-green-200 dark:border-gray-700 bg-white dark:bg-slate-900 dark:bg-slate-800 shadow-md dark:shadow-black/30 hover:scale-105 transition"
        >
            {theme === "dark" ? "☀️" : "🌙"}
        </button>

    );

}
