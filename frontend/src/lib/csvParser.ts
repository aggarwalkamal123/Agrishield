export async function parseCSV(file: File): Promise<Record<string, number>> {

    const text = await file.text();

    const lines = text.split(/\r?\n/);

    const metals: Record<string, number> = {};

    for (let i = 1; i < lines.length; i++) {

        if (!lines[i].trim()) continue;

        const [metal, concentration] = lines[i].split(",");

        if (metal && concentration) {

            metals[metal.trim()] = Number(concentration);

        }

    }

    return metals;

}