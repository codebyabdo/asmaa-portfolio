import { BeforeAfterTranslation } from "@/components/sections/portfolio/before-after"
import { PortfolioCtaSection } from "@/components/sections/portfolio/cta-section"
import { FeaturedProjects } from "@/components/sections/portfolio/featured-projects"
import { PortfolioHero } from "@/components/sections/portfolio/portfolio-hero"
import { ProjectArchive } from "@/components/sections/portfolio/project-archive"
import { SecureWorkflow } from "@/components/sections/portfolio/secure-workflow"

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">

      {/* Hero Section */}
      <PortfolioHero />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Before/After Translation Experience */}
      <BeforeAfterTranslation />

      {/* Secure Workflow */}
      <SecureWorkflow />

      {/* Project Archive */}
      <ProjectArchive />

      {/* CTA Section */}
      <PortfolioCtaSection />

    </main>
  )
}
