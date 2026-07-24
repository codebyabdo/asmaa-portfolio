"use server";

import { getResend } from "@/lib/resend";
import ContactConfirmationEmail from "@/emails/contact-confirmation";
import ContactOwnerEmail from "@/emails/contact-owner";

export interface ContactFormState {
  success: boolean;
  error: string | null;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContactForm(
  _: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const subject = formData.get("subject")?.toString().trim() || "";
  const message = formData.get("message")?.toString().trim() || "";

  if (!name || !email || !subject || !message) {
    return {
      success: false,
      error: "Please fill in all required fields.",
    };
  }

  if (!isValidEmail(email)) {
    return {
      success: false,
      error: "Please enter a valid email address.",
    };
  }

  try {
    await getResend().batch.send([
      {
        from: process.env.EMAIL_FROM!,
        to: [email],
        subject: "We've received your message",
        react: ContactConfirmationEmail({
          name,
          message,
        }),
      },

      {
        from: process.env.EMAIL_FROM!,
        to: [process.env.CONTACT_EMAIL!],
        replyTo: email,
        subject: `New Portfolio Contact • ${name}`,
        react: ContactOwnerEmail({
          name,
          email,
          subject,
          message,
        }),
      },
    ]);

    return {
      success: true,
      error: null,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}