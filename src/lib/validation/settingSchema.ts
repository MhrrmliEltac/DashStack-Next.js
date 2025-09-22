import * as z from "zod";

export const settingSchema = z.object({
  site_name: z.string().min(1, "Site name is required"),
  copy_right: z.string().min(1, "Copy right is required"),
  seo_title: z.string().min(1, "SEO title is required"),
  seo_keyword: z.string().min(1, "SEO keyword is required"),
  seo_desc: z
    .string()
    .min(10, "SEO description minimum 10 characters")
    .max(160, "SEO description maximum 160 characters"),
});
