"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { Send } from "lucide-react";

import MagneticButton from "@/components/ui/MagneticButton";
import {
  sendContactEmail,
  type ContactFormState,
} from "@/actions/send-contact-email";

const initialState: ContactFormState = {
  success: false,
  message: "",
  fieldErrors: {
    name: undefined,
    email: undefined,
    subject: undefined,
    message: undefined,
  },
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <MagneticButton
      type="submit"
      className="w-full"
      disabled={pending}
    >
      <span className="flex items-center justify-center gap-3">
        {pending ? "Sending..." : "Send Message"}
        <Send size={14} />
      </span>
    </MagneticButton>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendContactEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  const inputBase =
    "w-full bg-transparent border-b pb-4 outline-none transition-colors font-light placeholder:text-luxury-charcoal/25 focus:border-luxury-gold";

  const inputError = "border-red-500";
  const inputNormal = "border-luxury-charcoal/10";

  return (
    <div className="glass rounded-[3rem] border border-luxury-charcoal/5 p-12 shadow-2xl md:p-16">
      <h3 className="mb-12 font-serif text-3xl italic">Send a Message</h3>

      <form ref={formRef} action={formAction} className="space-y-10" noValidate>
        <div className="space-y-2">
          <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-charcoal/65">
            Full Name
          </label>
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Enter your name"
            aria-invalid={!!state.fieldErrors?.name}
            className={`${inputBase} ${
              state.fieldErrors?.name ? inputError : inputNormal
            }`}
          />
          {state.fieldErrors?.name ? (
            <p className="text-sm text-red-500">{state.fieldErrors.name}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-charcoal/65">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="hello@example.com"
            aria-invalid={!!state.fieldErrors?.email}
            className={`${inputBase} ${
              state.fieldErrors?.email ? inputError : inputNormal
            }`}
          />
          {state.fieldErrors?.email ? (
            <p className="text-sm text-red-500">{state.fieldErrors.email}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-charcoal/65">
            Subject
          </label>
          <input
            name="subject"
            type="text"
            placeholder="Project inquiry"
            aria-invalid={!!state.fieldErrors?.subject}
            className={`${inputBase} ${
              state.fieldErrors?.subject ? inputError : inputNormal
            }`}
          />
          {state.fieldErrors?.subject ? (
            <p className="text-sm text-red-500">{state.fieldErrors.subject}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-charcoal/65">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell me about your project..."
            aria-invalid={!!state.fieldErrors?.message}
            className={`${inputBase} resize-none ${
              state.fieldErrors?.message ? inputError : inputNormal
            }`}
          />
          {state.fieldErrors?.message ? (
            <p className="text-sm text-red-500">{state.fieldErrors.message}</p>
          ) : null}
        </div>

        <SubmitButton />

        {state.message ? (
          <p
            className={`text-sm font-medium ${
              state.success ? "text-luxury-gold" : "text-red-500"
            }`}
          >
            {state.message}
          </p>
        ) : null}
      </form>
    </div>
  );
}