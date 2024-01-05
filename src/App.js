import React, { useRef, useEffect } from 'react';
import domtoimage from 'dom-to-image';
import EditableTask from './Editabletask';

const App = () => {
  const goalboxRef = useRef(null);

  const exportToPNG = async () => {
    const goalboxContainer = goalboxRef.current;

    if (goalboxContainer) {
      try {
        const imgData = await domtoimage.toPng(goalboxContainer);

        // Create a new link element for each export
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'goals.png';
        link.click();
      } catch (error) {
        console.error('Oops, something went wrong!', error);
      }
    }
  };

  useEffect(() => {
    // Define the export function as a method inside the useEffect
    window.exportToPNG = exportToPNG;
  }, []);

  return (
    <>
      <div className='header'>nucleus-gh</div>
      <div className="subheader">
        <span id="content1">Achieve your new year resolutions better.</span>
        <span id="content2">Share your top three aims with your network.</span>
      </div>

      <div className="box-container">
        <div className="content-box1" ref={goalboxRef}>
          <div className="content-box2">
            <p className="text-heading">Here are my top goals for 2024 : </p>
            <div className="content-box3">
              <EditableTask />
            </div>
          </div>
        </div>
      </div>
      <button onClick={exportToPNG} className='download-png'>Export as PNG</button>
    </>
  );
};

export default App;
