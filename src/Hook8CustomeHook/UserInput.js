import useInput from './useInput';

const UserInput = () => {

//one thing is to remember ki je rite custom hook ma return object k array na parameter thay te rite j tene distructruing ma use karva
    const [FirstName , resetFirstName , myValueFirstName] = useInput('')
    const [LastName , resetLastName , myValueLastName] = useInput('')


    const handleSubmit = e => {

        e.preventDefault();
        alert(`Hello ${FirstName} ${LastName}`)
        resetFirstName()
        resetLastName()

    }
  return (
    <>
     <form onSubmit={handleSubmit}>
       <div>
         <label>FirstName : </label>
         <input type='text' {...myValueFirstName}  />
       </div>

       <div>
         <label>LastName : </label>
         <input type='text' {...myValueLastName} />
       </div>

       <button>Submit</button>
     </form>

    </>
  )
}

export default UserInput