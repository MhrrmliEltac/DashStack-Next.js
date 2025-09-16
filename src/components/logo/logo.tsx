import { Typography } from "@mui/material";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="w-full flex justify-center items-center">
      <Typography component="span" variant="h4" color="secondary">
        Dash
        <Typography component="span" variant="h4" color="primary">
          Stack
        </Typography>
      </Typography>
    </Link>
  );
};

export default Logo;
