import El from "@/library/El"
import { HeaderTable } from "./header"

export const MainTable = ()=>{
El({
    element:"div",
    child:El({
        element:"table",
        child:[HeaderTable(),]
    })
})
}