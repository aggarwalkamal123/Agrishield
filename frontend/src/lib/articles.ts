export interface Article {

    id: number;

    title: string;

    description: string;

    category: string;

    image: string;

    content: string;

}

export const articles: Article[] = [

    {
        id: 1,

        title: "Heavy Metal Contamination in Agricultural Soil",

        category: "Soil Pollution",

        image: "/article_images/soil-contamination.jpeg",

        description:
            "Understand the sources, impacts, and risks of heavy metal contamination in agricultural soils.",

        content: `
Write approximately 1000 words here.
`
    },

    {
        id: 2,

        title: "Food Safety and Heavy Metal Accumulation",

        category: "Food Safety",

        image: "/article_images/food-safety.jpeg",

        description:
            "Learn how heavy metals accumulate in edible crops and affect food safety.",

        content: `
Write approximately 1000 words here.
`
    },

    {
        id: 3,

        title: "Health Risks Associated with Contaminated Crops",

        category: "Health",

        image: "/article_images/health-risk.jpg",

        description:
            "Explore the health risks associated with consuming crops grown in contaminated soils.",

        content: `
Write approximately 1000 words here.
`
    },

    {
        id: 4,

        title: "Bioavailability of Heavy Metals in Soil",

        category: "Soil Science",

        image: "/article_images/bioavailability.jpg",

        description:
            "Understand how soil properties influence heavy metal mobility and plant uptake.",

        content: `
Write approximately 1000 words here.
`
    },

    {
        id: 5,

        title: "Artificial Intelligence in Precision Agriculture",

        category: "Artificial Intelligence",

        image: "/article_images/ai-agriculture.jpeg",

        description:
            "Discover how AI is transforming modern agriculture and environmental monitoring.",

        content: `
Write approximately 1000 words here.
`
    },

    {
        id: 6,

        title: "GIS and Remote Sensing for Soil Monitoring",

        category: "Remote Sensing",

        image: "/article_images/gis.jpeg",

        description:
            "Applications of GIS and remote sensing technologies for soil contamination monitoring.",

        content: `
Write approximately 1000 words here.
`
    },

    {
        id: 7,

        title: "Understanding Soil Pollution Indices",

        category: "Environmental Assessment",

        image: "/article_images/pollution-indices.jpg",

        description:
            "A beginner-friendly explanation of CF, Igeo, EF, PLI, NPI, and PERI indices.",

        content: `
Write approximately 1000 words here.
`
    },

    {
        id: 8,

        title: "Modern Soil Remediation Techniques",

        category: "Remediation",

        image: "/article_images/remediation.jpeg",

        description:
            "Overview of modern soil remediation methods for contaminated agricultural land.",

        content: `
Write approximately 1000 words here.
`
    },

    {
        id: 9,

        title: "Sustainable Agriculture Practices",

        category: "Agriculture",

        image: "/article_images/sustainable.png",

        description:
            "Best practices for maintaining healthy soil and sustainable crop production.",

        content: `
Write approximately 1000 words here.
`
    },

    {
        id: 10,

        title: "Climate Change and Soil Quality",

        category: "Climate",

        image: "/article_images/climate.jpeg",

        description:
            "Impact of climate change on soil fertility, contamination, and agricultural productivity.",

        content: `
Write approximately 1000 words here.
`
    },

    {
        id: 11,

        title: "Safe Farming Practices for Contaminated Soils",

        category: "Best Practices",

        image: "/article_images/farming.jpeg",

        description:
            "Recommended agricultural practices to minimize contamination risks and improve crop safety.",

        content: `
Write approximately 1000 words here.
`
    },

    {
        id: 12,

        title: "Future of AI-Based Soil Assessment",

        category: "Innovation",

        image: "/article_images/future-ai.jpeg",

        description:
            "Future opportunities for AI-driven soil contamination assessment and smart agriculture.",

        content: `
Write approximately 1000 words here.
`
    }

];