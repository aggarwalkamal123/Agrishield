"use client";

import { useState, useRef } from "react";

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

    // -----------------------------
    // Form States
    // -----------------------------

    const [crop, setCrop] = useState("");

    const [soilPH, setSoilPH] = useState("");

    const [organicMatter, setOrganicMatter] = useState("");

    const [soilTexture, setSoilTexture] = useState("");

    const [temperature, setTemperature] = useState("");

    const [moisture, setMoisture] = useState("");

    const [csvFile, setCsvFile] = useState<File | null>(null);

    const [manualEntries, setManualEntries] = useState<any[]>([]);

    // -----------------------------
    // Validation Errors
    // -----------------------------

    const [errors, setErrors] = useState<Record<string, string>>({});

    const formRef = useRef<HTMLFormElement>(null);

    // ---------------------------------------------------
    // Validate Form
    // ---------------------------------------------------

    const validateForm = () => {

        const newErrors: Record<string, string> = {};

        if (!crop.trim()) {
            newErrors.crop = "Please select a crop.";
        }

        if (!soilPH.trim()) {
            newErrors.soilPH = "Please enter soil pH.";
        }

        if (!organicMatter.trim()) {
            newErrors.organicMatter = "Please enter organic matter.";
        }

        if (!soilTexture.trim()) {
            newErrors.soilTexture = "Please select soil texture.";
        }

        if (!temperature.trim()) {
            newErrors.temperature = "Please enter temperature.";
        }

        if (!moisture.trim()) {
            newErrors.moisture = "Please enter soil moisture.";
        }

        // -----------------------------
        // Heavy Metal Validation
        // -----------------------------

        const hasCSV = csvFile !== null;

        const hasManual =
            manualEntries.some(
                (item) =>
                    item.metal.trim() !== "" &&
                    item.concentration.trim() !== ""
            );

        if (!hasCSV && !hasManual) {

            newErrors.heavyMetals =
                "Upload a CSV file or add at least one heavy metal.";

        }

        setErrors(newErrors);

        // -----------------------------
        // Scroll to first invalid field
        // -----------------------------

        if (Object.keys(newErrors).length > 0) {

            const firstErrorKey = Object.keys(newErrors)[0];

            const element = document.querySelector(
                `[data-field="${firstErrorKey}"]`
            );

            element?.scrollIntoView({

                behavior: "smooth",

                block: "center",

            });

            return false;

        }

        return true;

    };

    // ---------------------------------------------------
    // Submit
    // ---------------------------------------------------

    const handleSubmit = async () => {

        if (!validateForm()) {

            return;

        }

        try {

            onResult(null);

            setLoading(true);

            let heavyMetals: Record<string, number> = {};

            // CSV

            if (csvFile) {

                heavyMetals = await parseCSV(csvFile);

            }

            // Manual

            else {

                manualEntries.forEach((item) => {

                    if (

                        item.metal !== "" &&
                        item.concentration !== ""

                    ) {

                        heavyMetals[item.metal] =
                            Number(item.concentration);

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

        }

        catch (err) {
            console.error(err);
            alert("Assessment Failed.");
            setLoading(false);
        }

    };

    // ---------------------------------------------------
    // Render
    // ---------------------------------------------------

    return (

        <form

            ref={formRef}

            className="space-y-10"

            onSubmit={(e) => e.preventDefault()}

        >

            <CropSelection

                value={crop}

                onChange={(value) => {

                    setCrop(value);

                    setErrors((prev) => ({
                        ...prev,
                        crop: "",
                    }));

                }}

                error={errors.crop}

            />

            <SoilParameters

                soilPH={soilPH}

                setSoilPH={(value) => {

                    setSoilPH(value);

                    setErrors((prev) => ({
                        ...prev,
                        soilPH: "",
                    }));

                }}

                organicMatter={organicMatter}

                setOrganicMatter={(value) => {

                    setOrganicMatter(value);

                    setErrors((prev) => ({
                        ...prev,
                        organicMatter: "",
                    }));

                }}

                soilTexture={soilTexture}

                setSoilTexture={(value) => {

                    setSoilTexture(value);

                    setErrors((prev) => ({
                        ...prev,
                        soilTexture: "",
                    }));

                }}

                error={errors}

            />

            <EnvironmentalInputs

                temperature={temperature}

                setTemperature={(value) => {

                    setTemperature(value);

                    setErrors((prev) => ({
                        ...prev,
                        temperature: "",
                    }));

                }}

                moisture={moisture}

                setMoisture={(value) => {

                    setMoisture(value);

                    setErrors((prev) => ({
                        ...prev,
                        moisture: "",
                    }));

                }}

                error={errors}

            />

            <HeavyMetalInput
                csvFile={csvFile}
                setCsvFile={(file) => {
                    setCsvFile(file);

                    setErrors((prev) => ({
                        ...prev,
                        heavyMetals: "",
                    }));
                }}
                manualEntries={manualEntries}
                setManualEntries={setManualEntries}
                loading={loading}
                handleSubmit={handleSubmit}
                error={errors}
            />

        </form>

    );

}