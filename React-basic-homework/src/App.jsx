import { Fragment, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    setCount(count - 1);
  };

  const resetsCount = () => {
    setCount(0);
  };
  return (
    <Fragment>
      <button className="minusCount" onClick={minusCount}>
        -
      </button>
      Count : {count}
      <button className="addButton" onClick={addCount}>
        +
      </button>
      <button className="resetButton" onClick={resetsCount}>
        reset
      </button>
    </Fragment>
  );
};

export default App;
