import React from 'react'

import useFormSchema from './useFormSchema'

const Form = () => {

  const { } = useFormSchema()

  const onSubmit = (e) => {
    /*
      TODO: Implement
     */
  }


  return (
    <form onSubmit={onSubmit}>
      <fieldset name="sampleSection1">
        <label htmlFor="sampleId1">Sample Input 1</label>
        <input name="sampleName1" type="text" id="sampleId1"/>
        <label htmlFor="sampleId2">Sample Input 2</label>
        <input name="sampleName2" type="text" id="sampleId2"/>
      </fieldset>
      <fieldset name="sampleSection@">
        <label htmlFor="sampleId3">Sample Input 3</label>
        <input name="sampleName3" type="text" id="sampleId3"/>
        <label htmlFor="sampleId4">Sample Input 4</label>
        <input name="sampleName4" type="text" id="sampleId4"/>
      </fieldset>
      <button type="submit">Submit</button>
      <div>
        <button>1</button>
        <button>2</button>
      </div>
    </form>
  )
};

export default Form
