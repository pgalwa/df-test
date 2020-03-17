// import React from 'react'
import React from 'react'

function createField(field, onChange, values) {
    return (<>
        <label htmlFor={field.id}>{field.label}</label>
        <input name={field.name} type="text" id={field.id} onChange={onChange} value={values[field.name] || ''}/>
    </>)
}

export default function createForm(schema, activeSection, onChange, values, setActiveSection) {
    
    const section = schema && schema.sections[activeSection];
    return (<><fieldset name={section.name}>
        {section.fields.map( field => createField(field, onChange, values))}
    </fieldset>
    </>);
}