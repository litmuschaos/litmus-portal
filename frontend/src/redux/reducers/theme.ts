import { Theme, ThemeAction, ThemeActions } from "../../models";
import createReducer from "./createReducer";

const initialState: Theme = {
	isDarkTheme: false,
};

export const theme = createReducer<Theme>(initialState, {
	[ThemeActions.TOGGLE_THEME](state: Theme, action: ThemeAction) {
		return { ...state, isDarkTheme: !state.isDarkTheme };
	},
});
