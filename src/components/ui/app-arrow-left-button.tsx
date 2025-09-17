import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const LeftArrowButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <IconButton
      sx={{
        position: "absolute",
        left: 20,
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "#f4f4f4",
        "&:hover": {
          backgroundColor: "#e0e0e0",
        },
      }}
      onClick={onClick}
    >
      <ArrowBackIosNewIcon fontSize="small" />
    </IconButton>
  );
};

export default LeftArrowButton;
