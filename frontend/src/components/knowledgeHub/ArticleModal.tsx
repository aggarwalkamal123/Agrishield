"use client";

import { X } from "lucide-react";
import { Article } from "@/lib/articles";

interface Props {

    article: Article | null;

    onClose: () => void;

}

export default function ArticleModal({

    article,

    onClose,

}: Props) {

    if (!article) return null;

    return (

        <div

            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm p-6 overflow-y-auto"

        >

            <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-2xl">

                {/* HERO */}

                <div className="relative">

                    <img

                        src={article.image}

                        alt={article.title}

                        className="h-80 w-full object-cover"

                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                    <button

                        onClick={onClose}

                        className="absolute right-6 top-6 rounded-full bg-white dark:bg-slate-900 p-3 shadow-lg dark:shadow-black/40 transition hover:scale-105"

                    >

                        <X size={24} />

                    </button>

                    <div className="absolute bottom-8 left-8">

                        <span className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white">

                            {article.category}

                        </span>

                        <h1 className="mt-5 text-5xl font-black text-white">

                            {article.title}

                        </h1>

                    </div>

                </div>

                {/* BODY */}

                <main className="p-10">

                    {/* Abstract */}

                    <div className="rounded-2xl bg-green-50 dark:bg-slate-800 p-8">

                        <h2 className="text-2xl font-bold text-green-700">

                            Description

                        </h2>

                        <p className="mt-4 leading-8 text-gray-700 dark:text-gray-300">

                            {article.description}

                        </p>

                    </div>

                    {/* Article */}

                    <article className="mt-10 whitespace-pre-line leading-9 text-gray-700 dark:text-gray-300">

                        {article.content}

                    </article>

                </main>

            </div>

        </div>

    );

}