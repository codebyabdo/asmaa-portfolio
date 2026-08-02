import { ReactNode } from "react";
import { UrlObject } from "url";

export interface HeroElementProp {
  subtitle: string;
  title: ReactNode;
  description: string;
  mainButton: {
    text: string;
    link: string | UrlObject;
  };
  secondaryButton?: {
    text: string;
    link: string | UrlObject;
  };
}