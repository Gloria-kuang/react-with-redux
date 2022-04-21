import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const AC = bindActionCreators(actionCreators, dispatch);

  console.log(AC);
  return <div className="App"></div>;
}

export default App;
