import { Divider } from "@mui/material";

interface LineProps {
  maxwidth?: string | number;
  bgColor: string;
  height: string | number;
  opacity?: number;
  sx?: object;
}

const Line = ({
  maxwidth,
  bgColor,
  height,
  opacity = 0.5,
  ...sx
}: LineProps) => {
  return (
    <Divider
      sx={{
        width: "100%",
        height: height,
        background: bgColor,
        opacity: opacity,
        maxWidth: maxwidth ? maxwidth : "100%",
        ...sx.sx,
      }}
    />
  );
};

export default Line;
