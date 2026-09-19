import { useState } from "react";

const Test = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <>
      <h3>hello this is first num {value}</h3>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        click to change
      </button>
    </>
  );
};

export default Test;
