import React, { Component } from 'react';
import 'App.css';
import mainRoutes from 'routes/mainRoutes'

import { Switch, Route, Redirect } from "react-router-dom";

import Header from 'components/Header/Header'
import Menu from 'components/Menu/Menu'
import { getRole, setRole } from 'utils/role'

const swithcRoutes = (
	<Switch>
		{mainRoutes.map((route, key) => {
			if (route.redirect)
				return <Redirect from={route.path} to={route.to} key={key} />
			else if (route.role && route.role !== getRole())
				return <Redirect from={route.path} to="/" key={key} />
			return <Route path={route.path} component={route.component} key={key} />
		})}
	</Switch>
)

class App extends Component {
	componentDidMount() {
		if (getRole() === null) {
			setRole('user')
		}
	}
	render() {
		return (
			<div className="App">
				<Header />
				<Menu routes={mainRoutes} />
				{swithcRoutes}
			</div>
		);
	}
}

export default App;
