import { useState, useEffect } from 'react';
import apiForm from 'api/form'

const useFormSchema = () => {
  /*
  TODO: Implement
 */
  const [formSchema, setFormSchema] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      console.log('hook')
      try {
        const formSchema = await apiForm.getSchema();
        setFormSchema(formSchema);
      } catch(e) {
        setError(e);
        setIsLoading(false);
      }
    })()
  }, [])
  

  return {formSchema, isLoading, error};
}

export default useFormSchema
