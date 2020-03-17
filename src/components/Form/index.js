import React, { useState } from 'react'

import useFormSchema from './useFormSchema'
import createForm from './createForm';
import mapSchemaToResult from './mapSchemaToResult';

const Form = ({setResults}) => {
  const [formValues, setFormValues] = useState({});

  const {formSchema, isLoading, error} = useFormSchema();

  const [activeSection, setActiveSection] = useState(0);
  
  const onSubmit = (e) => {
    e.preventDefault();
    const result = mapSchemaToResult(formSchema, formValues)
    setResults(result);
  }

  const onSetInputValue = (e) => {
    e.preventDefault();
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }
  const onSetActiveSection = (e, idx) =>{
    e.preventDefault()
    setActiveSection(idx)
  }

  const showForm = () => {
    if(isLoading) {
      return <div> Loading... </div>
    } else if(error) {
      return <div>{error}</div>
    } else if(!isLoading && formSchema) {
      return createForm(formSchema, activeSection, onSetInputValue, formValues);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      {showForm() }
      <button type="submit">Submit</button>
      <div>
        {formSchema && formSchema.sections.map(
          (section, idx) => <button key={`section--${idx}`} onClick={e => onSetActiveSection(e, idx)}>{idx + 1}</button> // just to ensure that key will be unique
        )}
      </div>
      
    </form>
  )
};

export default Form
