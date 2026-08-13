import { type BusinessSetupType } from "./business-setup";

export type BusinessSetupBenefit = {
  title: string;
  description: string;
};

export type BusinessSetupDetail = {
  type: BusinessSetupType;
  heroTitle: string;
  heroDescription: string;
  benefits: BusinessSetupBenefit[];
  idealFor: string[];
};
