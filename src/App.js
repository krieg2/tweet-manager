import styles from "./App.module.scss";
import SearchContainer from "./components/SearchContainer";
import configureStore from "./redux/store";
import { Provider } from "react-redux";

const store = configureStore();

function App() {
  return (
    <div className={styles.App}>
        <Provider store={store}>
            <SearchContainer/>
        </Provider>
    </div>
  );
}

export default App;
