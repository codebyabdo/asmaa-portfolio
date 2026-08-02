import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }

  return {
    locale,

    messages: {
      navigation: (await import(`../../messages/${locale}/navigation.json`))
        .default,

      home: (await import(`../../messages/${locale}/home.json`)).default,

      about: (await import(`../../messages/${locale}/about.json`)).default,

      services: (await import(`../../messages/${locale}/services.json`))
        .default,

      portfolio: (await import(`../../messages/${locale}/portfolio.json`))
        .default,

      caseStudies: (await import(`../../messages/${locale}/caseStudies.json`))
        .default,

      experience: (await import(`../../messages/${locale}/experience.json`))
        .default,

      testimonials: (await import(`../../messages/${locale}/testimonials.json`))
        .default,

      contact: (await import(`../../messages/${locale}/contact.json`)).default,

      metadata: (await import(`../../messages/${locale}/metadata.json`))
        .default,
    },
  };
});
