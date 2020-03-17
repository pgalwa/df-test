// import React from 'react'
import React from 'react'

function createField(field, onChange, values) {
    return (<span key={field.name}>
        <label htmlFor={field.id}>{field.label}</label>
        <input
            id={field.id}
            type="text"
            name={field.name}
            onChange={onChange}
            value={values[field.name] || field.default}
        />
    </span>)
}

export default function createForm(schema, activeSection, onChange, values, setActiveSection) {
    
    const section = schema && schema.sections[activeSection];
    return (<><fieldset name={section.name}>
        {section.fields.map( field => createField(field, onChange, values))}
    </fieldset>
    </>);
}