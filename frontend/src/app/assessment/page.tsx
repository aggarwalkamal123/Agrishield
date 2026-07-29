"use client";

import { useState } from "react";
import { useRef, useEffect } from "react";

import AssessmentIntro from "@/components/assessment/AssessmentIntro";
import AssessmentForm from "@/components/assessment/AssessmentForm";
import AssessmentDashboard from "@/components/dashboard/AssessmentDashboard";
import AssessmentLoading from "@/components/dashboard/AssessmentLoading";
import AssessmentSuccess from "@/components/dashboard/AssessmentSuccess";

export default function AssessmentPage() {

    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [completed, setCompleted] = useState(false);
    const dashboardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (result) {

            dashboardRef.current?.scrollIntoView({

                behavior: "smooth",

                block: "start",

            });

        }

    }, [result]);

    {
        result && (

            <div ref={dashboardRef}>

                <div className="border-t border-gray-300 dark:border-slate-700 pt-14" />

                <AssessmentDashboard
                    data={result}
                />

            </div>

        )
    }

    return (

        <main className="bg-gray-50 dark:bg-slate-800 dark:bg-slate-950 min-h-screen">

            <div className="mx-auto max-w-7xl px-6 py-16 space-y-14">

                <AssessmentIntro />

                <AssessmentForm
                    onResult={setResult}
                    setLoading={setLoading}
                    setCompleted={setCompleted}
                    loading={loading}
                />

                {loading && <AssessmentLoading />}

                {completed && <AssessmentSuccess />}

                {result && (

                    <>

                        <div className="border-t border-gray-300 dark:border-slate-700 pt-14" />

                        <AssessmentDashboard
                            data={result}
                        />

                    </>

                )}

            </div>

        </main>

    );

}