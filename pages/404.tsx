import React from 'react'
import Error from '../components/Error'

function Page404(): React.ReactElement {
  return <Error code="404" src="/images/404.gif" alt="Black cat looking around">
      Desolé mais je n'ai pas trouvé la page que tu recherches...
  </Error>
}

export default Page404
