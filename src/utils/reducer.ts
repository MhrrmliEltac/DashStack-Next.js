import { State, Action } from "@/lib/types/types";

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "TOGGLE_MENU":
      if (action.menu === "profile") {
        return {
          ...state,
          openProfile: !state.openProfile,
          anchorProfile: action.anchor,
          openNotification: false,
        };
      }
      if (action.menu === "notification") {
        return {
          ...state,
          openNotification: !state.openNotification,
          anchorNotification: action.anchor,
          openProfile: false,
        };
      }
      return state;

    case "CLOSE_MENU":
      return {
        ...state,
        ...(action.menu === "profile"
          ? { openProfile: false }
          : { openNotification: false }),
      };

    default:
      return state;
  }
}
