"use client";

import { useState } from "react";

import { submitAssessment } from "@/lib/api";

import { parseCSV } from "@/lib/csvParser";

import CropSelection from "./CropSelection";
import SoilParameters from "./SoilParameters";
import EnvironmentalInputs from "./EnvironmentalInputs";
import HeavyMetalInput from "./HeavyMetalInput";

interface Props {

    onResult: (result: any) => void;

    setLoading: (value: boolean) => void;

    setCompleted: (value: boolean) => void;

    loading: boolean;

}

export default function AssessmentForm({

    onResult,
    setLoading,
    setCompleted,
    loading,

}: Props) {

    const [crop, setCrop] = useState("");

    const [soilPH, setSoilPH] = useState("");

    const [organicMatter, setOrganicMatter] = useState("");

    const [soilTexture, setSoilTexture] = useState("");

    const [temperature, setTemperature] = useState("");

    const [moisture, setMoisture] = useState("");

    const [csvFile, setCsvFile] = useState<File | null>(null);

    const [manualEntries, setManualEntries] = useState<any[]>([]);

    const handleSubmit = async () => {

        try {

            onResult(null);
            setLoading(true);

            let heavyMetals: Record<string, number> = {};

            // CSV

            if (csvFile) {

                heavyMetals = await parseCSV(csvFile);

            }

            // Manual Entries

            else {

                manualEntries.forEach((item) => {

                    if (

                        item.metal !== "" &&

                        item.concentration !== ""

                    ) {

                        heavyMetals[item.metal] = Number(item.concentration);

                    }

                });

            }

            const payload = {

                crop,

                soil_texture: soilTexture,

                soil_ph: Number(soilPH),

                organic_matter: Number(organicMatter),

                heavy_metals: heavyMetals,

            };

            const response = await submitAssessment(payload);

            setLoading(false);

            setCompleted(true);

            setTimeout(() => {

                setCompleted(false);

                onResult({

                    ...response,

                    temperature,

                    moisture,

                });

            }, 1500);

            return;

        }

        catch (err) {

            console.error(err);

            alert("Assessment Failed.");

        }

        finally {

            // Loading state is controlled after API response.

        }

    };

    return (

        <form
            className="space-y-10"
            onSubmit={(e) => e.preventDefault()}
        >

            <CropSelection
                value={crop}
                onChange={setCrop}
            />

            <SoilParameters
                soilPH={soilPH}
                setSoilPH={setSoilPH}
                organicMatter={organicMatter}
                setOrganicMatter={setOrganicMatter}
                soilTexture={soilTexture}
                setSoilTexture={setSoilTexture}
            />

            <EnvironmentalInputs
                temperature={temperature}
                setTemperature={setTemperature}
                moisture={moisture}
                setMoisture={setMoisture}
            />

            <HeavyMetalInput
                csvFile={csvFile}
                setCsvFile={setCsvFile}
                manualEntries={manualEntries}
                setManualEntries={setManualEntries}
                loading={loading}
                handleSubmit={handleSubmit}
            />

        </form>


    );


}