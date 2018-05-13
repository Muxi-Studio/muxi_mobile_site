import { h, render, Component } from 'preact';
import Header from './components/header/header';
import Product from './components/products/products';
import './styles/reset.scss';
import './styles/base.scss';

class App extends Component {	
	render({}, { text }) {
		return (
			<app>
				<Products />
			</app>
		);
	}
}
render(<App/>,document.body);


