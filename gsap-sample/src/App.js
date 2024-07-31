import './App.css';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function App() {
  const container = useRef();
  const separateContainer = useRef();
  const [startAnimation, setStartAnimation] = useState(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      if (startAnimation)
        gsap.to('.box', {
          x: 360,
          duration: 5,
          rotate: 360,
        });
    },
    {
      scope: container,
      dependencies: [startAnimation],
      revertOnUpdate: true,
    }
  );

  useGSAP(
    () => {
      if (startAnimation)
        gsap.to('.box', {
          y: 360,
          duration: 2,
          rotate: -360,
        });
    },
    {
      scope: separateContainer,
      dependencies: [startAnimation],
      revertOnUpdate: true,
    }
  );
  return (
    <>
      <div className="App" ref={container}>
        <input className="buttonStart" type="button" onClick={() => setStartAnimation(!startAnimation)} value="Click me to see action!"/>
        <div className="box one">Box One</div>
      </div>
      <div ref={separateContainer} className="separate-container">
        <div className="box two">Box two</div>
        <div className="box three">Box three</div>
      </div>
    </>
  );
}

export default App;
