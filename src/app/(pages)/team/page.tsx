import TitleHeader from "@/components/dashboard-heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import TeamMemberCard from "@/components/team/TeamMemberCard";
import { teamMember } from "@/lib/_mock/teamMember";
import { MemberType } from "@/lib/types/types";
import { Grid } from "@mui/material";
import React from "react";

const TeamPage = () => {
  return (
    <DashboardLayout>
      <TitleHeader
        title="Team"
        btnTitle="Add New Member"
        href="/team/add-new-member"
        showBtn
      />

      {/* Team members grid */}
      <Grid container spacing={3} justifyContent="space-between">
        {teamMember &&
          teamMember.map((member: MemberType, index: number) => (
            <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
              {/* Team member Card */}
              <TeamMemberCard member={member} index={index} />
            </Grid>
          ))}
      </Grid>
    </DashboardLayout>
  );
};

export default TeamPage;
