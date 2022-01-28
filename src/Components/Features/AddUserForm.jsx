import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import handleChange from '../../utils/editUser';
import updateEmail from '../../utils/editEmail';
import handleLocation from '../../utils/editCountry';
import { addUser } from '../../Redux/actions/usersActions';
import isEmpty from '../../utils/isEmpty';


const AddUserForm = ({ isOpen, setIsOpen }) => {
  const [createUser, setCreateUser] = useState({})
  const dispatch = useDispatch()

  const addUserAprrove = () => {
    if (isEmpty(createUser)) {
      alert('Please Fill All Fields')
      return
    }
    setIsOpen(!isOpen)
    dispatch(addUser(createUser))
  }
  return (
    <Dialog open={isOpen} >
      <DialogTitle>Add new user</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Fill the fields please.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name-first"
          name='first'
          label="First Name"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => { handleChange(e, createUser, setCreateUser) }}
        />
        <TextField
          margin="dense"
          id="name"
          name='last'
          label="Last Name"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => { handleChange(e, createUser, setCreateUser) }}

        />
        <TextField

          margin="dense"
          id="name"
          name='email'
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          onChange={(e) => { updateEmail(e, createUser, setCreateUser) }}
        />
        <TextField
          margin="dense"
          id="name"
          name='country'
          label="Country"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => { handleLocation(e, createUser, setCreateUser) }}
        />
        <TextField
          margin="dense"
          id="name"
          name='city'
          label="City"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => { handleLocation(e, createUser, setCreateUser) }}

        />
        <TextField
          margin="dense"
          id="name"
          name='street'
          label="Street"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => { handleLocation(e, createUser, setCreateUser) }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsOpen(false)}>Cancel</Button>
        <Button onClick={addUserAprrove}>Save</Button>
      </DialogActions>
    </Dialog>
  )
};

export default AddUserForm