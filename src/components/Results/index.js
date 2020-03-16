import React from 'react'

const Results = () => {
  /*
  TODO: Implement
 */
  return (
      <pre>
        {
          `
           {
            "sections": [
              {
                "name": "person",
                "fields": [
                  {
                    "name": "firstName",
                    "value": "Jan"
                  },
                  {
                    "name": "lastName",
                    "value": "Value"
                  }
                ]
              },
              {
                "name": "address",
                "fields": [
                  {
                    "name": "street",
                    "value": "Plac Europejski 1"
                  },
                  {
                    "name": "position",
                    "value": "Developer"
                  }
                ]
              },
              {
                "name": "job",
                "fields": [
                  {
                    "name": "company",
                    "value": "Daftcode"
                  },
                  {
                    "name": "position",
                    "value": "Developer"
                  }
                ]
              }
            ]
          }

          `
        }
      </pre>
  )
};

export default Results
