import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
import StartApp from './startapp';
import i18n from '../i18n';


export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};
    state = {
    	locale: 'es',
    	fetching: true,
    	texts: ''
    }
    componentWillMount(){
    	let locale =  (navigator.language || navigator.languages[0]).split('-')[0] || 'en';
    	//locale ='es';
    	let newLocale = window.location.pathname.slice(1,4).split('/')[0];
    	if (newLocale=== ''){
    		newLocale = locale;
    	}
 		//if the url is different from his locale get that resource bundle
    	//or if we never fetched any bundle then fetch with user locale bundle
    	if (locale!==newLocale  || this.state.texts === '') {
    		this.setState({
    			fetching: true
    		});
    			i18n.loadI18n(newLocale, (texts) => {
    			this.setState( {
    				texts: i18n.getTranslation(),
    				fetching: false,
    				locale: newLocale
    			});
    		});
    	}
    }

    render() {
    	return (
    		this.state.fetching ?
    			<div>Loading...</div>
    		:
    			<div id="app">
    				<Header locale={this.state.locale} />
    				<Router onChange={this.handleRoute}>
    					<StartApp path="/" to={'/' +this.state.locale + '/home'} />
    					<Home path=":locale/home" />
    					<Profile path={'/' +this.state.locale + '/profile'}  user="me" />
    					<Profile path={'/' +this.state.locale + '/profile/:user'}  />
    				</Router>
    			</div>
    	);
    }
}
