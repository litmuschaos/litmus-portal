import { ThemeAction, ThemeActions } from "../../models";

export function toggleTheme(): ThemeAction {
	return {
		type: ThemeActions.TOGGLE_THEME,
	};
}
