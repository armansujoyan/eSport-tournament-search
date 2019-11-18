import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';

import { getTournaments, clearTournaments } from '../redux/actions/tournamentsActions';
import { addFavorite } from '../redux/actions/favoritesActions'
import { tournamentSelector, tournamentLoadSelector } from '../redux/selectors/tournaments'

import SearchDropdown from './SearchDropdown';
import SearchBar from './SearchBar'

export default function Search() {
    const [showDropDown, setShowDropDown] = useState(false);
    const [error, setError] = useState(false);
    const [query, setQuery] = useState('');
    const modalRef = useRef(null);
    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick, false);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick, false);
        };
    })

    const dispatch = useDispatch();
    const foundTournaments = useSelector(tournamentSelector);
    const isLoading = useSelector(tournamentLoadSelector);

    const handleOutsideClick = event => {
        if(modalRef.current && modalRef.current.contains(event.target))
            return;

        setShowDropDown(false);
    }

    const delayedQuery = useRef(debounce(
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
        }, 400, { trailing: true, leading: false }
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
                    listItems={foundTournaments}
                    ref={modalRef}
                    isLoading={isLoading}
                    handleItemClick={handleDropdownItemClick}/> : null
            }
        </>
    )
}
