"use server";

import { render } from "@react-email/render";

import { ContactConfirmationEmail } from "@/emails/contact-confirmation";
import { ContactOwnerEmail } from "@/emails/contact-owner";
import { sendMail } from "@/lib/mailer";
import { contactSchema } from "@/validation/contact";

export type ContactFormState = {
  success: boolean;
  message: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
};

const emptyFieldErrors = {
  name: undefined,
  email: undefined,
  subject: undefined,
  message: undefined,
};

function getStringField(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  try {
    const rawData = {
      name: getStringField(formData, "name"),
      email: getStringField(formData, "email"),
      subject: getStringField(formData, "subject"),
      message: getStringField(formData, "message"),
    };

    const parsed = contactSchema.safeParse(rawData);

    if (!parsed.success) {
      const flattened = parsed.error.flatten().fieldErrors;

      return {
        success: false,
        message: "Please fix the highlighted fields.",
        fieldErrors: {
          name: flattened.name?.[0],
          email: flattened.email?.[0],
          subject: flattened.subject?.[0],
          message: flattened.message?.[0],
        },
      };
    }

    const { name, email, subject, message } = parsed.data;

    const ownerEmail = process.env.CONTACT_EMAIL;
    if (!ownerEmail) {
      throw new Error("CONTACT_EMAIL is missing.");
    }

    const ownerHtml = await render(
      ContactOwnerEmail({
        name,
        email,
        subject,
        message,
      }),
    );

    const confirmationHtml = await render(
      ContactConfirmationEmail({
        name,
        message,
      }),
    );

    await Promise.all([
      sendMail({
        to: ownerEmail,
        replyTo: email,
        subject: `New Portfolio Contact • ${subject}`,
        html: ownerHtml,
      }),
      sendMail({
        to: email,
        subject: "We've received your message",
        html: confirmationHtml,
      }),
    ]);

    return {
      success: true,
      message: "Message sent successfully.",
      fieldErrors: emptyFieldErrors,
    };
  } catch (error) {
    console.error("sendContactEmail error:", error);

    return {
      success: false,
      message: "Unable to send message right now. Please try again.",
      fieldErrors: emptyFieldErrors,
    };
  }
}
