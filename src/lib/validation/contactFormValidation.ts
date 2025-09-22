import { z } from "zod";

export const contactFormSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone_number: z.string().min(9, "Phone number is required"),
  gender: z.enum(["Male", "Female"]),
  date_of_birth: z.string().min(1, "Date of birth is required"),
});

// avtomatik type çıxarır
export type ContactFormType = z.infer<typeof contactFormSchema>;
