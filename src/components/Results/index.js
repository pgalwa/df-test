import React from 'react'

const Results = ({results}) => {
  return (
      <pre>
        {
          results && JSON.stringify(results, null, 4)
        }
      </pre>
  )
};

export default Results
