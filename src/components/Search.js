import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { throttle } from 'lodash';

import { addFavorite } from '../redux/actions/favoritesActions'
import { setDropdownVisibility } from '../redux/actions/uiActions'
import { getTournaments, clearTournaments } from '../redux/actions/tournamentsActions';
import { getDropdownVisibiliy, getDialogueLoaderVisibility } from '../redux/selectors/ui'
import { tournamentSelector } from '../redux/selectors/tournaments'

import SearchDropdown from './SearchDropdown';
import SearchBar from './SearchBar'

export default function Search() {
    const [error, setError] = useState(false);
    const [query, setQuery] = useState('');

    const dispatch = useDispatch();

    const showDropDown = useSelector(getDropdownVisibiliy);
    const foundTournaments = useSelector(tournamentSelector);
    const isLoading = useSelector(getDialogueLoaderVisibility);

    const setShowDropDown = visibility => dispatch(setDropdownVisibility(visibility));

    const delayedQuery = useRef(throttle(
        query => {
        let error;
        if (query.length > 0 && query.length < 2) {
            error = true;
        } else if(query.length !== 0) {
            error = false;
            dispatch(getTournaments(query));
        } else {
            dispatch(clearTournaments());
        }
        query.length >= 2 ? setShowDropDown(true) : setShowDropDown(false);
        setError(error);
        }, 600, { trailing: true, leading: false }
    )).current;

    const addFavoriteAction = id => {
        dispatch(addFavorite(id));
        setShowDropDown(false);
        setQuery('');
    };

    const handleFocus = () => query.length >= 2 ? setShowDropDown(true) : null;

    const handleChange = event => {
        event.persist();
        const { value } = event.target;
        delayedQuery(value);
        setQuery(value);
    }

    const handleDropdownItemClick = item => addFavoriteAction(item.id);

    return (
        <>
            <SearchBar
                placeholder='Search tournaments...'
                onChange={handleChange}
                onFocus={handleFocus}
                error={error}
                value={query}
                />
            {
                showDropDown ? <SearchDropdown
                    setDropdown={setShowDropDown}
                    listItems={foundTournaments}
                    isLoading={isLoading}
                    handleItemClick={handleDropdownItemClick}/> : null
            }
        </>
    )
}
