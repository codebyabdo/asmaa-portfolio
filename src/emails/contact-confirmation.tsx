import { ContactPayload } from "@/types/contact";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export function ContactConfirmationEmail({
  name,
  message,
}: Pick<ContactPayload, "name" | "message">) {
  return (
    <Html lang="en">
      <Head />
      <Preview>{`We received your message, ${name}`}</Preview>

      <Tailwind>
        <Body
          className="m-0 bg-[#FDFBF7] px-6 py-10"
          style={{
            fontFamily: "Inter, Arial, Helvetica, sans-serif",
          }}
        >
          <Container
            className="mx-auto overflow-hidden rounded-3xl border"
            style={{
              maxWidth: "680px",
              borderColor: "#EFE7D3",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Section
              className="px-12 py-10"
              style={{
                background: "#0A0A0A",
              }}
            >
              <Text
                className="m-0 text-[11px] uppercase tracking-[6px]"
                style={{
                  color: "#D4AF37",
                }}
              >
                ASMAA ADEL
              </Text>

              <Heading
                className="mt-6 mb-0 text-[38px] font-normal leading-tight"
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                }}
              >
                Thank You, {name}
              </Heading>

              <Text
                className="mt-5 mb-0 text-base"
                style={{
                  color: "#BBBBBB",
                }}
              >
                Your message has been received successfully.
              </Text>
            </Section>

            <Section className="px-12 py-10">
              <Heading
                as="h2"
                className="m-0 text-[26px]"
                style={{
                  color: "#0A0A0A",
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                }}
              >
                Next Step
              </Heading>

              <Hr
                className="my-8"
                style={{
                  borderColor: "#EFE7D3",
                }}
              />

              <Text
                className="m-0 text-base leading-8"
                style={{
                  color: "#444444",
                }}
              >
                I&apos;ll review your message and get back to you as soon as
                possible, usually within 24 hours.
              </Text>

              <Section
                className="mt-10 rounded-2xl p-8"
                style={{
                  backgroundColor: "#F8F6F2",
                }}
              >
                <Text
                  className="mt-0 mb-4 text-[11px] uppercase tracking-[3px]"
                  style={{
                    color: "#D4AF37",
                  }}
                >
                  Your Message
                </Text>

                <Text
                  className="m-0 whitespace-pre-wrap text-[15px] leading-8"
                  style={{
                    color: "#444444",
                  }}
                >
                  {message}
                </Text>
              </Section>
            </Section>

            <Section
              className="px-12 py-8"
              style={{
                backgroundColor: "#F8F6F2",
              }}
            >
              <Text
                className="m-0 text-center text-xs"
                style={{
                  color: "#777777",
                }}
              >
                This is an automated confirmation. Please do not reply to this
                email.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ContactConfirmationEmail;