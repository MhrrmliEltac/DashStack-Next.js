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

export interface ProductCardProps {
  id: string;
  productName: string;
  price: number;
  rating: number;
  ratingCount: number;
  image: string;
}

export enum Status {
  Completed = "Completed",
  Processing = "Processing",
  Rejected = "Rejected",
  OnHold = "On Hold",
  InTransit = "In Transit",
}
