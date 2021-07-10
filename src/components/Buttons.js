import React from 'react';
import Pdf from "react-to-pdf";

const Buttons = React.forwardRef((props, ref) => {

  return (
    <div className="actions">
      <button onClick={() => window.print()}>Print page</button>

      <a
        className="button"
        href={`data:text/json;charset=utf-8,${JSON.stringify(
          props.data,
          null,
          2
        )}`}
        download="data.json"
      >
        Download Data
      </a>
        
      {/* pdf result depends on screen/browser size */}
      <Pdf targetRef={props.targetRef} filename="uwisc-stats.pdf" scale={0.65}>
        {({ toPdf }) => <button onClick={toPdf}>Download as PDF</button>}
      </Pdf>

    </div>
  );
});

export default Buttons;
