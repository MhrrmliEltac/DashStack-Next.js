import { theme } from "@/theme/theme";
import { Status } from "../types/types";

export const STATUS_STYLES: Record<Status, { bgColor: string; color: string }> =
  {
    [Status.Completed]: {
      bgColor: theme.palette.success.main,
      color: theme.palette.success.contrastText,
    },
    [Status.Processing]: {
      bgColor: theme.palette.info.main,
      color: theme.palette.info.contrastText,
    },
    [Status.Rejected]: {
      bgColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
    },
    [Status.OnHold]: {
      bgColor: theme.palette.warning.main,
      color: theme.palette.warning.contrastText,
    },
    [Status.InTransit]: {
      bgColor: "rgba(186, 41, 255, 0.2)",
      color: "#BA29FF",
    },
  };
