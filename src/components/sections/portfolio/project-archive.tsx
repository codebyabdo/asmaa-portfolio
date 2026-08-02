"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Maximize2 } from "lucide-react";

import { SectionHeader } from "@/components/shared/header-section";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface ArchiveProject {
  id: string;
  title: string;
  category: string;
  languages: string;
  featured?: boolean;
}

export function ProjectArchive() {
  const reduceMotion = useReducedMotion();
  const t = useTranslations("portfolio.archive");

  const categories = t.raw("categories") as string[];

  const allProjects = t.raw("projects") as ArchiveProject[];

  const allCategory = categories[0];

  const [filter, setFilter] = useState(allCategory);

  const filteredProjects =
    filter === allCategory
      ? allProjects
      : allProjects.filter((project) => project.category === filter);

  return (
    <section
      className="py-24 md:py-32 xl:py-40"
      aria-labelledby="archive-heading"
    >
      <div className="mb-20 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          number={t("number")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-full border px-6 py-3 text-[10px] font-bold uppercase tracking-[0.25em] transition-all",
                filter === category
                  ? "border-luxury-gold bg-luxury-gold text-white"
                  : "glass border-luxury-charcoal/5 hover:border-luxury-gold/40",
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          layout={!reduceMotion}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout={!reduceMotion}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 40,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={
                reduceMotion
                  ? {}
                  : {
                      opacity: 0,
                      y: 20,
                    }
              }
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
              className="group"
            >
              <div className="relative mb-7 aspect-[4/3] overflow-hidden rounded-[2.25rem] border border-luxury-charcoal/5 bg-luxury-charcoal/5">
                <div className="absolute inset-x-6 top-6 z-10 flex items-start justify-between">
                  <span className="glass rounded-full bg-white/80 px-3 py-1 text-[8px] font-bold uppercase tracking-[0.25em]">
                    {project.category}
                  </span>

                  <Maximize2
                    size={14}
                    className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="h-px w-12 bg-luxury-gold transition-all duration-500 group-hover:w-24" />
                </div>
              </div>

              <h3 className="mb-3 font-serif text-2xl transition-colors duration-300 group-hover:text-luxury-gold">
                {project.title}
              </h3>

              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-luxury-charcoal/35">
                {project.languages}

                <ArrowRight size={12} />

                {project.category}
              </p>

              {project.featured && (
                <div className="mt-5 inline-flex rounded-full border border-luxury-gold/20 bg-luxury-gold/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.25em] text-luxury-gold">
                  {t("featured")}
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default ProjectArchive;
