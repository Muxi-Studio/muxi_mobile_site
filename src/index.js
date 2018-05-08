import { h, render, Component } from 'preact'
// import Header from './components/header/header'
import Products from './components/products/products'
import './styles/reset.scss'
import './styles/base.scss'
/** @jsx h */


class App extends Component {	
	render({}, { text }) {
		return (
			<app>
				<Products />
			</app>
		);
	}
}

render(<App />, document.body);
