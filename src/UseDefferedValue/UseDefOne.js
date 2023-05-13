import { useDeferredValue, useMemo, useState } from "react"

function UseDefOne() {
    const [name, setName] = useState("");
    const [largeList , setAddList] = useState([]);

    const deferredName = useDeferredValue(name)

    const list = useMemo(() => {
        console.log(deferredName)
      return largeList.filter(item => item.name.includes(deferredName))
    }, [deferredName])
  
    function handleChange(e) {
      setName(e.target.value)
    }
  
    return <>
      <input type="text" value={name} onChange={handleChange} />
      {list.map(item => <li key={item.id} item={item} />)}
    </>
}
    export default UseDefOne;