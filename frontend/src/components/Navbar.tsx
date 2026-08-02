"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {

    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Assessment", href: "/assessment" },
        { name: "Knowledge Hub", href: "/knowledge-hub" },
        { name: "Documentation", href: "/documentation" },
        { name: "About Us", href: "/about" },
    ];

    return (

        <header
            className="
                sticky
                top-0
                z-50
                border-b
                border-green-100
                dark:border-slate-700
                bg-white/90
                dark:bg-[#0B1120]/90
                backdrop-blur-xl
                shadow-md
                dark:shadow-black/30
            "
        >

            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8 py-3">

                {/* Logo */}

                <Link
                    href="/"
                    className="transition duration-300 hover:scale-105"
                >

                    <Image
                        src="/logos/agrishield_logo.png"
                        alt="AgriShield"
                        width={220}
                        height={60}
                        priority
                        unoptimized
                        className="h-14 md:h-20 w-auto object-contain"
                    />

                </Link>

                {/* Right Side */}

                <div className="flex items-center gap-3 md:gap-5">

                    {/* Desktop Navigation */}

                    <nav className="hidden md:flex items-center gap-2">

                        {navItems.map((item) => {

                            const active = pathname === item.href;

                            return (

                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`rounded-xl px-5 py-2 font-semibold transition-all duration-300 ${active
                                        ? "bg-green-600 text-white shadow-lg dark:shadow-black/40"
                                        : "text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-slate-800 hover:text-green-700 dark:hover:text-green-400"
                                        }`}
                                >

                                    {item.name}

                                </Link>

                            );

                        })}

                    </nav>

                    {/* Theme Toggle */}

                    <ThemeToggle />

                    {/* Mobile Menu Button */}

                    <button
                        className="md:hidden rounded-lg p-2 hover:bg-green-100 dark:hover:bg-slate-800 transition"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >

                        {menuOpen ? <X size={28} /> : <Menu size={28} />}

                    </button>

                </div>

            </div>

            {/* Mobile Menu */}

            {menuOpen && (

                <div className="md:hidden border-t border-green-100 dark:border-slate-700 bg-white dark:bg-[#0B1120]">

                    <nav className="flex flex-col p-4 gap-2">

                        {navItems.map((item) => {

                            const active = pathname === item.href;

                            return (

                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`rounded-xl px-4 py-3 font-semibold transition ${active
                                        ? "bg-green-600 text-white"
                                        : "text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-slate-800"
                                        }`}
                                >

                                    {item.name}

                                </Link>

                            );

                        })}

                    </nav>

                </div>

            )}

        </header>

    );

}