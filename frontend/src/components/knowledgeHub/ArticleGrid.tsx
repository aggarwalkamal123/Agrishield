"use client";

import { Article } from "@/lib/articles";
import ArticleCard from "./ArticleCard";

interface Props {

    articles: Article[];

    onSelect: (article: Article) => void;

}

export default function ArticleGrid({

    articles,

    onSelect,

}: Props) {

    return (

        <section>

            <div className="mb-8">

                <h2 className="text-4xl font-black text-slate-900 dark:text-white">

                    Articles

                </h2>

                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">

                    Browse research articles, scientific knowledge, and practical guidance on soil contamination and sustainable agriculture.

                </p>

            </div>

            <div
                className="
                grid
                gap-8
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-3
                "
            >

                {articles.map((article) => (

                    <ArticleCard

                        key={article.id}

                        article={article}

                        onClick={() => onSelect(article)}

                    />

                ))}

            </div>

        </section>

    );

}