
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Resume from './Resume';
const Generate = () => {
    const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <Resume ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
  };
export default Generate

