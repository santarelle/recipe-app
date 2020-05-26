import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';

import { AppState } from 'src/store';

import './Search.scss';

type SearchProps = {
  placeholder: string;
};

export const Search: React.FC<SearchProps> = (props: SearchProps) => {
  const { placeholder } = props;
  const [term, setTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { term: termState, loading } = useSelector(
    (state: AppState) => state.searchRecipe,
  );
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/search') {
      setTerm('');
      // eslint-disable-next-line no-unused-expressions
      inputRef.current?.focus();
    }
  }, [location]);

  useEffect(() => {
    setTerm(termState);
  }, [termState]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-expressions
    inputRef.current?.focus();

    if (term) {
      history.push(`/search?q=${term}`);
    }
  };

  return (
    <div className="search-container">
      <Paper variant="outlined">
        <div className="search-icon">
          <SearchIcon color="secondary" />
        </div>
        <form onSubmit={handleSubmit}>
          <InputBase
            placeholder={placeholder}
            className="search-input"
            autoFocus
            inputRef={inputRef}
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />

          <Button
            type="submit"
            color="secondary"
            variant="contained"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Search'}
          </Button>
        </form>
      </Paper>
    </div>
  );
};
