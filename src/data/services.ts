import {
  Globe,
  FileText,
  Monitor,
  PenTool,
  MessageSquare,
  Zap,
} from "lucide-react";

export const SERVICES = [
  {
    title: "Localization",
    desc: "Adapting products, software, and apps to feel native to Arabic-speaking markets.",
    icon: Globe,
    category: "Technical",
    gradient: "from-blue-500/10 to-transparent",
  },
  {
    title: "Document Translation",
    desc: "Precise translation for legal, medical, and corporate documents with absolute privacy.",
    icon: FileText,
    category: "Legal & Corporate",
    gradient: "from-amber-500/10 to-transparent",
  },
  {
    title: "Website Transcreation",
    desc: "Maintaining brand voice while creatively adapting marketing copy for impact.",
    icon: Monitor,
    category: "Marketing",
    gradient: "from-emerald-500/10 to-transparent",
  },
  {
    title: "Subtitle Artistry",
    desc: "Cinematic subtitling and time-synced translation for media and entertainment.",
    icon: PenTool,
    category: "Media",
    gradient: "from-purple-500/10 to-transparent",
  },
  {
    title: "Business Comms",
    desc: "Elite ghostwriting and correspondence management for C-suite professionals.",
    icon: MessageSquare,
    category: "Consulting",
    gradient: "from-rose-500/10 to-transparent",
  },
  {
    title: "Cultural Audits",
    desc: "Reviewing existing content for cultural sensitivity and linguistic accuracy.",
    icon: Zap,
    category: "Quality Assurance",
    gradient: "from-cyan-500/10 to-transparent",
  },
];
