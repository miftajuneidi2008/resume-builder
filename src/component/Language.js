import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import './Language.css'
import {languages} from './data/Language'
const Language = ({steps}) => {
    const dispatch = useDispatch()
    const [language,setLanguage]=useState('');
    const [write,setWrite] = useState('');
    const [speak,setSpeak] = useState('');
    const [listen,setListen] = useState('');
    const [read,setRead] = useState('');
    const handleData= e =>
    {
      e.preventDefault();
      dispatch(languages({language:language,write:write,speak:speak,listen:listen,read:read}))
      setLanguage('')
      setListen('')
      setRead('')
      setSpeak('')
      setWrite('')
    }
    const handleClick = e =>
    {
      e.preventDefault();
      dispatch(languages({language:language,write:write,speak:speak,listen:listen,read:read}))
      setLanguage('')
      steps()
    }
  return (
    <div className='language-container'>
    <h3>Languages</h3>
    <form >
    <div className='form-control'>
    <label htmlFor='lan'>Language</label>
        <input type='text' name='language' id='lan' placeholder='Language..'  onChange={(e)=>{setLanguage(e.target.value)}} value={language}/>
      </div>
      <div className='form-control'>
      <label htmlFor='write'>Writting</label>
        <select name='writting' id='write' onChange={(e)=>{setWrite(e.target.value)}} value={write}>
        <option>select</option>
          <option>good</option>
          <option>very good</option>
          <option>excellent</option>
        </select>
      </div>
      <div className='form-control'>
        <label htmlFor='speak'>Speaking</label>
        <select name='speaking' id='speak' onChange={(e)=>(setSpeak(e.target.value))} value={speak}>
        <option>select</option>
          <option>good</option>
          <option>very good</option>
          <option>excellent</option>
        </select>
      </div>
      <div className='form-control'>
      <label htmlFor='listen'>Listening</label>
        <select name='listening' id='listen' onChange={(e)=>{setListen(e.target.value)}} value={listen}>
        <option>select</option>
          <option>good</option>
          <option>very good</option>
          <option>excellent</option>
        </select>
      </div>
      <div className='form-control'>
      <label htmlFor='read'>Reading</label>
        <select name='read' id='listen' onChange={(e)=>{setRead(e.target.value)}} value={read}>
        <option>select</option>
          <option>good</option>
          <option>very good</option>
          <option>excellent</option>
        </select>
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

export default Language