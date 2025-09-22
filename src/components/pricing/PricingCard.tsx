import { formatPrice } from "@/lib/helpers/formatPrice";
import { Feature, PricingPlan } from "@/lib/types/types";
import { theme } from "@/theme/theme";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Line from "@/components/ui/app-line";
import Link from "next/link";

type Props = {
  plan: PricingPlan;
};

const PricingCard = ({ plan }: Props) => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        backgroundImage: "url('/team-card-pattern.svg')",
        maxHeight: "848px",
        maxWidth: "350px",
        width: "100%",
        flex: "1 1 300px",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            mb: "40px",
          }}
        >
          <Typography
            component="span"
            variant="h4"
            fontSize={22}
            color="primary"
          >
            {plan.name}
          </Typography>
          <Typography
            component="span"
            variant="h6"
            fontWeight={400}
            color="primary"
            sx={{ opacity: 0.8 }}
          >
            Monthly Charge
          </Typography>
          <Typography
            component="span"
            variant="h1"
            fontSize={46}
            fontWeight={800}
            color="secondary"
          >
            {formatPrice(plan.price)}
          </Typography>
        </Box>

        <Line bgColor="#E0E0E0" height="2px" sx={{ my: "24px" }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "29px",
            my: "40px",
          }}
        >
          {plan.features.map((feature: Feature, index: number) => (
            <Typography
              key={index}
              variant="h5"
              color={feature.isActive ? "primary" : theme.palette.grey[400]}
            >
              {feature.name}
            </Typography>
          ))}
        </Box>

        <Line bgColor="#E0E0E0" height="2px" sx={{ my: "24px" }} />

        <Box
          sx={{
            mt: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            sx={{
              py: "19px",
              px: "47px",
              borderRadius: "30px",
              border: "2px solid",
              "&:hover": {
                backgroundColor: "secondary.main",
                color: "white",
              },
            }}
          >
            <Typography component="span" variant="h5" fontWeight={700}>
              Get Started
            </Typography>
          </Button>
          <Link href={"#"} className="mt-[24px]">
            <Typography
              component="span"
              variant="h5"
              color="primary"
              textAlign="center"
              sx={{ textDecoration: "underline" }}
            >
              {plan.trialLink}
            </Typography>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
