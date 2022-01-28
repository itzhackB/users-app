import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const SearchFilter = ({ onChange }) => {
    const [filterBy, setFilterBy] = useState('email')
    const users = useSelector((state) => state.users);

    const isButtonSelected = (value) => {
        if (filterBy === value) {
            return true;
        }
    };

    const handleChange = (e) => {
        setFilterBy(e.target.value);
        onChange(e);

    };
    const filter = (e) => {
        let inputValue = e.target.value;
        let filterdUsers = users?.filter((foundUser) => {
            console.log(foundUser);
            const regex = new RegExp(`^${inputValue}`);
            if(filterBy==="email"){
                return foundUser[filterBy].match(regex);
            }
            if(filterBy==="name"){
                return foundUser.filterBy.first.match(regex);
            }
            if(filterBy==="id"){
                return foundUser.filterBy.value.match(regex);
            }
        })
    }
    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Filter By:</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={filterBy}
            >
                <FormControlLabel value="email" control={<Radio />} label="Email" checked={isButtonSelected('email')}
                    onChange={handleChange} />

                <FormControlLabel value="id" control={<Radio />} label="ID" checked={isButtonSelected('id')}
                    onChange={handleChange} />

                <FormControlLabel value="name" control={<Radio />} label="Name" checked={isButtonSelected('name')}
                    onChange={handleChange} />

            </RadioGroup>
            <TextField id="outlined-basic" label="Search" variant="outlined" onChange={filter} />
        </FormControl>

    );
};

export default SearchFilter;
