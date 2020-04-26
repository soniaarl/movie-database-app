import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { APP_FOLDER_NAME } from '../globals/variables';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import Favourites from '../components/Favourites';
import MoviePage from '../components/MoviePage';
import Main from '../components/Main';

const AppRouter = () => (
	<Router basename={APP_FOLDER_NAME}>
			<Header />
			<Switch>
				<Route path={'/'} exact><Home /></Route>
				<Route path={'/favourites'} exact><Favourites /></Route>
				<Route path={'/about'}><About /></Route>
				<Route path={'/movie/:movieId'}><MoviePage /></Route>
			</Switch>
			<Main/>
			<Footer />
	</Router>
);

export default AppRouter;