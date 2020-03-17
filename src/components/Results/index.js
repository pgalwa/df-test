import React from 'react'

const Results = ({results}) => {
  return (
      <pre>
        {
          JSON.stringify(results, null, 4)
        }
      </pre>
  )
};

export default Results
