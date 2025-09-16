import { Badge } from "@mui/material";

const AppBadge = ({ value, ...sx }: { value: number }) => {
  return (
    <Badge
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        fontSize: "10px",
        background: "rgba(249, 60, 101, 0.6137)",
        borderRadius: "50%",
        width: "18px",
        height: "18px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        ...sx,
      }}
    >
      {value}
    </Badge>
  );
};

export default AppBadge;
