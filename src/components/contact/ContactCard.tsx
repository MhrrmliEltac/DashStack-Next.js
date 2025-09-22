"use client";
import { MemberType } from "@/lib/types/types";
import { theme } from "@/theme/theme";
import { EmailOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const ContactCard = ({
  member,
  index,
}: {
  member: MemberType;
  index: number;
}) => {
  return (
    <Card
      sx={{
        maxWidth: "360px",
        maxHeight: "434px",
        p: 0,
        m: 0,
        opacity: 0,
        borderRadius: "18px",
        animation: `fadeIn 0.4s ease forwards`,
        animationDelay: `${index * 0.06}s`,
      }}
    >
      <CardMedia
        component="img"
        image={member.image ?? "/default-image.png"}
        alt={member.first_name}
        sx={{ height: "276px", width: "100%" }}
      />

      <CardContent
        sx={{
          my: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <Typography variant="h6" fontWeight={700} color="primary">
            {member.first_name} {member.last_name}
          </Typography>
          <Typography
            variant="body1"
            fontWeight={400}
            color={theme.palette.grey[400]}
          >
            {member.email}
          </Typography>
        </Box>
        <Button
          variant="outlined"
          sx={{ height: "40px" }}
          startIcon={
            <EmailOutlined
              fontSize="small"
              htmlColor={theme.palette.grey[900]}
            />
          }
        >
          <Typography
            component={"span"}
            color={theme.palette.grey[900]}
            variant="body1"
            fontWeight={700}
          >
            Message
          </Typography>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
