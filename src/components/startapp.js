
import { h, Component } from 'preact';
import { route } from 'preact-router';

// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';
//import I18n from 'preact-i18nline/i18n';
import i18n from '../i18n';

//console.log(navigator.language);


export default class StartApp extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};
	componentWillMount(){
	/* 	let locale =  (navigator.language || navigator.languages[0]).split('-')[0] || 'en';
		locale ='es';
		i18n.loadI18n(locale, (texts) => {
			console.log('loaded es translations in start app before redirect');
		}); */
		route(this.props.to, true);
	}
	render() {
		return null;
		/* console.log(window.location.pathname);
		console.log(this.currentUrl);
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path=":locale/profile/" user="me" />
					<Profile path=":locale/profile/:user" />
				</Router>
			</div>
		); */
	}
}
