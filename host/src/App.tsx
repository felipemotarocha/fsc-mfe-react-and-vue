import { useEffect, useRef } from "react";
import "./App.css";
import helloWorldWrapper from "remote2/helloWorldWrapper";

function App() {
  const divRef = useRef(null);

  useEffect(() => {
    helloWorldWrapper(divRef.current);
  }, []);

  return (
    <>
      <div ref={divRef}></div>
    </>
  );
}

export default App;
