import React, { useState } from 'react'
import Childcardtm from './Childcardtm'
import "./tmstyle.css"

export default function Parentcardtm() {
    let [data,setData] = useState([])

    let [idnum,setIdnum] = useState ("")
    let [title,setTitle] = useState ("")
    let [discription,setDiscription] = useState ("")
    let [priority,setPriority] = useState ("")
    let [status,setStatus] = useState ("")

    const [editdata,setEditdata] = useState(null)

    let handleSubmit = (e) => {
        e.preventDefault ()
        let alldata = {idnum,title,discription,priority,status}
        if (editdata != null) {
          let updateData = [...data]
          updateData[editdata] = alldata
          setData(updateData)
          setEditdata(null)
        } else {
        setData ([...data,alldata])
      }
      setIdnum("")
      setTitle("")
      setDiscription("")
      setPriority("")
      setStatus("")
    }
    let handleDelete = (i) => {
      let dataDelete = data;
      dataDelete.splice (i,1);
      setData([...dataDelete]);
    }
  let handleEdit = (i) => {
      let fetchOlddata = data[i];
      setIdnum(fetchOlddata.idnum);
      setTitle(fetchOlddata.title);
      setDiscription(fetchOlddata.discription);
      setPriority(fetchOlddata.priority);

      setEditdata(i)
  }
  let handleMark = (i) => {
    alert("Hello! I am an alert box!!");

  }
  return (
    <div className='task-mang'>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='ID' value={idnum} onChange={(e) =>setIdnum(e?.target?.value)}/> 
        <input type="text" placeholder='Title' value={title} onChange={(e) =>setTitle(e?.target?.value)}/> 
        <input type="text" placeholder='Discription' value={discription} onChange={(e) =>setDiscription(e?.target?.value)}/> 
        <select name="" id="" value={priority}  onChange={(e) =>setPriority(e?.target?.value)} >
          <option value="select">Select</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select> <br /> <br />
        <button type='submit'>{editdata != null ? "Update" : "SUBMIT"}</button>
        <br /> <br />
        </form>
        <Childcardtm data={data} 
        handleDelete={handleDelete} 
        handleEdit={handleEdit}
        handleMark={handleMark}
        />
    
    </div>
  )
}
