import React from "react";

function App() {
  let curDate = new Date();
  curDate = curDate.getHours();
  let greeting = "";
  const cssInline = {};

  if (curDate >= 1 && curDate < 12) {
    greeting = "Good Morning";
    cssInline.color = "green";
  } else if (curDate >= 12 && curDate < 19) {
    greeting = "Good Afternoon";
    cssInline.color = "orange";
  } else {
    greeting = "Good Night";
    cssInline.color = "black";
  }
  return (
    <>
      <div>
        <h1>
          Hello sir,<span style={cssInline}> {greeting} </span>
        </h1>
      </div>
    </>
  );
}

export default App;