import React from 'react';
import Navbar from './components/bootstrap5/navbar/Navbar.js';
import "./App.css"    
import Uploader2 from './views/fileUploader/Uploader2.js';
import logo from './views/fileUploader/cytobox.png';
const App = () =>{
    return (
        <div className='row'>
        <div className='col-sm-5 mx-auto'>
            <center>
            <img src={logo} alt="no-logo" width={400} height={250}/>
            </center>
        <Uploader2/>
        </div>
        </div>  
    );

}
export default App;