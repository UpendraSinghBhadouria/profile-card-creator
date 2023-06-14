import { TextField } from '@mui/material'
import React from 'react'

const FormInput = ({ label, type, name, value, onChange, errorMessage }) => {
    return (
        <div className='margin-top'>
            <div className='inputs'>
                <TextField
                    label={label}
                    size="small"
                    type={type}
                    className='inputs'
                    required
                    name={name}
                    value={value}
                    onChange={onChange}
                    helperText={errorMessage}
                    error={errorMessage ? true : false}
                />
            </div>
        </div>
    )
}

export default FormInput
