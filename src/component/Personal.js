import React ,{useState} from 'react'
import './Personal.css';
import { useDispatch } from 'react-redux';
import {addPerson} from './data/personalData';
const Personal = ({steps}) => {
    const [fullname,setFullname] = useState('')
    console.log(fullname)
    const [phone,setPhone] = useState('')
    const [date,setDate] = useState('')
    const [email,setEmail] = useState('')
    const [linked,setLinked] = useState('')
    const [github,setGithub] = useState('')
    const dispatch = useDispatch();
    const handleClick = e =>
    {
        e.preventDefault();
        dispatch(addPerson({fullname:fullname,phone:phone,date:date,email:email,linked:linked,github:github}))
        steps()
        
    }
  return (
    <div className='form-container'>
        <h3>Personal Information</h3>
        <form onSubmit={handleClick}>
            <div className='form-control'>
                <input type='text' name='fname' id='fname' onChange={(e)=>{setFullname(e.target.value)}} placeholder='Full Name....' />
            </div>

            <div className='form-control'>
                <input type='text' name='phone' id='phone' placeholder='phone....' onChange={(e)=>{setPhone(e.target.value)}} value={phone}/>
            </div>
            <div className='form-control'>
                <input type='text' name='date'  id='date' placeholder='Date of birth....' onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} onChange={(e)=>{setDate(e.target.value)}} value={date}/>
            </div>
            <div className='form-control'>
                <input type='email' name='email' id='email' placeholder='Email....' onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
            </div>
            <div className='form-control'>
              
                <input type='text' name='linked' id='linked' placeholder='Linked in....' onChange={(e)=>{setLinked(e.target.value)}} value={linked}/>
            </div>
            <div className='form-control'>
                <input type='text' name='github' id='github' placeholder='Github....' onChange={(e)=>{setGithub(e.target.value)}} value={github}/>
            </div>
            <div className='form-control'>
                <button type='submit' className='btn btn-primary'>Next</button>
            </div>
        </form>
    </div>
  )
}

export default Personal