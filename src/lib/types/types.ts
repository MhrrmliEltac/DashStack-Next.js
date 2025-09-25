import React, { ChangeEvent } from "react";

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

export interface ProductType {
  id: string;
  productName: string;
  price: number;
  rating: number;
  ratingCount: number;
  image: string;
  category?: string;
  piece?: number;
  availableColor?: string[];
}

export enum Status {
  Completed = "Completed",
  Processing = "Processing",
  Rejected = "Rejected",
  OnHold = "On Hold",
  InTransit = "In Transit",
}

export interface OrdersType {
  id: string;
  name: string;
  address: string;
  date: string;
  type: string;
  status: Status;
}
export interface FieldsType<T> {
  id: keyof T;
  label: string;
  type?: "text" | "email" | "textarea" | "select" | "tel" | "date";
}

export interface SettingsType {
  site_name: string;
  copy_right: string;
  seo_title: string;
  seo_keyword: string;
  seo_desc: string;
}

export interface MemberType {
  first_name: string;
  last_name: string;
  email: string;
  position: string;
  phone_number: string;
  gender: "Male" | "Female";
  image?: string;
}

export type Feature = {
  name: string;
  isActive: boolean;
};

export type PricingPlan = {
  name: string;
  price: number;
  features: Feature[];
  buttonText: string;
  trialLink: string;
};

export interface PopperElementType {
  id: number;
  title: string;
  icon: React.ReactNode;
}

export interface Props {
  open: boolean;
  anchorEl: null | HTMLElement;
  handleClose: () => void;
}

export interface TodoItem {
  id: string;
  todoTitle: string;
  checked?: boolean;
}

export interface TodoState {
  todo: TodoItem[];
  favoriteTodo: TodoItem[];
  value: string;
  handleAddTodo: (value: string) => void;
  handleAddFavorite: (todo: TodoItem) => void;
  handleRemoveTodo: (id: string) => void;
  handleChecked: (id: string) => void;
  handleValue: (e: ChangeEvent<HTMLInputElement>) => void;
  isFavorite: (id: string) => boolean;
  reset: () => void;
  resetChecked: () => void;
}

export type InvoiceDetailType = {
  id: number;
  description: string;
  quantity: number;
  price: number;
  totalCost: number;
};

export interface InvoiceInfoType {
  id: number;
  invoiceFrom: string;
  invoiceTo: string;
  invoiceDate: string;
  dueDate: string;
}

// reducer state

export type MenuType = "profile" | "notification";

export interface State {
  openProfile: boolean;
  anchorProfile: HTMLElement | null;
  openNotification: boolean;
  anchorNotification: HTMLElement | null;
}

export type Action =
  | { type: "TOGGLE_MENU"; menu: MenuType; anchor: HTMLElement }
  | { type: "CLOSE_MENU"; menu: MenuType };

export enum EmailLabel {
  Primary = "Primary",
  Work = "Work",
  Friends = "Friends",
  Social = "Social",
}

export interface Email {
  id: string;
  sender: string;
  subject: string;
  time: string;
  label: EmailLabel;
}
