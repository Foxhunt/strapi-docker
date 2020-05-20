import { useQuery } from "graphql-hooks"

import Notebook, { notebook } from "./notebook"

const querryNotebooks = `query {
  notebooks {
    innovoInventory
    serialnumber
    leasingStart
    leasingEnde
    notebook_user {
      userName
    }
  }
}`

export default function Notebooks() {
    const { loading, error, data } = useQuery(querryNotebooks)

    if (loading) return <>loading...</>
    if (error) return <>"error..."</>

    return <>{
        data.notebooks.map(
            (notebook: notebook) => <Notebook {...notebook} />
        )
    }</>
}