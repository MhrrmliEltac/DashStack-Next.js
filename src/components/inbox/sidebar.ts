import {
  Email,
  StarBorderOutlined,
  SendOutlined,
  Create,
  WarningOutlined,
  AnnouncementOutlined,
  DeleteOutline,
  SvgIconComponent,
} from "@mui/icons-material";

export interface FolderType {
  id: number;
  icon: SvgIconComponent;
  title: string;
  count: number;
}

export interface LabelType {
  id: number;
  title: string;
  color: string;
}

export const folders: FolderType[] = [
  { id: 1, icon: Email, title: "Inbox", count: 1253 },
  { id: 2, icon: StarBorderOutlined, title: "Starred", count: 2452 },
  { id: 3, icon: SendOutlined, title: "Sent", count: 24532 },
  { id: 4, icon: Create, title: "Draft", count: 8 },
  { id: 5, icon: WarningOutlined, title: "Spam", count: 4 },
  { id: 6, icon: AnnouncementOutlined, title: "Important", count: 18 },
  { id: 7, icon: DeleteOutline, title: "Bin", count: 9 },
];

export const labels: LabelType[] = [
  { id: 1, title: "Primary", color: "#00BFA6" },
  { id: 2, title: "Social", color: "#3D5AFE" },
  { id: 3, title: "Work", color: "#FF6D00" },
  { id: 4, title: "Friends", color: "#BA29FF" },
];
