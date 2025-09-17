import React from "react";

export interface NavElement {
  navName: string;
  icon: React.ElementType;
  href: string;
}

export interface SidebarNav {
  admin: NavElement[];
  pages: NavElement[];
  preferences: NavElement[];
}

export interface CampaignBanner {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
}
