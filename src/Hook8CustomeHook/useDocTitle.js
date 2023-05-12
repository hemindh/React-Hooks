import { useEffect } from "react"

const useDocTitle = (count) => {


    useEffect(() => {
        document.title = `Count ${count}`
        console.log("count is run")
    } , [])
}

export default useDocTitle

//All time is call the useeffect when pass dependency in count state value
//[] - pass empty dependency then only  call one time  