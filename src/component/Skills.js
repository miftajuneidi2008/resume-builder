import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import './Skill.css'
import {addSkill} from './data/Skill'
const Skills = ({steps}) => {
    const [skill,setSkill] = useState('');
    const dispatch = useDispatch();
  const handleData= e =>
  {
    e.preventDefault();
    dispatch(addSkill({skill:skill}))
    setSkill('')

  }
  const handleClick = e =>
  {
    e.preventDefault();
    dispatch(addSkill({skill:skill}))
    setSkill('')
    steps()
  }
  return (
    <div className='Skill-container'>
    <h3>Skills</h3>
    <form >
      <div className='form-control'>
        <input type='text' name='title' placeholder='Skill...' onChange={(e)=>{setSkill(e.target.value)}} value={skill}/>
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
export default Skills