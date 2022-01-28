import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import handleChange from '../../utils/editUser';
import { updateUser } from '../../Redux/actions/usersActions';
import { errHandle } from '../../Redux/actions/errorAction';
import isEmpty from '../../utils/isEmpty'
import { Stack } from '@mui/material';
import AlertWindow from './AlertWindow';
import updateEmail from '../../utils/editEmail';

const DialogWindow = ({ isOpen, setIsOpen, user }) => {
    const [userUpdate, setUserUpdate] = useState({ login: user.login.uuid });
    const dispatch = useDispatch()
    const errors = useSelector((state) => state.err);
    const users = useSelector((state) => state.users);


    const handleApprove = () => {
        dispatchUpdatedUser()
            .catch((err) => isEmpty(errors) ? setIsOpen(false) : console.log(errors));

    }

    const updateEmail = (e, state, setState) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const validateInputs = async (user) => {
        let re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let isValid = new Promise((resolve, reject) => {

            if (isEmpty(user)) {
                reject(new Error("Fields cant be empty"));
            }
            if (user.name?.first.length <= 3 || user.name?.last.length <= 3) {
                reject(new Error("minimun 3 letters"));
            }
            if (!re.test(user.email)) {
                reject(new Error("Email is not valid"));
            }

            let newUser = users.find(item => item.login.uuid === user.login);
            newUser = { ...newUser, email: user.email, name: user.name }
            resolve(newUser);

        })
        return isValid;
    }

    const dispatchUpdatedUser = async () => {
        try {
            validateInputs(userUpdate)
                .then(res => updateUser(res))
                .then(res => dispatch(res))
                .catch(err => dispatch(errHandle(err)))

        } catch (err) {
            errHandle(err);
        }
    }

    return (
        <Dialog
            open={isOpen}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Edit User
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">

                    {
                        isEmpty(errors) ?
                            <Stack sx={{ width: '100%' }} spacing={2}>
                                <TextField
                                    name='first'
                                    label="First Name:"
                                    type="text"
                                    onChange={(e) => { handleChange(e, userUpdate, setUserUpdate) }}
                                />
                                <TextField
                                    name='last'
                                    label="Last Name:"
                                    type="text"
                                    onChange={(e) => { handleChange(e, userUpdate, setUserUpdate) }}
                                />
                                <TextField
                                    name='email'
                                    label="Email:"
                                    type="email"
                                    onChange={(e) => { updateEmail(e, userUpdate, setUserUpdate); }}
                                />
                            </Stack>
                            :
                            <Stack sx={{ width: '100%' }} spacing={2}>
                                <TextField
                                    error
                                    name='first'
                                    label="First Name:"
                                    type="text"
                                    onChange={(e) => { handleChange(e, userUpdate, setUserUpdate) }}
                                />
                                <TextField
                                    error
                                    name='last'
                                    label="Last Name:"
                                    type="text"
                                    onChange={(e) => { handleChange(e, userUpdate, setUserUpdate) }}
                                />
                                <TextField
                                    error
                                    name='email'
                                    label="Email:"
                                    type="email"
                                    onChange={(e) => { updateEmail(e, userUpdate, setUserUpdate) }}
                                />
                                <AlertWindow errText={errors} />
                            </Stack>
                    }

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color='error' onClick={() => setIsOpen(false)}>Cancel</Button>
                <Button onClick={handleApprove} >
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogWindow;
