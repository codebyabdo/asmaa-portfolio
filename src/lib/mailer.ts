import nodemailer from "nodemailer";
import { Resend } from "resend";

type MailProvider = "resend" | "nodemailer";

type SendMailInput = {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
};

const provider = (process.env.MAIL_PROVIDER || "resend") as MailProvider;

const resend = new Resend(process.env.RESEND_API_KEY);

let transporter: nodemailer.Transporter | null = null;

export function getTransporter() {
  if (transporter) return transporter;

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    throw new Error("EMAIL_USER and EMAIL_PASS are required for Nodemailer.");
  }

  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });

  return transporter;
}

function getFromAddress() {
  if (process.env.EMAIL_FROM) return process.env.EMAIL_FROM;

  if (provider === "nodemailer") {
    return `Asmaa Adel <${process.env.EMAIL_USER || "asmaaadle677@gmail.com"}>`;
  }

  return "Asmaa Adel <onboarding@resend.dev>";
}

export async function sendMail({
  to,
  subject,
  html,
  replyTo,
}: SendMailInput): Promise<void> {
  const from = getFromAddress();

  if (provider === "nodemailer") {
    const transporterInstance = getTransporter();

    await transporterInstance.sendMail({
      from,
      to,
      subject,
      html,
      replyTo,
    });

    return;
  }

  const { error } = await resend.emails.send({
    from,
    to,
    subject,
    html,
    replyTo,
  });

  if (error) {
    const message =
      typeof error === "string"
        ? error
        : (error as { message?: string })?.message || "Failed to send email via Resend.";

    throw new Error(message);
  }
}