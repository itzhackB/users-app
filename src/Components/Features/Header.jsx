import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import '../../css/features.css'
import AddUserForm from './AddUserForm';
import SearchFilter from './SearchFilter';

const Header = () => {
    const users = useSelector((state) => state.users);
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState();

    const handleRadio = (e) => {
        setSelected(e.target.value);
        console.log(selected);
    };
    return (
        <header>
            <h1>Manage your list of random users</h1>
            <h2>There are {users.length} users available...</h2>
            <p className="paragraph">
                Please feel free to delete any user you want from the list below.
                <br />
                Then refresh the page to start over.
            </p>

            <button className='add-btn button' onClick={() => setIsOpen(true)}>
                <AddIcon
                    color='primary'
                    sx={{ fontSize: 40 }}
                />
                <span className='add-user' style={{ position: "relative", bottom: "14px", margin: "5px" }}>ADD USER</span>
            </button>

            <AddUserForm
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            {/* <SearchFilter onChange={handleRadio} /> */}
        </header>
    )

};

export default Header;
