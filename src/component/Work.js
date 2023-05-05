import React,{useState} from 'react'
import './Work.css'
import { useDispatch } from 'react-redux'
import  {works} from './data/Work'
const Work = ({steps}) => {
  const [title,setTitle] = useState('')
  const [from,setFrom] = useState('')
  const [to,setTo] = useState('')
  const [organization,setOrganization] = useState('')
  const dispatch = useDispatch();
  const handleData= e =>
  {
    e.preventDefault();
    dispatch(works({title:title,organization:organization,from:from,to:to}))
    setTitle('')
    setFrom('')
    setTo('')
    setOrganization('')
  }
  const handleClick = e =>
  {
    e.preventDefault();
    dispatch(works({title:title,organization:organization,from:from,to:to}))
    setTitle('')
    setFrom('')
    setTo('')
    setOrganization('')
    steps()
  }
  return (
    <div className='work-container'>
      <h3>Work</h3>
      <form >
        <div className='form-control'>
          <input type='text' name='title' placeholder='Work title...' onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
        </div>
        <div className='form-control'>
          <input type='text' name='organization' placeholder='Organization..'  onChange={(e)=>{setOrganization(e.target.value)}} value={organization}/>
        </div>
        <div className='form-control'>
          <input type='text' name='from' placeholder='From..' onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} onChange={(e)=>{setFrom(e.target.value)}} value={from}/>
        </div>
        <div className='form-control'>
          <input type='text' name='to' placeholder='From...' onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} onChange={(e)=>{setTo(e.target.value)}} value={to}/>
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

export default Work