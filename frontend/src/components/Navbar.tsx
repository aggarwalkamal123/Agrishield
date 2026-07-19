import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow border-b border-gray-200">

            <div className="max-w-7xl mx-auto flex justify-center items-center gap-8 py-4 font-medium text-gray-700">

                <Link href="/">Home</Link>

                <Link href="/assessment">
                    Assessment
                </Link>

                <Link href="/knowledge-hub">
                    Knowledge Hub
                </Link>

                <Link href="/documentation">
                    Documentation
                </Link>

                <Link href="/about">
                    About
                </Link>

            </div>

        </nav>
    );
}