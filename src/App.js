import React, {Suspense} from "react";
import './App.css';

const Main = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 0.9*1000)).then(
    () => import("./components/main.jsx")
  );
});

function App() {
  return (
    <div className="App">
      <Suspense fallback = {<div className="fallback-loader block-center">
        <header className="fallback-header block-center">
          Loading...
        </header>
        <div className="fallback-loader-bar block-center">
          <div className="fallback-loader-rider"></div>
        </div>
      </div>}>
        <Main/>
      </Suspense>

    </div>
  );
}

export default App;
