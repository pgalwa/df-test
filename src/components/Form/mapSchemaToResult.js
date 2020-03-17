const mapFields = (fields, values) => fields.map(f => ({
    name: f.name,
    value: values[f.name] || ''
  }))
  
const mapSections = (schema, values) => 
    schema.sections.map(s => ({
        name: s.name,
        fields: mapFields(s.fields, values)
    }))

const mapSchemaToResult = (schema, values) => ({
    sections: mapSections(schema, values)
    })

export default mapSchemaToResult