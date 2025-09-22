"use client"
import { MemberType } from "@/lib/types/types";
import { Card, Avatar, Box, Typography } from "@mui/material";
import React from "react";

interface TeamMemberCardProps {
  member: MemberType;
  index: number;
}

const TeamMemberCard = ({ member, index }: TeamMemberCardProps) => {
  return (
    <Card
      sx={{
        opacity: 0,
        backgroundImage: "url('/team-card-pattern.svg')",
        maxHeight: "290px",
        maxWidth: "300px",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        color: "#fff",
        borderRadius: "18px",
        animation: `fadeIn 0.4s ease forwards`,
        animationDelay: `${index * 0.06}s`,
      }}
    >
      <Avatar
        sx={{
          maxWidth: "110px",
          maxHeight: "110px",
          width: "100%",
          height: "100%",
        }}
        src={member.image}
        alt={member.first_name}
      />
      <Box textAlign="center">
        <Typography variant="h6" color="primary">
          {member.first_name} {member.last_name}
        </Typography>
        <Typography
          variant="body1"
          fontWeight={500}
          color="rgba(32, 34, 36, 0.6)"
        >
          {member.position}
        </Typography>
        <Typography variant="body1" color="primary">
          {member.email}
        </Typography>
      </Box>
    </Card>
  );
};

export default TeamMemberCard;
