"use client";

import { ReactNode } from "react";

interface Props {
    id: string;
    title: string;
    description?: string;
    children: ReactNode;
}

export default function DocumentationSection({
    id,
    title,
    description,
    children,
}: Props) {
    return (
        <section
            id={id}
            className="
                scroll-mt-32
                rounded-3xl
                border
                border-gray-200 dark:border-slate-700
                bg-white dark:bg-slate-900
                p-10
                shadow-md dark:shadow-black/30
            "
        >
            <h2 className="text-4xl font-black text-green-700">
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
                    {description}
                </p>
            )}

            <div className="mt-8 space-y-6">
                {children}
            </div>
        </section>
    );
}