import { useRouteError } from "react-router-dom"

export const Error = () => {
    const err= useRouteError();
  return (
   <>
   <h1>Oops something went wrong!</h1>
   <h2>{err.status+": "+err.statusText}</h2>
   </>
  )
}
