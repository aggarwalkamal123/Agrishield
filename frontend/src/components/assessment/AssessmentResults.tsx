"use client";

interface Props {
    data: any;
}

export default function AssessmentResults({ data }: Props) {

    return (

        <section className="space-y-8">

            <h2 className="text-4xl font-bold text-green-700">
                Assessment Results
            </h2>

            <pre className="rounded-xl bg-slate-900 p-6 text-sm text-green-300 overflow-auto">
                {JSON.stringify(data, null, 2)}
            </pre>

        </section>

    );

}