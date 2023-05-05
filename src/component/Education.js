import React,{useState} from 'react'
import './Education.css'
import { useDispatch } from 'react-redux'
import {educations} from './data/Education'
const Education = ({steps}) => {
    const dispatch = useDispatch()
    const[title,setTitle] = useState('')
    const[school,setSchool] = useState('')
    const [departement,setDepartement]=useState('')
    const[from,setFrom] = useState('')
    const[to,setTo] = useState('')
    const handleData= e =>
    {
      e.preventDefault();
      dispatch(educations({title:title,departement:departement,school:school,from:from,to:to}))
      setTitle('')
      setFrom('')
      setTo('')
      setSchool('')
    }
    const handleClick = e =>
    {
      e.preventDefault();
      dispatch(educations({title:title,departement:departement,school:school,from:from,to:to}))
      setTitle('')
      setFrom('')
      setTo('')
      setSchool('')
      setDepartement('')
      steps()
    }
  return (
    <div className='work-container'>
    <h3>Education</h3>
    <form >
    <div className='form-control'>
        <input type='text' name='title' placeholder='Certificate type..'  onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
      </div>
      <div className='form-control'>
        <input type='text' name='dep' placeholder='Departement..'  onChange={(e)=>{setDepartement(e.target.value)}} value={departement}/>
      </div>
      <div className='form-control'>
        <input type='text' name='school' placeholder='Shool...' onChange={(e)=>{setSchool(e.target.value)}} value={school}/>
      </div>
      <div className='form-control'>
        <input type='text' name='from' placeholder='From..' onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} onChange={(e)=>{setFrom(e.target.value)}} value={from}/>
      </div>
      <div className='form-control'>
        <input type='text' name='to' placeholder='To...' onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} onChange={(e)=>{setTo(e.target.value)}} value={to}/>
      </div>
      <div className='form-control'>
        <button type='submit' className='btn-add' onClick={handleData}>Add Other</button>
      </div>
      <div className='form-control'>
        <button type='submit' className='btn-submit' onClick={handleClick}>Next</button>
      </div>
    </form>
  </div>
  )
}

export default Education
