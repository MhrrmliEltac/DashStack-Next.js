import { Card, CardHeader, Box, Typography } from "@mui/material";
import FeaturedProductCardItem from "./FeaturedProductCardItem";

const FeaturedProductCard = () => {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        width: "100%",
        height: "365px",
        p: "24px !important",
      }}
    >
      <CardHeader
        sx={{ p: 0 }}
        title={
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h3" color="primary">
              Featured Product
            </Typography>
          </Box>
        }
      />
      <FeaturedProductCardItem />
    </Card>
  );
};

export default FeaturedProductCard;
