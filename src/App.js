import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Alert from './Components/Alert';
import TextForm from './Components/TexForm'; 
import React,{ useState} from 'react'
import { BrowserRouter,Routes,Route, } from 'react-router-dom';

function App() {
const [mode,  setMode] = useState('light');
const [alert, setalert] = useState(null);

const showAlert = (message,type)=>{
  setalert({
      msg : message,
      type: type  
  })
  setTimeout(() => {
    setalert(null)
  }, 1500);
}
  const togglemode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = '#042743'
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.background = 'white'
      showAlert("light mode has been enabled","success")
    }
  }
  return ( 
    <>


<Alert alert={alert} />
<div className="container my-3">
<BrowserRouter>
<Navbar text="TextUtils" mode={mode} togglemode={togglemode} aboutText="About"/>
  <Routes>
    <Route path = "/" element={<TextForm showAlert={showAlert} heading= "Enter the text to analyz below " mode={mode}/>} />
    <Route path="about" element={<About/>}/>
  </Routes>
  
</BrowserRouter>

</div> 
</>
);
}

export default App;
