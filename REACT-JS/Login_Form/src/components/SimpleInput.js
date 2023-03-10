import { useEffect, useState } from "react";
const SimpleInput = (props) => {
  // const nameInputRef=useRef();
 // const [enteredNameIsValid,setEnteredNameIsValid]=useState(false);
 const [enteredName,setEnteredName]=useState('');
 const [enteredNameTouched,setEnteredNameTouched]=useState(false);

 const [enteredEmail,setEnteredEmail]=useState('');
 const [enteredEmailTouched,setEnteredEmailTouched]=useState(false);

  const enteredNameIsValid=enteredName.trim() !=='';
  const nameInputIsInvalid=!enteredNameIsValid&&enteredNameTouched;

  const enteredEmailIsValid=enteredEmail.includes('@');
  const emailInputIsInvalid=!enteredEmailIsValid&&enteredEmailTouched;
  let formIsValid=false;
// useEffect(()=>{

  if (enteredNameIsValid){
    //setFormIsValid(true);
    formIsValid=true;
  }
  //else{
   // setFormIsValid(false);
 // }
//},[enteredNameIsValid]);


//     console.log('Name input is valid!');
//   }


  const nameInputChangeHandler=(event)=>{
setEnteredName(event.target.value);
  };

  const nameInputBlurHandler=event=>{
    setEnteredNameTouched(true);
  };

  const emailInputChangeHandler=(event)=>{
    setEnteredEmail(event.target.value);
      };
    
      const emailInputBlurHandler=event=>{
        setEnteredEmailTouched(true);
      };
  const formSubbmitionHandler=(event)=>{
event.preventDefault();

setEnteredNameTouched(true);
if(!enteredNameIsValid){
  return;
}
//  if(enteredName.trim()===''){
//   setEnteredNameIsValid(false);
//   return;
// }

//setEnteredNameIsValid(true);

console.log(enteredName);

// const enteredValue=nameInputRef.current.value;
// console.log(enteredValue);
setEnteredName('');
setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
  ? 'form-control invalid'
  : 'form-control';

const emailInputClasses = emailInputIsInvalid
  ? 'form-control invalid'
  : 'form-control';


  return (
    <form onSubmit={formSubbmitionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        // ref={nameInputRef }
        type='text' id='name'
        onChange={nameInputChangeHandler} 
        onBlur={nameInputBlurHandler} />
      {nameInputIsInvalid && <p  className="error-text">Must and should enter your name...</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputClasses && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
