import React,{useState} from 'react'
import Education from "./component/Education";
import Navbar from "./component/Navbar";
import Personal from "./component/Personal";
import Resume from "./component/Resume";
import About from './component/About';
import Work from './component/Work';
import Language from './component/Language';
import Project from './component/Project';
import Skills from './component/Skills';
import Generate from './component/Generate';

function App() {
const [step,setStep] = useState(0);

const multiStep = () =>
{
  switch(step)
  {
    case 0:
      return <Personal steps= {Steps}/>
    case 1:
      return <About steps= {Steps}/>
    case 2:
      return <Work steps= {Steps}/>
    case 3:
      return <Education steps= {Steps}/>
    case 4:
        return <Language steps= {Steps}/>
    case 5:
        return <Project steps= {Steps}/>
    case 6:
        return <Skills steps= {Steps}/>
    case 7:
        return <Resume />
  }
}

const Steps =() =>
{
  setStep((prev) => prev+1);
}
  return (
    <>
    <Navbar />
    {multiStep()}
    </>
  );
}

export default App;
