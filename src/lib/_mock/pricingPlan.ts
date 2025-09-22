import { PricingPlan } from "../types/types";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: 14.99,
    features: [
      { name: "Free Setup", isActive: true },
      { name: "Bandwidth Limit 10 GB", isActive: true },
      { name: "20 User Connection", isActive: true },
      { name: "Analytics Report", isActive: false },
      { name: "Public API Access", isActive: false },
      { name: "Plugins Integration", isActive: false },
      { name: "Custom Content Management", isActive: false },
    ],
    buttonText: "Get Started",
    trialLink: "Start Your 30 Day Free Trial",
  },
  {
    name: "Standard",
    price: 49.99,
    features: [
      { name: "Free Setup", isActive: true },
      { name: "Bandwidth Limit 10 GB", isActive: true },
      { name: "20 User Connection", isActive: true },
      { name: "Analytics Report", isActive: true },
      { name: "Public API Access", isActive: true },
      { name: "Plugins Integration", isActive: false },
      { name: "Custom Content Management", isActive: false },
    ],
    buttonText: "Get Started",
    trialLink: "Start Your 30 Day Free Trial",
  },
  {
    name: "Premium",
    price: 89.99,
    features: [
      { name: "Free Setup", isActive: true },
      { name: "Bandwidth Limit 10 GB", isActive: true },
      { name: "20 User Connection", isActive: true },
      { name: "Analytics Report", isActive: true },
      { name: "Public API Access", isActive: true },
      { name: "Plugins Integration", isActive: true },
      { name: "Custom Content Management", isActive: true },
    ],
    buttonText: "Get Started",
    trialLink: "Start Your 30 Day Free Trial",
  },
];
