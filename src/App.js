import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import TextForm from './Components/TexForm'; 

function App() {
  return ( 
    <>
<Navbar text="TextUtils"/>
<div className="container my-3">
<TextForm  heading="Enter the text to analyz"/>

</div>
{/* <About /> */}

</>
  );
}

export default App;
