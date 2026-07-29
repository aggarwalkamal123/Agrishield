export interface ManualMetal {
    metal: string;
    concentration: number;
}

export interface AssessmentData {
    crop: string;

    soilPH: number;

    organicMatter: number;

    soilTexture: string;

    csvFile: File | null;

    manualMetals: ManualMetal[];
}