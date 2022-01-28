import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletUser } from '../../Redux/actions/usersActions';
import Button from '@mui/material/Button';
import DialogWindow from '../Features/DialogWindow';


const UserCard = ({ user }) => {

    const dispatch = useDispatch();
    const [isOpen, setIsOpenDialog] = useState(false)

    return (
        <li key={user.id ? user.id : user.email} className={`${user.login?.username} user`}>
            <div className="image-container">
                <img
                    className="profile-image shadow"
                    src={user.picture?.medium}
                    alt={user.name?.last}
                />
            </div>

            <div className="user-info">
                <h3 className="user-name">
                    {user.gender === "female" ? (
                        <i className={`${user.gender? user.gender: user.email} fa fa-female`}></i>
                    ) : (
                        <i className={`${user.gender? user.gender: user.email} fa fa-male`}></i>
                    )}
                    {user.name?.title} {user.name.first} {user.name.last}{" "}
                </h3>
                <i>ID: {user.id?.value}</i>
                <i className="email">{user.email}</i>
                <span className="location">
                    {user.location.city}, {user.location.state}, {user.location.country}{" "}
                    <span style={{ color: "red" }}>
                        {user.nat === "US" ? (
                            <img
                                className="country-flag"
                                src={`http://www.geonames.org/flags/x/us.gif`}
                                alt="nationality - US Flag"
                            />
                        ) : (
                            ""
                        )}
                    </span>
                </span>
            </div>

            <Button color='error' onClick={() => dispatch(deletUser(user.login.uuid))}> Delete</Button>

            <Button onClick={() => setIsOpenDialog(true)} > Edit</Button>

            <DialogWindow
                isOpen={isOpen}
                setIsOpen={setIsOpenDialog}
                user={user}
            />

            <hr className="horizental-line" />
        </li>
    )
}

export default UserCard;
