"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { SectionHeader } from "@/components/shared/header-section";
import { FEATURED_PROJECT_META } from "@/data/projects";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export function FeaturedProjects() {
  const t = useTranslations("portfolio.featured");

  const projects = t.raw("projects") as {
    id: string;
    title: string;
    description: string;
    category: string;
    image: string;
    year: string;
    accuracy: string;
    languages: string;
  }[];

  const FEATURED_PROJECTS = projects.map((project, index) => ({
    ...project,
    ...FEATURED_PROJECT_META[index],
  }));
  return (
    <section
      id="featured-projects"
      aria-labelledby="featured-projects-heading"
      className="py-28 md:py-40"
    >
      <SectionHeader
        number={t("number")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <div className="space-y-28 md:space-y-40">
        {FEATURED_PROJECTS.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid items-center gap-10 lg:grid-cols-12 lg:gap-24"
          >
            {/* Image */}

            <div
              className={cn(
                "relative group lg:col-span-7",
                idx % 2 !== 0 && "lg:order-2",
              )}
            >
              <div className="relative aspect-video overflow-hidden rounded-[2.5rem] bg-luxury-charcoal">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={idx === 0}
                  loading={idx === 0 ? "eager" : "lazy"}
                  quality={90}
                  sizes="(max-width:768px) 100vw,(max-width:1200px) 70vw,60vw"
                  className="object-cover opacity-60 grayscale transition duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal via-transparent to-transparent opacity-70" />

                <div className="absolute right-5 top-5 flex gap-2 md:right-8 md:top-8">
                  <span className="glass rounded-full border border-white/10 px-3 py-1 text-[8px] font-bold uppercase tracking-widest text-white">
                    {t("confidential")}
                  </span>

                  <span className="glass rounded-full border border-white/10 px-3 py-1 text-[8px] font-bold uppercase tracking-widest text-luxury-gold">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}

            <div className="lg:col-span-5">
              <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-gold">
                {project.category}
              </span>

              <h2
                id={idx === 0 ? "featured-projects-heading" : undefined}
                className="mb-7 font-serif text-4xl leading-tight tracking-tight md:text-6xl"
              >
                {project.title}
              </h2>

              <p className="mb-10 text-lg font-light leading-relaxed text-luxury-charcoal/60">
                {project.description}
              </p>

              <dl className="mb-10 grid grid-cols-2 gap-8 border-b border-luxury-charcoal/5 pb-10">
                <div>
                  <dt className="mb-2 text-[9px] font-bold uppercase tracking-[0.25em] text-luxury-charcoal/30">
                    {t("languages")}
                  </dt>

                  <dd className="font-serif text-lg">{project.languages}</dd>
                </div>

                <div>
                  <dt className="mb-2 text-[9px] font-bold uppercase tracking-[0.25em] text-luxury-charcoal/30">
                    {t("accuracy")}
                  </dt>

                  <dd className="font-serif text-lg text-luxury-gold">
                    {project.accuracy}
                  </dd>
                </div>
              </dl>

              <button
                type="button"
                aria-label={`Read case study for ${project.title}`}
                className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.25em]"
              >
                {t("button")}

                <span className="h-px w-12 bg-luxury-gold transition-all duration-300 group-hover:w-20" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
