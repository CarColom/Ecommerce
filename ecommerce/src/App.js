import { Provider } from "react-redux";
import store from "./store"

function App() {
  return (
    <Provider store={store}>
    <div className="text-red-600">
     app
    </div>
    </Provider>
  );
}

export default App;
