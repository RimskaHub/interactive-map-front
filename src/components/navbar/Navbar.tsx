import { useState } from 'react';
import dayjs from 'dayjs';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { IoMenuSharp } from 'react-icons/io5';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import type { PickerValue } from '@mui/x-date-pickers/internals';

import { FaHeart, FaComments, FaShoppingCart, FaCalendarCheck } from 'react-icons/fa';
import { FaUser, FaCreditCard, FaSignOutAlt } from 'react-icons/fa';

import AutocompleteInput from '@/components/form/autocomplete/AutocompleteInput';

import type { IRecentSearch } from '@/types/index';

const pages = ['Lista Zelja', 'Forum', 'Korpa', 'Rezervacije'];
const settings = ['Profil', 'Placanje', 'Odjavi se'];

// Mapirajte stringove sa ikonama
const pageIcons = {
  'Lista Zelja': FaHeart,
  Forum: FaComments,
  Korpa: FaShoppingCart,
  Rezervacije: FaCalendarCheck,
};

const settingIcons = {
  Profil: FaUser,
  Placanje: FaCreditCard,
  'Odjavi se': FaSignOutAlt,
};

// when the login feature is done, use context
const isLogged = true;

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [autocompleteValue, setAutocompleteValue] = useState<IRecentSearch | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>(dayjs().format('YYYY/MM/DD'));

  const getAutocompleteValue = (_event: any, newValue: IRecentSearch | null) => {
    setAutocompleteValue(newValue);
    console.log(autocompleteValue);
  };

  const getSelectedDate = (newValue: PickerValue) => {
    if (newValue && dayjs(newValue).isValid()) {
      setSelectedDate(dayjs(newValue).format('YYYY/MM/DD'));
    } else {
      setSelectedDate(dayjs().format('YYYY/MM/DD'));
    }
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'var(--clr-brand-500)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* DESKTOP LOGO */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'var(--ff-heading), monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'var(--clr-slate-600)',
              textDecoration: 'none',
              '&:hover': {
                color: 'white',
              },
            }}
          >
            RimskaHub
          </Typography>

          {/* MOBILE BURGER MENU AND LOGO */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <IoMenuSharp size={30} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => {
                const IconComponent = pageIcons[page as keyof typeof pageIcons];
                return (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <IconComponent size={20} />
                      <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                    </Box>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          {/* AUTOCOMPLETE AND DATEPICKER INPUT */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
            <AutocompleteInput onChange={getAutocompleteValue} />
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="sr">
              <DesktopDatePicker
                sx={{
                  '.MuiPickersSectionList-root': {
                    padding: '8px 0',
                  },
                  '.MuiInputAdornment-root .MuiSvgIcon-root': {
                    color: 'var(--clr-slate-600)',
                  },
                }}
                disablePast
                value={dayjs(selectedDate)}
                onChange={getSelectedDate}
              />
            </LocalizationProvider>
          </Box>

          {/* DESKTOP MENU */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: 2 }}>
            {pages.map((page) => {
              const IconComponent = pageIcons[page as keyof typeof pageIcons];
              return (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <IconComponent size={20} />
                  {page}
                </Button>
              );
            })}
          </Box>

          {/* USER SETTINGS */}
          <Box sx={{ flexGrow: 0, ml: 2 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Rimska Hub" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {isLogged ? (
                settings.map((setting) => {
                  const IconComponent = settingIcons[setting as keyof typeof settingIcons];
                  return (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconComponent size={20} />
                        <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                      </Box>
                    </MenuItem>
                  );
                })
              ) : (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>Uloguj se ili se prijavi</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
