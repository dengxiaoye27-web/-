export interface CommonMessages {
  nav: {
    home: string;
    products: string;
    solutions: string;
    projects: string;
    resources: string;
    about: string;
    contact: string;
    requestQuote: string;
    viewAll: string;
    learnMore: string;
    headerTagline: string;
  };
  footer: {
    productsHeading: string;
    solutionsHeading: string;
    companyHeading: string;
    privacyPolicy: string;
    termsOfUse: string;
    tagline: string;
    manufactured: string;
    rightsReserved: string;
  };
  common: {
    email: string;
    whatsapp: string;
    location: string;
  };
}

export interface HomeMessages {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  trustedPartner: {
    eyebrow: string;
    title: string;
    description: string;
    stats: { value: string; label: string }[];
  };
  coreSolutions: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  featuredProducts: {
    eyebrow: string;
    title: string;
    viewAll: string;
  };
  architecture: {
    eyebrow: string;
    title: string;
    description: string;
    nodes: string[];
    caption: string;
  };
  industries: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  whyWandtung: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string }[];
  };
  globalProjects: {
    eyebrow: string;
    title: string;
    description: string;
    markets: string[];
    viewProjects: string;
  };
  exhibitions: {
    eyebrow: string;
    title: string;
    description: string;
  };
  certifications: {
    eyebrow: string;
    title: string;
  };
  insights: {
    eyebrow: string;
    title: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
  };
}

export interface AboutMessages {
  hero: {
    title: string;
    subtitle: string;
  };
  overview: {
    eyebrow: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    stats: { value: string; label: string }[];
  };
  factory: {
    eyebrow: string;
    title: string;
    paragraph: string;
  };
  qualityControl: {
    eyebrow: string;
    title: string;
    paragraph: string;
  };
  certifications: {
    eyebrow: string;
    title: string;
    caption: string;
  };
  globalMarkets: {
    eyebrow: string;
    title: string;
    paragraph: string;
  };
  engineering: {
    eyebrow: string;
    title: string;
    paragraph: string;
  };
  cta: {
    title: string;
    button: string;
  };
}

export interface SolutionsUIMessages {
  hub: {
    eyebrow: string;
    title: string;
    subtitle: string;
    browseTitle: string;
    viewSolution: string;
  };
  detail: {
    challengeEyebrow: string;
    challengeTitle: string;
    architectureEyebrow: string;
    architectureTitle: string;
    systemEyebrow: string;
    systemTitle: string;
    howEyebrow: string;
    howTitle: string;
    configEyebrow: string;
    configTitle: string;
    advantagesEyebrow: string;
    advantagesTitle: string;
    processEyebrow: string;
    processTitle: string;
    stepLabel: string;
    appsEyebrow: string;
    appsTitle: string;
    faqEyebrow: string;
    faqTitle: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
}

export interface ProductsUIMessages {
  hubTitle: string;
  hubSubtitle: string;
  categoriesEyebrow: string;
  categoriesTitle: string;
  catalogEyebrow: string;
  catalogTitle: string;
  overviewEyebrow: string;
  overviewTitle: string;
  featuresEyebrow: string;
  featuresTitle: string;
  specsEyebrow: string;
  specsTitle: string;
  applicationsEyebrow: string;
  applicationsTitle: string;
  customizationEyebrow: string;
  customizationTitle: string;
  standardsEyebrow: string;
  standardsTitle: string;
  faqEyebrow: string;
  faqTitle: string;
  relatedSolutionsEyebrow: string;
  relatedSolutionsTitle: string;
  relatedProductsEyebrow: string;
  relatedProductsTitle: string;
  categoryComingSoon: string;
}

export interface ProjectsUIMessages {
  hubEyebrow: string;
  hubTitle: string;
  hubSubtitle: string;
  backgroundEyebrow: string;
  backgroundTitle: string;
  challengeEyebrow: string;
  challengeTitle: string;
  requirementsEyebrow: string;
  requirementsTitle: string;
  solutionEyebrow: string;
  solutionTitle: string;
  productsEyebrow: string;
  productsTitle: string;
  configEyebrow: string;
  configTitle: string;
  implementationEyebrow: string;
  implementationTitle: string;
  resultsEyebrow: string;
  resultsTitle: string;
  ctaTitle: string;
  ctaButton: string;
}

export interface ResourcesUIMessages {
  hubEyebrow: string;
  hubTitle: string;
  hubSubtitle: string;
  faqTitle: string;
  ctaTitle: string;
  ctaButton: string;
}

export interface ContactMessages {
  hero: {
    title: string;
    subtitle: string;
  };
  form: {
    eyebrow: string;
    title: string;
    inquiryTypeLabel: string;
    inquiryTypeProduct: string;
    inquiryTypeProject: string;
    name: string;
    company: string;
    country: string;
    email: string;
    whatsapp: string;
    productOfInterest: string;
    selectCategory: string;
    projectType: string;
    projectTypePlaceholder: string;
    quantity: string;
    projectDetailsHeading: string;
    dcCapacity: string;
    dcCapacityPlaceholder: string;
    rackCount: string;
    itLoad: string;
    itLoadPlaceholder: string;
    powerCapacity: string;
    coolingType: string;
    coolingTypePlaceholder: string;
    location: string;
    deliveryDate: string;
    requirements: string;
    requirementsPlaceholder: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    errorMessage: string;
  };
  sidebar: {
    email: string;
    whatsapp: string;
    whatsappCta: string;
    location: string;
  };
}
