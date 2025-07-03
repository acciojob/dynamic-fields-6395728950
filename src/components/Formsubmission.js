import React from 'react'

const Formsubmission = () => {
  return (
    <div>
      {
        console.log("i am inside this function")
      }
       <form>
          <input type="text" name="name" placeholder="Name"></input>
          <input type="text" name="age" placeholder="Age"></input>
           <button type='button'>Remove</button>
        </form>
    </div>
  )
}

export default Formsubmission