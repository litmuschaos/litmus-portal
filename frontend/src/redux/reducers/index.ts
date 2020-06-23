import { History } from "history";
import { combineReducers } from "redux";
import { ChartData, Theme } from "../../models";
import * as chartReducer from "./charts";
import * as themeReducer from "./theme";

export interface RootState {
	theme: Theme;
	chartData: ChartData;
}

export default (history: History) =>
	combineReducers({
		...themeReducer,
		...chartReducer,
	});
