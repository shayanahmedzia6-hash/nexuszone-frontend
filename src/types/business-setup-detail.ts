import { type BusinessSetupType } from "./business-setup";

export type BusinessSetupBenefit = {
  title: string;
  description: string;
};

export type BusinessSetupStep = {
  step: string;
  title: string;
  description: string;
};

export type BusinessSetupExtraSection = {
  title: string;
  paragraphs: string[];
};

export type BusinessSetupDetail = {
  type: BusinessSetupType;
  heroTitle: string;
  heroDescription: string[];
  whyChooseTitle: string;
  benefits: BusinessSetupBenefit[];
  idealForTitle: string;
  idealFor: string[];
  processTitle: string;
  process: BusinessSetupStep[];
  extraSection?: BusinessSetupExtraSection;
  whyWorkWithUs: BusinessSetupExtraSection;
  finalCta: { title: string; description: string };
  disclaimer: string;
};
