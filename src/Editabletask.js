// EditableTask.js
import React, { useRef } from 'react';
import './App.css'; // Import the external CSS file

const EditableTask = () => {
  const contentEditableRef = useRef();

  const handleInputChange = () => {
    const content = contentEditableRef.current.innerText;
    console.log(content); // Log the content to check if the state is updating correctly
  };

  return (
    <div
      className="list-resolutions"
      ref={contentEditableRef}
      contentEditable="true"
      onInput={handleInputChange}
    >
      Share your goals here!
    </div>
  );
};

export default EditableTask;



