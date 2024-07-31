import {
  InView,
  // useInView,
} from "react-intersection-observer";
import './App.css';

function App() {
  // const { inView, ref, entry } = useInView({
  //   threshold: 1.0,
  // })
  const onClickHandler = (e) => {
    e.target.classList.toggle('move');
  }

  return (
    <InView>
      {({ inView, ref, entry }) => (
        <div className="App">
          <div className="box one" onClick={onClickHandler}>Click me</div>
          <h1>Scroll to see a magic</h1>
          <div className={`box two ${inView ? 'move' : ''}`}>Box two</div>
          <h2 ref={ref}>{`Header inside viewport ${inView}.`}</h2>
        </div>
      )}
    </InView>
  );
}

export default App;
