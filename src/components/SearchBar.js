import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import { AppBar, Input, Toolbar, FormHelperText } from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles';

import { getTournaments } from '../redux/actions/tournamentsActions';
import { tournamentSelector } from '../redux/selectors/tournaments'
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
    const [error, setError] = useState(false);

    const dispatch = useDispatch();
    const foundTournaments = useSelector(tournamentSelector);

    const classes = useStyles();
    const delayedQuery = useRef(debounce(
        query => {
        let error;
        if (query.length > 0 && query.length < 2) {
            error = true;
        } else if(query.length !== 0) {
            error = false;
            dispatch(getTournaments(query));
        }
        setError(error);
        }, 400, { trailing: true, leading: false }
    )).current;

    const handleChange = event => {
        event.persist();
        const { value } = event.target;
        setQuery(value);
        delayedQuery(value);
    };

    return (
        <>
            <AppBar>
                <SearchInput
                    placeholder='Search tournaments...'
                    value={query}
                    onChange={handleChange}
                    className={classes.searchInput}
                    error={error}
                    type='text'
                    fullWidth
                    autoFocus
                />
            </AppBar>
            <Toolbar className={classes.toolbar}/>
            {
                foundTournaments.length > 0 && query.length > 0 ? <SearchDropdown listItems={foundTournaments}/> : null
            }
        </>
    )
}
