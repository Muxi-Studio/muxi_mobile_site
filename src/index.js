import { h, render, Component } from "preact";
import Header from "./components/header/header";
import "./styles/reset.scss";
import "./styles/base.scss";

class App extends Component {
  render({}, { text }) {
    return (
      <app>
        <Header />
      </app>
    );
  }
}
render(<App />, document.body);
