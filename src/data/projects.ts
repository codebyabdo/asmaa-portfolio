import { ComparisonData, FeatureProject } from "@/types/project";
import { CheckCircle2, Shield, Sparkles, Zap } from "lucide-react";

export const CATEGORIES = [
  "All Work",
  "Legal",
  "Digital / SaaS",
  "Marketing",
  "Medical",
  "Creative",
];

export const FEATURED_PROJECTS: FeatureProject[] = [
  {
    id: "vodafone-global",
    title: "Global Campaign Localization",
    client: "Vodafone Group",
    category: "Marketing",
    year: "2023",
    accuracy: "99.9%",
    languages: "EN → AR (Gulf/Egyptian)",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200",
    description:
      "Transcreating a multi-platform digital campaign to resonate with diverse Arabic-speaking markets while maintaining tech-forward brand identity.",
  },
  {
    id: "legal-framework",
    title: "International Legal Protocol",
    client: "Confidential Law Firm",
    category: "Legal",
    year: "2024",
    accuracy: "100%",
    languages: "AR → EN (US/UK)",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
    description:
      "Precision-critical translation of cross-border governance documents, requiring deep expertise in Sharia and Common Law terminology.",
  },
];

export const COMPARISON_DATA: ComparisonData[] = [
  {
    title: "Marketing Nuance",
    original:
      "Our solution is the cutting-edge standard for modern enterprises.",
    localized: "حلولنا تُرسي معايير الريادة للمؤسسات العصرية باحترافية عالمية.",
    reasoning:
      "Substituted 'cutting-edge' with 'leadership standards' (معايير الريادة) to better align with Middle Eastern business aspirations of prestige and dominance.",
    tag: "Transcreation",
  },
  {
    title: "Legal Precision",
    original:
      "The consultant shall be liable for any direct damages arising from breach.",
    localized:
      "يتحمل الاستشاري المسؤولية عن أي أضرار مباشرة تنشأ عن الإخلال بالعقد.",
    reasoning:
      "Ensured the use of 'يتحمل المسؤولية' (bears responsibility) which is the standard judicial phrase in Arabic civil codes for liability.",
    tag: "Legal",
  },
];

export const Quantitative = [
  { label: "Accuracy", value: "99.9%", icon: CheckCircle2 },
  { label: "Market Growth", value: "+42%", icon: Zap },
  { label: "Confidentiality", value: "100%", icon: Shield },
  { label: "On-Time Delivery", value: "100%", icon: Sparkles },
];
