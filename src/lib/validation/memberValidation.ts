import * as z from "zod";

export const memberSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email address"),
  position: z.string().min(1, "Position is required"),
  phone_number: z.string().min(9, "Phone number is required"),
  gender: z.enum(["Male", "Female"]),
});
