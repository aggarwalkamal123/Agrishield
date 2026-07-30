"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {

    const pathname = usePathname();

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
                transition-all
                duration-300
            "
        >

            <div className="mx-auto flex max-w-7xl items-center justify-between pl-5 pr-8 py-3">

                {/* Logo */}

                <Link
                    href="/"
                    className="-ml-[0.0001px] transition duration-300 hover:scale-105"
                >
                    <Image
                        src="/logos/agrishield_logo.png"
                        alt="AgriShield"
                        width={220}
                        height={60}
                        priority
                        unoptimized
                        className="h-20 w-auto object-contain"
                    />

                </Link>

                {/* Navigation */}

                <div className="flex items-center gap-5">

                    <nav className="hidden items-center gap-2 md:flex">

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

                    <ThemeToggle />

                </div>

            </div>

        </header>

    );

}