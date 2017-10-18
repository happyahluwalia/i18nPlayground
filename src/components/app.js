import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';
//import I18n from 'preact-i18nline/i18n';
import i18n from '../i18n';
let locale =  (navigator.language || navigator.languages).split('-')[0] || 'en';
i18n.loadI18n(locale, (texts) => {
	console.log(locale);
});
export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};
    
	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path=":locale/profile/" user="me" />
					<Profile path=":locale/profile/:user" />
				</Router>
			</div>
		);
	}
}
