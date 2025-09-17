import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const RightArrowButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <IconButton
      sx={{
        position: "absolute",
        right: 20,
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "#f4f4f4",
        "&:hover": {
          backgroundColor: "#e0e0e0",
        },
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  );
};

export default RightArrowButton;
