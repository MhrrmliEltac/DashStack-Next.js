import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type MUIIcon = OverridableComponent<SvgIconTypeMap<{}, "svg">>;

export interface NavElement {
  navName: string;
  icon: MUIIcon;
  href: string;
}

export interface SidebarNav {
  admin: NavElement[];
  pages: NavElement[];
  preferences: NavElement[];
}
