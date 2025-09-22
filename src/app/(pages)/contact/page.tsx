import ContactCard from "@/components/contact/ContactCard";
import TitleHeader from "@/components/dashboard-heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { teamMember } from "@/lib/_mock/teamMember";
import { MemberType } from "@/lib/types/types";
import { Grid } from "@mui/material";
import React from "react";

const ContactPage = () => {
  return (
    <DashboardLayout>
      <TitleHeader
        title="Contact"
        btnTitle="Add New Contact"
        href="/contact/add-new-contact"
        showBtn
      />

      <Grid container spacing={3}>
        {teamMember.map((member: MemberType, index: number) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index} sx={{}}>
            <ContactCard member={member} index={index} />
          </Grid>
        ))}
      </Grid>
    </DashboardLayout>
  );
};

export default ContactPage;
