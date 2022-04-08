
import React from 'react';
import axios from 'axios';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';

const Uploader2 = () =>{
    const path = React.useState({
        removeUrl: 'http://ej2.syncfusion.com/services/api/uploadbox/Remove',
        saveUrl: 'http://ej2.syncfusion.com/services/api/uploadbox/Save'
      });
      const [file,setFile] = React.useState();
      const ref = React.useRef();
      React.useEffect(()=>{
          console.log(ref.current)
        if(!file)setFile(ref.current)
      },[ref,setFile])

      const submitHandler=(e)=>{
          e.preventDefault();
          
        const formData = new FormData()
        // formData.append('myFile', file.selectedFiles[0])
        //   console.log(file.selectedFiles[0])
        // const data = new FormData() 
        // console.log(file.selectedFiles[0].name)
        // data.append('file', file.selectedFiles);
        const config = {
            headers:{
                "Content-Type": "multipart/form-data"
            }
        }
        formData.append('myFile', file.selectedFiles[0].rawFile)
        console.log(file.selectedFiles[0].rawFile)
        axios.post("http://localhost:4565/upload", formData).then(res => { 
        // then print response status
        console.log(res.statusText)
    });
}   
    
    return (
    <div className='card bg-light shadow-sm jumbotron-sm p-4'>
        <UploaderComponent ref= {ref} name="file" asyncSettings = {path} minFileSize = {1} maxFileSize= {28400000}
        />
              <ButtonComponent isPrimary={true} onClick={submitHandler}>Submit</ButtonComponent>
    </div>
    
    )
}

export default Uploader2;
