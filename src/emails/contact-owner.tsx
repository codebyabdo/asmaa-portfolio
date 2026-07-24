import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface ContactOwnerEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactOwnerEmail({
  name,
  email,
  subject,
  message,
}: ContactOwnerEmailProps) {
  return (
    <Html lang="en">
      <Head />

      <Preview>{`New project inquiry from ${name}`}</Preview>

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
            {/* Header */}

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
                New Project Inquiry
              </Heading>

              <Text
                className="mt-5 mb-0 text-base"
                style={{
                  color: "#BBBBBB",
                }}
              >
                A new contact request has been submitted through the website.
              </Text>
            </Section>

            {/* Contact Information */}

            <Section className="px-12 py-10">
              <Heading
                as="h2"
                className="m-0 text-[26px]"
                style={{
                  color: "#0A0A0A",
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                }}
              >
                Contact Details
              </Heading>

              <Hr
                className="my-8"
                style={{
                  borderColor: "#EFE7D3",
                }}
              />

              <Info label="Full Name" value={name} />

              <Info label="Email Address" value={email} />

              <Info label="Subject" value={subject} />

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
                  Message
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

            {/* Footer */}

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
                This message was automatically generated from the contact form
                on the Asmaa Adel portfolio website.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

interface InfoProps {
  label: string;
  value: string;
}

function Info({ label, value }: InfoProps) {
  return (
    <Section className="mb-6">
      <Text
        className="mb-2 text-[11px] uppercase tracking-[3px]"
        style={{
          color: "#D4AF37",
        }}
      >
        {label}
      </Text>

      <Text
        className="m-0 text-base"
        style={{
          color: "#111111",
        }}
      >
        {value}
      </Text>
    </Section>
  );
}

export default ContactOwnerEmail;
