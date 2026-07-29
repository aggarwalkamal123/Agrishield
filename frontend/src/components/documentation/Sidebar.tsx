"use client";

const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "technology", label: "Technology Stack" },
    { id: "architecture", label: "System Architecture" },
    { id: "workflow", label: "Workflow" },
    { id: "database", label: "Database" },
    { id: "api", label: "API Documentation" },
    { id: "research", label: "Research Papers" },
    { id: "manual", label: "User Manual" },
    { id: "structure", label: "Project Structure" },
];

export default function Sidebar() {
    return (
        <aside
            className="
                sticky
                top-28
                h-fit
                rounded-3xl
                border
                border-gray-200 dark:border-slate-700
                bg-white dark:bg-slate-900
                p-6
                shadow-md dark:shadow-black/30
            "
        >
            <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                Contents
            </h3>

            <nav className="space-y-2">
                {sections.map((section) => (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="
                            block
                            rounded-xl
                            px-4
                            py-3
                            font-medium
                            text-gray-700 dark:text-gray-300
                            transition
                            hover:bg-green-100 dark:hover:bg-slate-700
                            hover:text-green-700
                        "
                    >
                        {section.label}
                    </a>
                ))}
            </nav>
        </aside>
    );
}