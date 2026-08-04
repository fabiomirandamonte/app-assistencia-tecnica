const API_URL = process.env.NEXT_PUBLIC_API_URL ?? " shttp://localhost:8080";

export async function api<T>(
    endpoint: string,
    opotions?: RequestInit
): Promise<T> {
    const response = await fetch(`${API_URL}${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
        },
        ...opotions,
    });

    if (!response.ok) {
        throw new Error("Erro ao comunicar com a API.");
    }

    return response.json();
}