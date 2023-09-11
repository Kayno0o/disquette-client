import React from 'react'
import Error from '../components/Error'

function Page401(): React.ReactElement {
  return <Error code="401" src="/images/401.jpg" alt="cat in a police uniform">
    Il semblerait que tu essayes d&apos;accéder à quelque chose auquel tu n&apos;as pas accès...
  </Error>
}

export default Page401
