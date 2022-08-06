import { Provider } from "react-redux";
import { store } from "./stores";
import { AppRoutes } from "./layout/Routes";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
