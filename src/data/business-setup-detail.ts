import { type BusinessSetupDetail } from "@/types/business-setup-detail";

/**
 * @deprecated Page copy now lives in
 * `messages/fragments/business-setup-detail.{en,ar}.json`
 * and is rendered via `BusinessSetupDetail` + next-intl.
 * Kept temporarily as an English reference for content parity checks.
 */
export const businessSetupDetails: Record<
  "mainland" | "free-zone" | "offshore",
  BusinessSetupDetail
> = {
  mainland: {
    type: "mainland",
    heroTitle: "Mainland Company Setup",
    heroDescription: [
      "Set up your mainland company in the UAE and build a business with the flexibility to serve customers across the local market. From selecting the right business activity and legal structure to obtaining your trade licence, our team helps simplify the entire setup process.",
      "Whether you are launching a new venture, expanding an existing company, or establishing a UAE presence, we provide practical guidance throughout the incorporation journey.",
    ],
    whyChooseTitle: "Why Choose a Mainland Company?",
    benefits: [
      {
        title: "Access the UAE Local Market",
        description:
          "Operate and provide your products or services to customers across the UAE, subject to the requirements of your chosen business activity.",
      },
      {
        title: "Expand Without Free Zone Boundaries",
        description:
          "A mainland licence provides greater flexibility to conduct business across different Emirates and establish operations where your customers are located.",
      },
      {
        title: "Explore Government & Corporate Opportunities",
        description:
          "A mainland structure can make your business eligible to pursue certain government, semi-government, and corporate contracts, depending on the activity and tender requirements.",
      },
      {
        title: "Choose the Right Business Location",
        description:
          "Select an office or commercial premises that suits your operational needs and business activity, giving you greater flexibility when planning your physical presence.",
      },
      {
        title: "Wide Range of Business Activities",
        description:
          "Choose from a broad selection of commercial, professional, and industrial activities, subject to the applicable licensing requirements.",
      },
      {
        title: "Build for Long-Term Growth",
        description:
          "Create a UAE business structure designed to support future expansion, additional activities, employees, branches, and operational growth as your company develops.",
      },
    ],
    idealForTitle: "Who Can Benefit From Mainland Setup?",
    idealFor: [
      "Entrepreneurs entering the UAE market for the first time",
      "Businesses that need to serve customers across multiple Emirates",
      "Retail, trading, contracting, consultancy, and service-based businesses",
      "Companies looking to establish a physical presence in the UAE",
      "Businesses seeking opportunities with larger corporate or government organisations",
      "International companies planning to expand their operations into the UAE",
    ],
    processTitle: "Our Mainland Company Setup Process",
    process: [
      {
        step: "01",
        title: "Business Consultation",
        description:
          "We understand your business model, objectives, nationality, and preferred activities to help identify a suitable setup structure.",
      },
      {
        step: "02",
        title: "Activity & Structure Selection",
        description:
          "Our team assists you in selecting the appropriate business activity and legal structure based on your intended operations.",
      },
      {
        step: "03",
        title: "Trade Name & Initial Approvals",
        description:
          "We guide you through the required trade name reservation and initial approval procedures with the relevant authority.",
      },
      {
        step: "04",
        title: "Documentation & Licensing",
        description:
          "We coordinate the required documentation, tenancy requirements, approvals, and trade licence application.",
      },
      {
        step: "05",
        title: "Establish Your Business",
        description:
          "Once your licence is issued, we can assist with the next steps required to get your company operational in the UAE.",
      },
    ],
    whyWorkWithUs: {
      title: "Why Work With Us?",
      paragraphs: [
        "Starting a company in the UAE involves more than simply obtaining a licence. The right activity, structure, location, and documentation can make a significant difference to your setup and future operations.",
        "Our team helps you navigate the process with clear communication, practical guidance, and support from initial consultation through company formation.",
      ],
    },
    finalCta: {
      title: "Ready to Set Up Your Mainland Company?",
      description:
        "Take the first step towards establishing your business in the UAE. Speak with our team to discuss your requirements and receive guidance tailored to your business activity and goals.",
    },
    disclaimer:
      "This page provides general information and does not constitute legal, tax, or financial advice. Requirements, ownership rules, approvals, fees, and licensing conditions may vary depending on the Emirate, business activity, legal structure, and other applicable regulations.",
  },

  "free-zone": {
    type: "free-zone",
    heroTitle: "Free Zone Company Setup",
    heroDescription: [
      "Set up your company in one of the UAE's specialised free zones and benefit from a business environment designed for entrepreneurs, startups, international investors, and growing companies.",
      "Free zones offer streamlined company formation, access to specialised infrastructure, and, in many cases, 100% foreign ownership. Our team helps you identify a suitable free zone, business activity, and licensing structure based on your business goals.",
    ],
    whyChooseTitle: "Why Choose a Free Zone Company?",
    benefits: [
      {
        title: "100% Foreign Ownership",
        description:
          "Many UAE free zones allow international investors to own their companies fully without requiring a local shareholder, subject to the applicable regulations.",
      },
      {
        title: "Repatriate Your Profits",
        description:
          "Free-zone businesses can generally repatriate their capital and profits outside the UAE, subject to applicable laws and banking requirements.",
      },
      {
        title: "Streamlined Company Formation",
        description:
          "Free zones are designed to simplify the business setup process, with many authorities offering digital applications, flexible packages, and efficient licensing procedures.",
      },
      {
        title: "Business-Friendly Packages",
        description:
          "Choose from a range of licence and office solutions designed for startups, freelancers, SMEs, and established businesses, depending on the free zone.",
      },
      {
        title: "Purpose-Built Infrastructure",
        description:
          "Many free zones provide access to modern offices, warehouses, logistics facilities, business centres, and other infrastructure tailored to specific industries.",
      },
      {
        title: "Strategic Location",
        description:
          "With free zones located across the UAE, you can select a location that aligns with your industry, logistics requirements, target markets, and operational needs.",
      },
    ],
    idealForTitle: "Who Is Free Zone Setup For?",
    idealFor: [
      "International entrepreneurs seeking full ownership of their UAE business",
      "Startups and SMEs looking for a cost-effective business setup",
      "Import, export, and international trading companies",
      "Consultants, professional service providers, and technology businesses",
      "E-commerce and digital businesses",
      "Companies that primarily serve international or free-zone markets",
      "Businesses looking for specialised industry infrastructure",
    ],
    processTitle: "Our Free Zone Company Setup Process",
    process: [
      {
        step: "01",
        title: "Business Consultation",
        description:
          "We learn about your business model, target market, nationality, and objectives to help identify the most suitable setup options.",
      },
      {
        step: "02",
        title: "Free Zone Selection",
        description:
          "We compare relevant free zones based on your business activity, licence requirements, location, facilities, and budget.",
      },
      {
        step: "03",
        title: "Licence & Package Selection",
        description:
          "Choose the appropriate licence and setup package based on your intended activities and operational requirements.",
      },
      {
        step: "04",
        title: "Application & Documentation",
        description:
          "We assist with preparing and submitting the required documents and coordinate the company registration process with the selected free zone authority.",
      },
      {
        step: "05",
        title: "Licence Issuance",
        description:
          "Once the application and required approvals are completed, your free zone company licence is issued and you can proceed with the next stages of establishing your business.",
      },
    ],
    extraSection: {
      title: "Choose the Right Free Zone for Your Business",
      paragraphs: [
        "The UAE has a wide range of free zones, each designed around different business activities, locations, facilities, and setup requirements.",
        "Choosing the right one is important. The cheapest package is not always the best fit for your business. We help you evaluate your options based on your activity, ownership requirements, office needs, visa requirements, target market, and long-term plans.",
      ],
    },
    whyWorkWithUs: {
      title: "Why Work With Us?",
      paragraphs: [
        "With numerous free zones and different licensing packages available across the UAE, deciding where and how to establish your company can be challenging.",
        "Our team simplifies the process by helping you understand your options, select a suitable setup structure, prepare the required documentation, and complete the company formation process efficiently.",
      ],
    },
    finalCta: {
      title: "Ready to Set Up Your Free Zone Company?",
      description:
        "Start your UAE business with the right free zone and the right structure. Speak with our experts to discuss your business requirements and receive guidance tailored to your activity, budget, and expansion plans.",
    },
    disclaimer:
      "This page provides general information and does not constitute legal, tax, or financial advice. Ownership rules, licensing requirements, fees, visa eligibility, office requirements, and other conditions vary by free zone, business activity, and applicable UAE regulations.",
  },

  offshore: {
    type: "offshore",
    heroTitle: "Offshore Company Setup",
    heroDescription: [
      "An offshore company can provide a flexible corporate structure for international business activities, asset holding, investment structures, and cross-border transactions.",
      "Whether you are looking to establish a holding company, manage international investments, or create a corporate structure outside the UAE domestic market, our team can help you understand the available options and guide you through the setup process.",
    ],
    whyChooseTitle: "Why Choose an Offshore Company?",
    benefits: [
      {
        title: "International Asset Holding",
        description:
          "Use an offshore corporate structure to hold eligible international assets, investments, shares, or other interests under a separate legal entity.",
      },
      {
        title: "No Physical UAE Office Requirement",
        description:
          "Offshore companies generally do not require a traditional physical office in the UAE, making them suitable for businesses that do not need a local operating presence.",
      },
      {
        title: "Flexible Corporate Structuring",
        description:
          "An offshore company can be used as part of an international corporate or investment structure, depending on your objectives and applicable regulations.",
      },
      {
        title: "International Business Activities",
        description:
          "Structure international transactions and business relationships through a company designed primarily for activities outside the UAE domestic market.",
      },
      {
        title: "Separate Legal Entity",
        description:
          "Establish a distinct corporate entity that can help separate qualifying business or investment assets from personal ownership, subject to applicable laws and professional advice.",
      },
      {
        title: "Efficient International Structure",
        description:
          "For suitable businesses and investors, an offshore structure can provide a practical framework for managing cross-border interests and international operations.",
      },
    ],
    idealForTitle: "Who Is Offshore Setup For?",
    idealFor: [
      "International holding companies",
      "Investors holding eligible assets across different jurisdictions",
      "Businesses involved primarily in international trade",
      "Entrepreneurs seeking a corporate structure for cross-border activities",
      "Companies managing international investments or shareholdings",
      "Businesses that do not require a physical operating presence in the UAE",
    ],
    processTitle: "Our Offshore Company Setup Process",
    process: [
      {
        step: "01",
        title: "Understand Your Objectives",
        description:
          "We discuss your intended business activities, ownership structure, target jurisdictions, and reasons for establishing an offshore company.",
      },
      {
        step: "02",
        title: "Structure & Jurisdiction Selection",
        description:
          "Our team helps you identify an appropriate offshore jurisdiction and corporate structure based on your requirements.",
      },
      {
        step: "03",
        title: "Name & Documentation",
        description:
          "We assist with the company name selection and preparation of the required incorporation and identification documents.",
      },
      {
        step: "04",
        title: "Registration & Incorporation",
        description:
          "We coordinate the application and registration process with the relevant authority and help ensure the required documentation is completed correctly.",
      },
      {
        step: "05",
        title: "Corporate Setup",
        description:
          "Once incorporated, we guide you through the relevant post-incorporation requirements and next steps for maintaining your company structure.",
      },
    ],
    extraSection: {
      title: "Is an Offshore Company Right for You?",
      paragraphs: [
        "An offshore company is not designed for every business. If your goal is to actively trade within the UAE domestic market, employ staff locally, or maintain a physical operating presence, a mainland or free-zone structure may be more appropriate.",
        "Our team can assess your objectives and explain the differences between mainland, free-zone, and offshore structures so you can make an informed decision.",
      ],
    },
    whyWorkWithUs: {
      title: "Why Work With Us?",
      paragraphs: [
        "International company formation can involve multiple jurisdictions, documentation requirements, and compliance considerations.",
        "We simplify the process by helping you understand your available options, coordinating the incorporation process, and providing practical guidance based on your business objectives.",
      ],
    },
    finalCta: {
      title: "Ready to Structure Your International Business?",
      description:
        "Discuss your requirements with our experts and explore whether an offshore company is the right structure for your international business or investment objectives.",
    },
    disclaimer:
      "This page provides general information and does not constitute legal, tax, financial, or investment advice. Offshore company requirements, permitted activities, ownership structures, banking options, reporting obligations, and tax treatment vary by jurisdiction and individual circumstances. Professional legal and tax advice should be obtained where appropriate.",
  },
};
