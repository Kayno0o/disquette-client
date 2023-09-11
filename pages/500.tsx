import React from 'react'
import Error from '../components/Error'

function Page404(): React.ReactElement {
  return <Error code="500" src="/images/500.jpg" alt="three kitten inside a computer">
    Mince... Il semblerait que nos pattes aient débranché quelque chose d'important. Nous allons essayer de réparer ça.
    <br />
    Reviens plus tard !
  </Error>
}

export default Page404
