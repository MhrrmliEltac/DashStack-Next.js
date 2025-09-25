import { theme } from "@/theme/theme";
import { EmailLabel, Status } from "../types/types";

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

export const LABEL_STYLES: Record<
  EmailLabel,
  { bgColor: string; color: string }
> = {
  [EmailLabel.Primary]: {
    bgColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  },
  [EmailLabel.Friends]: {
    bgColor: "rgba(186, 41, 255, 0.2)",
    color: "#BA29FF",
  },
  [EmailLabel.Social]: {
    bgColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  [EmailLabel.Work]: {
    bgColor: theme.palette.warning.main,
    color: theme.palette.warning.contrastText,
  },
};
