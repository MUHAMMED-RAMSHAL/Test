/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React,{useState,useEffect} from 'react'
import axios from "axios"


function App() {
  const [file,setFile] = useState()
  // eslint-disable-next-line no-unused-vars
  const [image,setImage] = useState()

  // eslint-disable-next-line no-unused-vars
  const handleUpload = (e) =>{
    const formdata = new FormData()
    formdata.append('file',file)
    axios.post('http://localhost:3001/upload',formdata)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }

  useEffect(()=>{
    axios.get('http://localhost:3001/getImage')
    .then(res=>setImage(res.data[1].image))
    .catch(err=>console.log(err))
  },[])
  return (
    <div>
      <input type='file' onChange={e =>setFile(e.target.files[0])}/>
      <button onClick={handleUpload}>Upload</button>
      <br/>
      <img src={`http://localhost:3001/images/`+Images} alt=''/>

    </div>
  )
}

export default App
