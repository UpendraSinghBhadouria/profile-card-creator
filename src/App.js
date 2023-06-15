import { Button, Checkbox, FormControl, FormControlLabel, Grid, TextField } from '@mui/material';
import './App.css';
import FormInput from './components/FormInput';
import { useEffect, useState } from 'react';
import CardData from './components/CardData';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import CheckBoxContent from './components/CheckBoxContent';
import { Toaster, toast } from 'react-hot-toast';

function App() {

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    number: "",
    date: "",
    time: "",
    gender: "",
    select: "",
    image: "",
    checkBox: ""
  })

  const [error, setError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const onChangeHandler = (e) => {

    if (e.target.files && e.target.files[0]) {
      setInput({ ...input, [e.target.name]: URL.createObjectURL(e.target.files[0]) });
    }
    else {
      setInput({ ...input, [e.target.name]: e.target.value })
    }
  }

  // const handleSubmit = () => {
  //   Object.keys(input).map((key) => {
  //     if (!input[key]){
  //       setError((prev)=>(
  //        { ...prev,
  //         [key]:key}
  //       ))
  //       console.log(error)
  //     }
  //   })
  // }

  useEffect(() => {
    console.log(error)
    if (Object.keys(error).length === 0 && isSubmit) {
      toast.success("Profile created successfully");
    }
  }, [error, isSubmit])

  const handleSubmit = () => {
    setError(validate(input));
    setIsSubmit(true);
  }

  const validate = (values) => {
    const errors = {}
    const nameRejex = /^[A-Za-z. ]{3,30}$/ ;
    const emailRejex = /[A-Za-z0-9._]{3,}@[A_Za-z0-9]{3,}[.]{1}[A-Za-z.0-9]{2,6}/ ;

    if (!values.name) {
      errors.name = "Name is required!"
    }
    else if(!nameRejex.test(values.name)){
      errors.name = "Name is invalid!"
    }
    if (!values.email) {
      errors.email = "Email is required!"
    }
    else if(!emailRejex.test(values.email)){
      errors.email = "Email is invalid!"
    }
    if (!values.password) {
      errors.password = "Password is required!"
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm password is required!"
    }
    if (values.password !== values.confirmPassword) {
      errors.passwordMatch = "Password should be same"
    }
    if (!values.number) {
      errors.number = "Phone is required!"
    }
    if ((values.number.length > 10) || (values.number.length && values.number.length < 10)) {
      errors.number = "Phone number should be in 10 digits!"
    }

    if (!values.date) {
      errors.date = "Date is required!"
    }
    if (!values.time) {
      errors.time = "Time is required!"
    }
    if (!values.gender) {
      errors.gender = "Gender is required!"
    }
    if (!values.select) {
      errors.select = "Select a state is required!"
    }
    if (!values.image) {
      errors.image = "Image is required!"
    }
    if(!values.checkBox){
      errors.checkBox = "Please tick a checkbox!"
    }

    return errors
  }
  const states = [
    {
      value: 'Madhya Pradesh',
      label: 'Madhya Pradesh',
    },
    {
      value: 'Uttar Pradesh',
      label: 'Uttar Pradesh',
    },
    {
      value: 'New Delhi',
      label: 'New Delhi',
    },
    {
      value: 'Punjab',
      label: 'Punjab',
    },
  ];



  return (
    <div className={Object.keys(error).length === 0 && isSubmit ? null : "app"}>
      <Toaster/>
      {
        Object.keys(error).length === 0 && isSubmit ? (
          <CardData
            name={input.name}
            date={input.date}
            image={input.image}
            email={input.email}
            phone={input.number}
            time={input.time}
            state={input.select}
            gender={input.gender}
          />
        ) : (
          <div className='form'>
            <h1 style={{ textAlign: "center", marginTop: "25px" }}>Profile Card Generator</h1>
            <form>
              <Grid container spacing={2}>
                <Grid item lg={6} sm={6} >
                  <FormInput label="Name"
                    type="text"
                    name="name"
                    value={input.name}
                    errorMessage={error.name ? error.name : null}
                    onChange={onChangeHandler}
                  />
                </Grid>
                <Grid item lg={6} sm={6} >
                  <FormInput label="Email"
                    type="email"
                    name="email"
                    value={input.email}
                    errorMessage={error.email ? error.email : null}
                    onChange={onChangeHandler}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item lg={6} sm={6} >
                  <FormInput label="Password"
                    type="password"
                    name="password"
                    value={input.password}
                    onChange={onChangeHandler}
                    errorMessage={error.password ? error.password : null}
                  />
                </Grid>
                <Grid item lg={6} sm={6} >
                  <FormInput label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={input.confirmPassword}
                    onChange={onChangeHandler}
                    errorMessage={error.confirmPassword ? error.confirmPassword : error.passwordMatch ? error.passwordMatch : null}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item lg={6} sm={6} >
                  <FormInput label="Phone"
                    type="number"
                    name="number"
                    value={input.number}
                    onChange={onChangeHandler}
                    errorMessage={error.number ? error.number : null}
                  />
                </Grid>
                <Grid item lg={6} sm={6} >
                  <div className='radios'>
                    <div className='radio'>
                      <input
                        type='radio'
                        name='gender'
                        value="Male"
                        onChange={onChangeHandler}
                      />
                      <span className='radio-text'>Male</span>
                    </div>
                    <div className='radio'>
                      <input
                        type='radio'
                        name='gender'
                        value="Female"
                        onChange={onChangeHandler}
                      />
                      <span className='radio-text'>Female</span>
                    </div>
                  </div>
                  {error.gender ? <span className='error-msg'>{error.gender}</span> : null}
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item lg={6} sm={6} >
                  <FormInput label=""
                    type="date"
                    name="date"
                    value={input.date}
                    onChange={onChangeHandler}
                    errorMessage={error.date ? error.date : null}
                  />
                </Grid>
                <Grid item lg={6} sm={6} >

                  <FormInput label=""
                    type="time"
                    name="time"
                    value={input.time}
                    onChange={onChangeHandler}
                    errorMessage={error.time ? error.time : null}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item lg={6} sm={6} >
                  <TextField
                    size="small"
                    type="file"
                    className='inputs'
                    name='image'
                    onChange={onChangeHandler}
                    sx={{ marginTop: "25px" }}
                    helperText={error.image ? error.image : null}
                    error={error.image ? true : false}
                  />
                </Grid>
                <Grid item lg={6} sm={6} >
                  <div className='margin-top'>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">States</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={input.select}
                        label="States"
                        name='select'
                        onChange={onChangeHandler}
                        className='inputs'
                        style={{ height: "40px" }}
                      >
                        {states.map((option) => (
                          <MenuItem
                            key={option.value} value={option.value}>{option.label}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  {error.select ? <span className='error-msg'>{error.select}</span> : null}
                </Grid>
              </Grid>

              <FormControlLabel
              onChange={onChangeHandler}
              required 
              style={{ marginTop: "25px" }} 
              control={<Checkbox />} 
              label={<CheckBoxContent />} 
              name='checkBox'
              />
              {error.checkBox ? <div className='error-msg' style={{marginTop:"-18px"}}>{error.checkBox}</div> : null}

              <div className='btn'>
                <Button
                  variant="contained"
                  className='button'
                  sx={{ marginTop: "25px", marginBottom: "25px" }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        )
      }
    </div>
  );
}

export default App;
