import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getTournaments } from '../redux/actions/tournamentsActions';
import { debounce } from 'lodash';
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

    const dispatch = useDispatch();
    const classes = useStyles();
    const delayedQuery = useRef(debounce(
        query => dispatch(getTournaments(query)),
        300,
        {
            trailing: true,
            leading: false
        }
    )).current;

    const handleChange = event => {
        event.persist();
        setQuery(event.target.value);
        delayedQuery(query);
    };

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
