import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

import { IoSearch } from 'react-icons/io5';

import type { IRecentSearch } from '@/types/index';

// for demo purposes
function sleep(duration: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

// mock recent search
const mockRecentSearch = [
  { title: 'Belgrade' },
  { title: 'Novi Sad' },
  { title: 'Niš' },
  { title: 'Kragujevac' },
];

interface IAutocompleteInputProps {
  onChange: (_event: any, newValue: any) => void;
}

const AutocompleteInput = ({ onChange }: IAutocompleteInputProps) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly IRecentSearch[]>([]);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    (async () => {
      setLoading(true);
      await sleep(1e3); // for demo purposes
      setLoading(false);

      setOptions([...mockRecentSearch]);
    })();
  };

  const handleClose = () => {
    setOpen(false);
    setOptions([]);
  };

  return (
    <Autocomplete
      sx={{ width: '100%' }}
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      onChange={onChange}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={[{ title: 'Pronadji najblize mesto' }, ...options]}
      loading={loading}
      renderOption={(props, option, { index }) => (
        <li
          {...props}
          key={option.title}
          style={{
            borderBottom: index === 0 ? '1px solid var(--clr-slate-400)' : 'none',
            paddingBottom: index === 0 ? '8px' : '6px',
            marginBottom: index === 0 ? '4px' : '0',
          }}
        >
          <IoSearch size={20} color="var(--clr-slate-600)" style={{ marginRight: '8px' }} />
          {option.title}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Pretrazi"
          slotProps={{
            input: {
              ...params.InputProps,
              style: {
                padding: '0 8px',
              },
              startAdornment: (
                <IoSearch size={20} color={'var(--clr-slate-600)'} style={{ marginRight: '8px' }} />
              ),
              endAdornment: (
                <>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            },
          }}
        />
      )}
    />
  );
};

export default AutocompleteInput;
