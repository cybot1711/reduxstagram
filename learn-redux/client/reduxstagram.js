// let's go!
import React from 'react'
import { render } from 'react-dom'

import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

//import router
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import  { history, store } from './store'

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App} >
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path="/view/:postId" component={Single}></Route>
			</Route>
		</Router>
	</Provider>
)

//import css
import css from './styles/style.styl'
const element = document.getElementById('root')
render(
	router,
	element
)

