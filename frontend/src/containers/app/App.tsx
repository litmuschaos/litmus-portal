import React, { lazy, Suspense, useEffect } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { Loader } from "../../components";
import { useActions } from "../../redux/actions";
import * as AnalyticsActions from "../../redux/actions/analytics";
import * as GithubActions from "../../redux/actions/github";
import * as VersionActions from "../../redux/actions/versions";
import { history } from "../../redux/configureStore";
import withTheme from "../../theme";
import { useStyles } from "./App-styles";

const HomePage = lazy(() => import("../../pages/HomePage"));
const ExperimentGroupPage = lazy(() =>
	import("../../pages/ExperimentGroupPage")
);
const ExperimentPage = lazy(() => import("../../pages/ExperimentPage"));
const ErrorPage = lazy(() => import("../../pages/ErrorPage"));
const Workflows = lazy(() => import("../../pages/Workflows"));

function Routes() {
	const classes = useStyles();

	return (
		<div className={classes.content}>
			<Switch>
				<Route exact={true} path="/" component={HomePage} />
				<Route exact={true} path="/404" component={ErrorPage} />
				<Route exact={true} path="/workflows" component={Workflows} />
				<Route
					exact={true}
					path="/:chartGroupId"
					component={ExperimentGroupPage}
				/>
				<Route
					exact={true}
					path="/:chartGroupId/:chartId"
					component={ExperimentPage}
				/>
				<Redirect to="/404" />
			</Switch>
		</div>
	);
}

const AppBody = Routes;

function App() {
	const githubActions = useActions(GithubActions);
	const analyticsActions = useActions(AnalyticsActions);
	const versionActions = useActions(VersionActions);
	const classes = useStyles();

	useEffect(() => {
		analyticsActions.loadAnalytics();
		versionActions.loadVersions();
		githubActions.loadStarCount();
		githubActions.loadContributors();
	}, []);

	return (
		<Suspense fallback={<Loader />}>
			<Router history={history}>
				<div className={classes.root}>
					<div className={classes.appFrame}>
						{/* <Routes /> */}
						<div className={classes.routeBody}>
							<AppBody />
						</div>
					</div>
				</div>
			</Router>
		</Suspense>
	);
}

export default withTheme(App);
