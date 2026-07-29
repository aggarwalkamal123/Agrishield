"use client";

import { useMemo, useState } from "react";

import { articles, Article } from "@/lib/articles";

import SearchBar from "./SearchBar";
import ArticleGrid from "./ArticleGrid";
import ArticleModal from "./ArticleModal";

export default function KnowledgeHubContent() {

    const [search, setSearch] = useState("");

    const [selectedArticle, setSelectedArticle] =
        useState<Article | null>(null);

    const filteredArticles = useMemo(() => {

        const keyword = search.toLowerCase().trim();

        if (!keyword) return articles;

        return articles.filter((article) =>

            article.title.toLowerCase().includes(keyword) ||

            article.category.toLowerCase().includes(keyword) ||

            article.description.toLowerCase().includes(keyword)

        );

    }, [search]);

    return (

        <>

            <SearchBar

                search={search}

                setSearch={setSearch}

            />

            <ArticleGrid

                articles={filteredArticles}

                onSelect={setSelectedArticle}

            />

            <ArticleModal

                article={selectedArticle}

                onClose={() => setSelectedArticle(null)}

            />

        </>

    );

}