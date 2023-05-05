import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {Projects} from './data/Project'
import './Project.css'
const Project = ({steps}) => {
    const dispatch =useDispatch();
    const [project,setProject] = useState('')
    const [about,setAbout] = useState('')

    const handleData= e =>
  {
    e.preventDefault();
    dispatch(Projects({title:project,about:about}))
    setProject('')
    setAbout('')
  }
  const handleClick = e =>
  {
    e.preventDefault();
    dispatch(Projects({title:project,about:about}))
    setProject('')
    setAbout('')
    steps()
  
  }

  return (
    <div className='project-container'>
    <h3>Projects</h3>
    <form >
    <div className='form-control'>
        <input type='text' name='title' placeholder='Project Title.'  onChange={(e)=>{setProject(e.target.value)}} value={project}/>
      </div>
      <div className='form-control'>
      <textarea
            name="about"
            id="about"
            onChange={(e) => {
              setAbout(e.target.value);
            }}
            placeholder="About Project...."
            value={about}
          />
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

export default Project