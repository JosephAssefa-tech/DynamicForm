import React from 'react';
import { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import UsersList from './UsersList';
const AddUser = (props) => {
const [enterusername, setusername]=useState('')
const [enterage, setuserage]=useState('');


const usernameChangeHandler = (event)=>{
    setusername(event.target.value);
}
const ageChangeHandler = (event)=>{
    setuserage(event.target.value);
}

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enterusername.trim().length === 0 || enterage.trim().length===0)
    {
        return;
    }
    if(+enterage < 1)
    {
        return ;
    }
    // console.log(enterusername, enterage);
    props.onAddUser(enterusername, enterage);
    setusername('');
    setuserage('');

  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enterusername}onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enterage} onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
      {/* <UsersList users={[]}/> */}
    </Card>
  );
};

export default AddUser;