import { Resend } from "resend";

let resendInstance: Resend | null = null;

export function getResend() {
  if (resendInstance) return resendInstance;

  const apiKey = process.env.RESEND_API_KEY;

  // Validate that the API key is configured
  if (!apiKey) {
    throw new Error(
      "Missing RESEND_API_KEY environment variable. " +
        "Get your API key from https://resend.com/api-keys",
    );
  }

  resendInstance = new Resend(apiKey);
  return resendInstance;
}
