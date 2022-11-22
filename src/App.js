import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import "./App.css"
import NavbarComponent from "./components/NavbarComponent"
import News from "./components/News"
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <BrowserRouter>
		  <NavbarComponent />
			<Switch>
				<Route exact path="/">
					<News />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
			</Switch>
    </BrowserRouter>
  );
}

export default App;

/* Dynamic Routing
		- Params in the path (Params are variables in the URL)
		- Should start with :
*/
