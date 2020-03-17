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
    (async () => {
      setIsLoading(true);
      try {
        const formSchema = await apiForm.getSchema();
        setFormSchema(formSchema);
        setIsLoading(false);
      } catch(e) {
        setError(e);
        setIsLoading(false);
      }
    })()
  }, [])
  

  return {formSchema, isLoading, error};
}

export default useFormSchema
