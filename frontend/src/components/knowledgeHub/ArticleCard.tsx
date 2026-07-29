"use client";

import { Article } from "@/lib/articles";

interface Props {

    article: Article;

    onClick: () => void;

}

export default function ArticleCard({

    article,

    onClick,

}: Props) {

    return (

        <article

            className="
            group
            overflow-hidden
            rounded-3xl
            bg-white dark:bg-slate-900
            shadow-md dark:shadow-black/30
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-xl
            "

        >

            {/* Image */}

            <div className="overflow-hidden">

                <img

                    src={article.image}

                    alt={article.title}

                    className="
                    h-48
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                    "

                />

            </div>

            {/* Content */}

            <div className="flex h-[350px] flex-col p-6">

                <span className="inline-block w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-green-700">

                    {article.category}

                </span>

                <h2 className="mt-4 line-clamp-3 text-2xl font-extrabold leading-tight text-slate-900 dark:text-white">

                    {article.title}

                </h2>

                <p className="mt-4 line-clamp-4 leading-7 text-gray-600 dark:text-gray-400">

                    {article.description}

                </p>

                {/* Push button to bottom */}

                <div className="mt-auto flex justify-center pt-8">

                    <button

                        onClick={onClick}

                        className="
                        rounded-xl
                        bg-green-600
                        px-8
                        py-3
                        font-bold
                        text-white
                        transition
                        hover:bg-green-700
                        hover:scale-105
                        "

                    >

                        Read More →

                    </button>

                </div>

            </div>

        </article>

    );

}