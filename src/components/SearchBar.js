import React, { useState } from 'react';
import { AppBar, Input, Toolbar } from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import SearchDropdown from './SearchDropdown';

const inputStyles = {
    root: {
        color: 'white',
        border: 0,
        height: 48,
        padding: '0 30px'
    }
};

const SearchInput = withStyles(inputStyles)(Input);

const useStyles = makeStyles(theme => ({
    toolbar: {
        minHeight: 48
    },
    searchInput: {
        paddingLeft: 20,
        paddingRight: 20
    }
}));

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const [list, setList] = useState([1,2,3,4]);

    const classes = useStyles();

    const handleChange = event => setQuery(event.target.value);

    return (
        <>
            <AppBar>
                <SearchInput
                    placeholder='Search tournaments...'
                    value={query}
                    onChange={handleChange}
                    className={classes.searchInput}
                    type='text'
                    fullWidth
                    autoFocus
                />
            </AppBar>
            <Toolbar className={classes.toolbar}/>
            {
                query.length > 0 ? <SearchDropdown listItems={list}/> : null
            }
        </>
    )
}
