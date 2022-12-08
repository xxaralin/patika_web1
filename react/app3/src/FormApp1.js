import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';


function App() {
  return (
    <div className='App'>
        <h1>Sign Up</h1>
        {/*
        const formik = useFormik({
            initialValues: {
                firstName: '',
                lastName: '',
                email: '',
        },
        onSubmit: (values) => {
            console.log(values)
        ;
     },*/}
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        hobbies:[],
        country:'tr'
      }}
      onSubmit={ (values) => {
       console.log(values)
      }}
    >
      {/* <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form> */}

      {
        ({handleSubmit, handleChange,values})=>(
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name </label>
                <input name="firstName" placeholder="Jane" onChange={handleChange} />
                    <br/>
                    <br/>
                <label htmlFor="lastName">Last Name </label>
                <input name="lastName" placeholder="Doe" onChange={handleChange}/>
                    <br/>
                    <br/>
                <label htmlFor="email">Email </label>
                <input name="email" placeholder="jane@acme.com" onChange={handleChange}/>
                    <br/>
                    <br/>
                <label htmlFor='gender'>Gender  </label>
                    <span>Female</span>
                    <input type="radio" name="gender" value="female" onChange={handleChange}/>
                    
                    <span>Male</span>
                    <input type="radio" name="gender" value="Male" onChange={handleChange}/>
                    
                    <br/>
                        <div>
                        <input type="checkbox" name="hobbies" value="Cinema" onChange={handleChange}/>Cinema
                        </div>
                        <div>
                        <input type="checkbox" name="hobbies" value="Yoga" onChange={handleChange}/>Yoga
                        </div>
                        <div>
                        <input type="checkbox" name="hobbies" value="Games" onChange={handleChange}/>Games
                        </div>
                    <br/>
                    <select name='country' onChange={handleChange} value={values.country}>
                        <option value="tr">tr</option>
                        <option value="us">us</option>
                        <option value="it">it</option>
                    </select>

                    <br/>
                    <br/>
                    
                <button type="submit">Submit</button>
                <br/>
                <br/>
                <code>{JSON.stringify(values)}</code>

            </form>

        )
      }
    </Formik>

    </div>
  );
}

export default App;