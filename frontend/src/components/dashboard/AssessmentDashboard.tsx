"use client";

import { Download } from "lucide-react";
import { downloadPDF } from "@/lib/api";
import AssessmentSummary from "./AssessmentSummary";
import SoilPropertiesCard from "./SoilPropertiesCard";
import BioavailabilityCard from "./BioavailabilityCard";
import OverallCards from "./OverallCards";
import HeavyMetalTable from "./HeavyMetalTable";
import IndexTable from "./IndexTable";
import ChartsSection from "./charts/ChartsSection";
import Recommendations from "./Recommendations";


interface Props {
    data: any;
}

export default function AssessmentDashboard({ data }: Props) {

    if (!data) return null;

    return (

        <div className="space-y-10">

            <div className="flex justify-end">

                <button onClick={() => downloadPDF(data)}

                    className="flex items-center gap-3 rounded-xl bg-green-700 px-6 py-3 text-white font-semibold hover:bg-green-800 transition"

                >

                    <Download className="h-5 w-5" />

                    Download PDF Report

                </button>

            </div>

            <AssessmentSummary
                summary={data.assessment_summary}
            />

            <SoilPropertiesCard
                data={data.soil_properties}
            />

            <BioavailabilityCard
                data={data.bioavailability}
            />

            <OverallCards
                data={data.overall_cards}
            />

            <HeavyMetalTable
                data={data.metal_table}
            />

            <IndexTable
                data={data.index_table}
            />

            <ChartsSection

                charts={data.charts}

            />

            <Recommendations
                recommendations={data.recommendations}
            />

        </div>

    );

}