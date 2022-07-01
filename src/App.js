import User from "./component/User";
import Posts from "./component/Posts";
import Comments from "./component/Comments";
import Homepage from "./component/Homepage";
import Popup from "./component/Popup";
import { Link } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import './sass/style.scss'

function App() {
  return (
    <BrowserRouter>
      <Link to='/'>Back to homepage</Link>
      <Route exact path="/">{<Homepage />}</Route>
      <Route exact path="/User">{<User />}</Route>
      <Route exact path="/Posts">{<Posts />}</Route>
      <Route exact path="/Comments">{<Comments />}</Route>
      <Route exact path="/Popup">{<Popup />}</Route>
    </BrowserRouter>
  )
}

export default App;
