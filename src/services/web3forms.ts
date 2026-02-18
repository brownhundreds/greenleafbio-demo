import { env } from "@/config/env.ts";

export type Web3FormsResult = { success: boolean; message?: string };

export async function submitToWeb3Forms(formData: FormData): Promise<Web3FormsResult> {
    formData.append("access_key", env.web3formsAccessKey);

    const res = await fetch(env.web3formsEndpoint, {
        method: "POST",
        body: formData,
    });

    const data = (await res.json()) as Web3FormsResult;

    // If API fails but doesn’t throw
    if (!res.ok) {
        return { success: false, message: data.message || "Submission failed" };
    }

    return data;
}
