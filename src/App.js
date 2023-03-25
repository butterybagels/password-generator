import './App.css';
import PasswordGeneratorContainerComponent
    from "./components/PasswordGeneratorContainerComponent/PasswordGeneratorContainerComponent";

import GlobalStyles from "./components/styles/Global";

function App() {
  return (
    <div className="App">
        <GlobalStyles />
        <PasswordGeneratorContainerComponent />
    </div>
  );
}

export default App;
