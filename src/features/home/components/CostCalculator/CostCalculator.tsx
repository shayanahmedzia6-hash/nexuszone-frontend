"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { DynamicIcon } from "@/components/navigation/nav-icons";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Select } from "@/components/ui/select";
import { calculatorHighlights, calculatorOptions } from "@/data/calculator";
import { CostCalculatorVisual } from "@/features/home/components/CostCalculator/CostCalculatorVisual";
import { routes } from "@/lib/constants/routes";

type FieldKey = keyof typeof calculatorOptions;

const fieldLabels: Record<FieldKey, string> = {
  businessType: "Business Type",
  jurisdiction: "Jurisdiction",
  visaCount: "Number of Visas",
  officeSpace: "Office Space",
};

export function CostCalculator() {
  const router = useRouter();
  const [selections, setSelections] = useState<Record<FieldKey, string>>({
    businessType: "",
    jurisdiction: "",
    visaCount: "",
    officeSpace: "",
  });

  const isComplete = Object.values(selections).every(Boolean);

  const handleChange = (field: FieldKey) => (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelections((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = () => {
    router.push(routes.contact);
  };

  return (
    <SectionWrapper
      id="cost-calculator"
      contained={false}
      className="relative overflow-hidden"
    >
      <CostCalculatorVisual />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium tracking-wide text-primary uppercase">
                Cost Calculator
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-text md:text-4xl">
                Plan Smart. <span className="text-primary">Start Right.</span>
              </h2>
              <p className="max-w-md text-base text-text-muted md:text-lg">
                Estimate your total business setup cost in the UAE in just a
                few clicks. No hidden charges.
              </p>
            </div>

            <ul className="flex flex-col gap-5">
              {calculatorHighlights.map((item) => (
                <li key={item.id} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-glass-border bg-glass/80 text-primary backdrop-blur-sm">
                    <DynamicIcon
                      name={item.icon}
                      className="h-5 w-5"
                      strokeWidth={1.75}
                    />
                  </span>
                  <div>
                    <p className="font-semibold text-text">{item.title}</p>
                    <p className="text-sm text-text-muted">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 rounded-2xl border border-glass-border bg-glass/90 p-5 shadow-lg backdrop-blur-md sm:p-8">
            <div className="flex flex-col gap-5">
              {(Object.keys(calculatorOptions) as FieldKey[]).map((field) => (
                <div key={field} className="flex flex-col gap-1.5">
                  <label
                    htmlFor={field}
                    className="text-sm font-medium text-text"
                  >
                    {fieldLabels[field]}
                  </label>
                  <Select
                    id={field}
                    value={selections[field]}
                    onChange={handleChange(field)}
                  >
                    <option value="">
                      Select {fieldLabels[field]}
                    </option>
                    {calculatorOptions[field].map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <p className="text-sm text-text-muted">Estimated Total Cost</p>
              <p className="mt-1 text-3xl font-bold text-primary">
                {isComplete ? "Get My Quote" : "AED —"}
              </p>
              <p className="mt-1 text-xs text-text-muted">
                Final pricing is confirmed by our team based on your exact
                requirements.
              </p>
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={!isComplete}
                className="mt-4 w-full justify-center gap-2"
              >
                Calculate Now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
