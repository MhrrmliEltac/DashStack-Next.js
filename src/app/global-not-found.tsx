import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import type { Metadata } from "next";
import RouterLink from "@/components/ui/app-router-link";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={nunitoSans.className}>
      <body>
        <Box
          sx={{
            backgroundColor: "#4880FF",
            height: "100vh",
            width: "100%",
            p: 0,
            m: 0,
            backgroundImage: "url(/main-bg.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              maxWidth: "630px",
              width: "100%",
              maxHeight: "735.36px",
              height: "100%",
              borderRadius: "10px",
              my: "20px",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
                flexDirection: "column",
                py: "102px",
                height: "80%",
                width: "100%",
              }}
            >
              <Image
                src="/404.svg"
                alt="not-found"
                width={390}
                height={300}
                priority={false}
              />
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <Typography
                  variant="h1"
                  color="#202224"
                  fontSize={25}
                  fontWeight={700}
                >
                  Looks like you’ve got lost….
                </Typography>
                <RouterLink href="/dashboard">Back to Dashboard</RouterLink>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </body>
    </html>
  );
}
