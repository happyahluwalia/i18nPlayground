import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import i18n from '../../i18n';

export default class Header extends Component {

	componentWillMount(){
		this.state.texts= i18n.getTranslation();
		this.state.locale = this.props.locale;//(navigator.language || navigator.languages[0]).split('-')[0] || 'en';	}
	}
	render() {
		return (
			<header class={style.header}>
				<h1 translate="yes">{this.state.texts.default.preact_app} </h1>
				<nav>
					<Link activeClassName={style.active} href="/">{this.state.texts.default.home_351838cd}</Link>
					<Link activeClassName={style.active} href={'/' +this.props.locale + '/profile'}>{this.state.texts.default.profile}</Link>
					<Link activeClassName={style.active} href={'/' +this.props.locale + '/profile/john'}>{this.state.texts.default.user}</Link>
				</nav>
			</header>
		);
	}
}
