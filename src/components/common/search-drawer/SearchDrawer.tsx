import { useState } from 'react';
import { useNavigate } from 'react-router';
import dayjs from 'dayjs';

import { Drawer, Button, Box } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import type { PickerValue } from '@mui/x-date-pickers/internals';
import Typography from '@mui/material/Typography';

import AutocompleteInput from '@/components/common/form/autocomplete/AutocompleteInput';

import type { IRecentSearch } from '@/types/index';
import { useSearchDrawerContext } from '@/contexts/SearchDrawerContext';

const SearchDrawer = () => {
  const { open, toggleOpen } = useSearchDrawerContext();
  const [autocompleteValue, setAutocompleteValue] = useState<
    IRecentSearch | null | Pick<IRecentSearch, 'title'>
  >(null);
  const [selectedStartDate, setSelectedStartDate] = useState<string>(dayjs().format('YYYY/MM/DD'));
  const [selectedEndDate, setSelectedEndDate] = useState<string>(
    dayjs().add(1, 'day').format('YYYY/MM/DD'),
  );

  const navigate = useNavigate();

  const getAutocompleteValue = (_event: any, newValue: IRecentSearch | null) => {
    setAutocompleteValue(newValue);
  };

  const getSelectedStartDate = (newValue: PickerValue) => {
    if (newValue && dayjs(newValue).isValid()) {
      setSelectedStartDate(dayjs(newValue).format('YYYY/MM/DD'));
    } else {
      setSelectedStartDate(dayjs().format('YYYY/MM/DD'));
    }
  };

  const getSelectedEndDate = (newValue: PickerValue) => {
    if (newValue && dayjs(newValue).isValid()) {
      setSelectedEndDate(dayjs(newValue).format('YYYY/MM/DD'));
    } else {
      setSelectedEndDate(dayjs().add(1, 'day').format('YYYY/MM/DD'));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toggleOpen();
    navigate('/omnisearch');
  };

  return (
    <Box component={'div'}>
      <Drawer anchor="right" open={open} onClose={toggleOpen}>
        <Box
          sx={{
            width: {
              xs: 300,
              sm: 400,
            },
            padding: 2,
          }}
        >
          <form onSubmit={handleSubmit}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                display: 'flex',
                fontFamily: 'var(--ff-heading)',
                fontWeight: 700,
                color: 'var(--clr-green-700)',
              }}
            >
              Pretrazi
            </Typography>

            {/* AUTOCOMPLETE AND DATEPICKER INPUT */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                justifyContent: 'center',
                marginBlock: 2,
                gap: 2,
              }}
            >
              <AutocompleteInput onChange={getAutocompleteValue} />
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="sr">
                <DesktopDatePicker
                  sx={{
                    width: '100%',
                    '.MuiPickersSectionList-root': {
                      padding: '8px 0',
                    },
                    '.MuiInputAdornment-root .MuiSvgIcon-root': {
                      color: 'var(--clr-green-700)',
                    },
                  }}
                  label="Pocetak putovanja"
                  disablePast
                  value={dayjs(selectedStartDate)}
                  onChange={getSelectedStartDate}
                />
                <DesktopDatePicker
                  sx={{
                    width: '100%',
                    '.MuiPickersSectionList-root': {
                      padding: '8px 0',
                    },
                    '.MuiInputAdornment-root .MuiSvgIcon-root': {
                      color: 'var(--clr-green-700)',
                    },
                  }}
                  label="Kraj putovanja"
                  disablePast
                  value={dayjs(selectedEndDate)}
                  onChange={getSelectedEndDate}
                />
              </LocalizationProvider>
            </Box>

            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: 'var(--clr-brown-500)',
                '&:hover': {
                  backgroundColor: 'var(--clr-brown-700)',
                },
              }}
            >
              Potvrdi
            </Button>
          </form>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SearchDrawer;
