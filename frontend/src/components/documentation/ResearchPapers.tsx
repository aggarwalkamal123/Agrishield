"use client";

const papers = [
    {
        title: "Pollution Indices as Useful Tools for Comprehensive Evaluation of Degree of Soil Contamination: A Review",
        journal: "Environmental Geochemistry and Health",
        year: "2021",
        url: "https://link.springer.com/article/10.1007/s10653-018-0106-z",
    },
    {
        title: "Heavy Metal Contamination in Agricultural Soil: Environmental Pollutants Affecting Crop Health",
        journal: "Agronomy (MDPI)",
        year: "2023",
        url: "https://www.mdpi.com/2073-4395/13/6/1521",
    },
    {
        title: "Agroecological Responses of Heavy Metal Pollution, with Special Emphasis on Soil Health and Plant Performances",
        journal: "Plants (MDPI)",
        year: "2022",
        url: "https://www.frontiersin.org/journals/environmental-science/articles/10.3389/fenvs.2017.00064/full",
    },
    {
        title: "Ecological and Human Health Risk Appraisal of Metal(loid)s in Agricultural Soils: A Review",
        journal: "Environmental Research",
        year: "2023",
        url: "https://www.tandfonline.com/doi/full/10.1080/24749508.2019.1701310",
    },
    {
        title: "Systematic Evaluation of Plant Metal Accumulation Efficiency: A Global Synthesis of Bioaccumulation and Translocation Factors",
        journal: "Science of the Total Environment",
        year: "2023",
        url: "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2025.1602951/full",
    },
    {
        title: "Sources of Soil Pollution by Heavy Metals and Their Accumulation in Vegetables: A Review",
        journal: "Environmental Technology & Innovation",
        year: "2022",
        url: "https://link.springer.com/article/10.1007/s11270-019-4221-y",
    },
    {
        title: "Transfer of Heavy Metals through Terrestrial Food Webs: A Review",
        journal: "Environmental Chemistry Letters",
        year: "2021",
        url: "https://link.springer.com/article/10.1007/s10661-015-4436-3",
    },
    {
        title: "Transfer of Metals from Soil to Vegetables and Possible Health Risk Assessment",
        journal: "Environmental Monitoring and Assessment",
        year: "2019",
        url: "https://link.springer.com/article/10.1186/2193-1801-2-385",
    },
    {
        title: "Environmental Pollution Indices: A Review on Concentration of Heavy Metals in Air, Water and Soil near Industrialization and Urbanization",
        journal: "Environmental Science and Pollution Research",
        year: "2021",
        url: "https://link.springer.com/article/10.1007/s44274-024-00030-8",
    },
    {
        title: "HMCA-Contour: A Visual Basic Program Based on Surfer Automation for Soil Heavy Metal Spatial Distribution and Contamination Assessment Mapping",
        journal: "Environmental Monitoring and Assessment",
        year: "2017",
        url: "https://www.mdpi.com/2071-1050/13/4/2282",
    },
];

export default function ResearchPapers() {

    return (

        <section
            id="research"
            className="space-y-8 scroll-mt-28"
        >

            <h2 className="text-4xl font-black text-slate-900 dark:text-white">
                Research Papers
            </h2>

            <p className="text-lg leading-9 text-gray-700 dark:text-gray-300">
                The development of AgriShield was guided by internationally
                published research covering heavy metal contamination,
                pollution indices, bioaccumulation, ecological risk assessment,
                food safety evaluation, human health risk analysis, and
                sustainable soil management.
            </p>

            <div className="space-y-5">

                {papers.map((paper, index) => (

                    <a
                        key={index}
                        href={paper.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            block
                            rounded-2xl
                            border
                            border-gray-200 dark:border-slate-700
                            bg-white dark:bg-slate-900
                            p-6
                            shadow-sm
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-green-300
                            hover:shadow-lg dark:shadow-black/40
                        "
                    >

                        <div className="flex items-start justify-between gap-6">

                            <div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white hover:text-green-700">

                                    {paper.title}

                                </h3>

                                <p className="mt-2 text-gray-600 dark:text-gray-400">

                                    {paper.journal}

                                </p>

                            </div>

                            <span
                                className="
                                    shrink-0
                                    rounded-full
                                    bg-green-100
                                    px-4
                                    py-2
                                    font-semibold
                                    text-green-700
                                "
                            >

                                {paper.year}

                            </span>

                        </div>

                    </a>

                ))}

            </div>

        </section>

    );

}