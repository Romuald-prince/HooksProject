import React, { useReducer } from "react";
import "./App.css";
import ClassCounter from "./component/ClassCounter";
import ClassCounterOne from "./component/ClassCounterOne";
import ClassMouse from "./component/ClassMouse";
import EffectCounterOne from "./component/EffectCounterOne";
import HookCounter from "./component/HookCounter";
import HookCounterFour from "./component/HookCounterFour";
import HookCounterThree from "./component/HookCounterThree";
import HookCounterTwo from "./component/HookCounterTwo";
import HookMouse from "./component/HookMouse";
import MouseContainer from "./component/MouseContainer";
import IntervalClassCounter from "./component/IntervalClassCounter";
import IntervalHookCounter from "./component/IntervalHookCounter";
import DataFetching from "./component/DataFetching";
import ReducerHook from "./component/ReducerHook";
import ReducerHookTwo from "./component/ReducerCounterTwo";
import ReducerHookThree from "./component/ReducerHookThree";
import ComponentA from "./component/ComponentA";
import ComponentB from "./component/ComponentB";
import ComponentC from "./component/ComponentC";
import DataFetchingOne from "./component/DataFetchingOne";
import DataFetchingtwo from "./component/DataFetchingtwo";
import ParentComponent from "./component/ParentComponent";
import FocusInput from "./component/FocusInput";
import ClassTimer from "./component/ClassTimer";
import HookTimer from "./component/HookTimer";
import CustomHook from "./component/CustomHook";
import CustomHookTwo from "./component/CustomHookTwo";
import UserForm from "./component/UserForm";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        <UserForm />
        <CustomHook />
        <CustomHookTwo />
        <FocusInput />
        <ClassTimer />
        <HookTimer />
        <ParentComponent />
        <DataFetchingtwo />
        <DataFetchingOne />
        count = {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
        <ReducerHookThree />
        <ReducerHookTwo />
        <ReducerHook />
        <DataFetching />
        <IntervalHookCounter />
        <IntervalClassCounter />
        <MouseContainer />
        <HookMouse />
        <ClassMouse />
        <EffectCounterOne />
        <ClassCounterOne />
        <HookCounterFour />
        <HookCounterThree />
        <HookCounterTwo />
        <HookCounter />
        <ClassCounter />
      </div>
    </CountContext.Provider>
  );
}

export default App;
