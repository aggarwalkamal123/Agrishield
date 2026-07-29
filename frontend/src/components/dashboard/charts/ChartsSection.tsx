"use client";

import MetalVsLimitChart from "./MetalVsLimitChart";
import PollutionIndicesChart from "./PollutionIndicesChart";
import MetalContributionChart from "./MetalContributionChart";
import HealthRiskChart from "./HealthRiskChart";

interface Props {

    charts: any;

}

export default function ChartsSection({ charts }: Props) {

    if (!charts) return null;

    return (

        <div className="space-y-10">

            <MetalVsLimitChart

                data={charts.metal_vs_limit_chart}

            />

            <PollutionIndicesChart
                data={charts.pollution_indices_chart}
            />

            <MetalContributionChart
                data={charts.metal_contribution_chart}
            />

            <HealthRiskChart
                data={charts.health_risk_chart}
            />

        </div>

    );

}