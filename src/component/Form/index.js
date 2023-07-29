import React from 'react'
import Threebtn from '../Threebtn'
import { TextField } from '@mui/material'

const Form = () => {
  return (
    <div className='form_btn'>
      <div>
      <Threebtn/>
      </div>
      <form action="SUBMIT">
      <TextField  label="NAME"  style={{width: "420px"}}/><br/><br/>
      <TextField  label="E-MAIL"  style={{width: "420px"}}/><br/><br/>
      <TextField  label="TEXT" multiline rows={4}  style={{width: "420px"}}/><br/><br/>
      <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default Form
