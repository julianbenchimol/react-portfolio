import React from 'react'
import {useState} from "react"

export default function Contact(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [msgText, setMsgText] = useState("")

    const inputChange = (event)=> {
  
        const inputName = event.name
        const inputValue = event.inputValue

        switch(inputName){
            case "name":
                setName(inputValue)
                break;
            case "email":
                setEmail(inputValue)
                break;
            case "textMessage":
                setMsgText(inputValue)
                break;
            default:
                break;
        }
    }

    return(
        <div>
            <h2 className='text-center'>Contact Me</h2>

            <form className='form'>

                <label htmlFor = 'name' className='form-label'>Name:</label>
                <input
                    className='form-control'
                    value={name}
                    name = 'name'
                    onChange={inputChange}
                    type = 'text'
                    placeholder='Put Your Name Here:'/>

                <label htmlFor='email' className='form-label'>Email</label>
                <input
                    className='form-control'
                    value={email}
                    name = 'email'
                    onChange={inputChange}
                    type = 'text'
                    placeholder='Put Your Email Here:'/>
                
                <label htmlFor='msgText'>Your Message</label>
                <textarea
                    className='form-control'
                    value={msgText}
                    name = 'msgText'
                    placeholder='Leave Your Message'
                    onChange={inputChange}
                    id = "message"/>

                <button
                    type='button'
                    className = 'btn btn-primary'>Send</button>
            </form>
        </div>
    )
}