'use client';
import { Home } from "./Home";
import store from "./store";
import { Provider } from "react-redux";

export default function App() {
    
  return (
    <Provider store={store}>
      <nav></nav>
      <Home />
    </Provider>
  )
}
