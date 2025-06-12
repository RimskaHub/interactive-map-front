import { Box, Container, Typography, Link, IconButton, Divider } from '@mui/material';
import dayjs from 'dayjs';

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export const Footer = () => {
  const currentYear = dayjs().get('year');

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'var(--clr-brand-500)',
        color: 'white',
        py: { xs: 3, sm: 4 },
        mt: 'auto',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            gap: { xs: 3, sm: 4 },
          }}
        >
          {/* Company Info */}
          <Box
            sx={{
              flex: { xs: '1', md: '2' },
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: { xs: 'none', md: 'lg' },
            }}
          >
            <Typography variant="h6" gutterBottom>
              Omnimap
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 2,
                fontSize: { xs: '0.875rem', sm: '1rem' },
                lineHeight: 1.5,
              }}
            >
              Interaktivna kartografska aplikacija. Istražujte, navigirajte i otkrivajte sa našom
              moćnom platformom za mapiranje.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                justifyContent: { xs: 'center', md: 'flex-start' },
                flexWrap: 'wrap',
              }}
            >
              <IconButton color="inherit" aria-label="GitHub" sx={{ p: { xs: 1, sm: 1.5 } }}>
                <FaGithub />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn" sx={{ p: { xs: 1, sm: 1.5 } }}>
                <FaLinkedin />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter" sx={{ p: { xs: 1, sm: 1.5 } }}>
                <FaTwitter />
              </IconButton>
            </Box>
          </Box>

          {/* Links Section - Stack on mobile/tablet, row on desktop */}
          <Box
            sx={{
              flex: { xs: '1', md: '3' },
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row', md: 'row' },
              gap: { xs: 3, sm: 4 },
              justifyContent: { xs: 'flex-start', md: 'center' },
            }}
          >
            {/* Quick Links */}
            <Box
              sx={{
                flex: '1',
                textAlign: { xs: 'center', lg: 'left' },
                minWidth: { xs: 'auto', sm: '150px' },
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
              >
                Brzi linkovi
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link
                  color="inherit"
                  href="/"
                  underline="hover"
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    color: 'white',
                    '&:hover': {
                      color: 'var(--clr-slate-600)',
                    },
                  }}
                >
                  Početna
                </Link>
                <Link
                  color="inherit"
                  href="/maps"
                  underline="hover"
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    color: 'white',
                    '&:hover': {
                      color: 'var(--clr-slate-600)',
                    },
                  }}
                >
                  Mape
                </Link>
                <Link
                  color="inherit"
                  href="/features"
                  underline="hover"
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    color: 'white',
                    '&:hover': {
                      color: 'var(--clr-slate-600)',
                    },
                  }}
                >
                  Funkcionalnosti
                </Link>
                <Link
                  color="inherit"
                  href="/about"
                  underline="hover"
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    color: 'white',
                    '&:hover': {
                      color: 'var(--clr-slate-600)',
                    },
                  }}
                >
                  O nama
                </Link>
              </Box>
            </Box>

            {/* Support */}
            <Box
              sx={{
                flex: '1',
                textAlign: { xs: 'center', lg: 'left' },
                minWidth: { xs: 'auto', sm: '150px' },
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
              >
                Podrška
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link
                  color="inherit"
                  href="/help"
                  underline="hover"
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    color: 'white',
                    '&:hover': {
                      color: 'var(--clr-slate-600)',
                    },
                  }}
                >
                  Centar za pomoć
                </Link>
                <Link
                  color="inherit"
                  href="/docs"
                  underline="hover"
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    color: 'white',
                    '&:hover': {
                      color: 'var(--clr-slate-600)',
                    },
                  }}
                >
                  Dokumentacija
                </Link>
                <Link
                  color="inherit"
                  href="/contact"
                  underline="hover"
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    color: 'white',
                    '&:hover': {
                      color: 'var(--clr-slate-600)',
                    },
                  }}
                >
                  Kontaktirajte nas
                </Link>
                <Link
                  color="inherit"
                  href="/faq"
                  underline="hover"
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    color: 'white',
                    '&:hover': {
                      color: 'var(--clr-slate-600)',
                    },
                  }}
                >
                  Česta pitanja
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Contact Info */}
          <Box
            sx={{
              flex: { xs: '1', md: '2' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
              Kontakt
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                alignItems: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  flexWrap: { xs: 'wrap', sm: 'nowrap' },
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                <FaEnvelope size={16} />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    wordBreak: { xs: 'break-all', sm: 'normal' },
                  }}
                >
                  podrska@omnimap.com
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                <FaPhone size={16} />
                <Typography variant="body2" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                  +381 (0)11 123-4567
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: { xs: 'center', sm: 'flex-start' },
                  gap: 1,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                <Box sx={{ mt: { xs: 0, sm: 0.5 } }}>
                  <FaMapMarkerAlt size={16} />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    lineHeight: 1.4,
                  }}
                >
                  Rimska 1, Beograd, Srbija 11000
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider
          sx={{
            my: { xs: 2, sm: 3 },
            bgcolor: 'rgba(255, 255, 255, 0.2)',
          }}
        />

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: { xs: 2, sm: 1 },
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem' },
              order: { xs: 2, sm: 1 },
            }}
          >
            © {currentYear} Omnimap. Sva prava zadržana.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 1, sm: 2 },
              flexWrap: 'wrap',
              justifyContent: 'center',
              order: { xs: 1, sm: 2 },
            }}
          >
            <Link
              color="inherit"
              href="/privacy"
              underline="hover"
              sx={{
                fontSize: { xs: '0.875rem', sm: '1rem' },
                color: 'white',
                '&:hover': {
                  color: 'var(--clr-slate-600)',
                },
              }}
            >
              Politika privatnosti
            </Link>
            <Link
              color="inherit"
              href="/terms"
              underline="hover"
              sx={{
                fontSize: { xs: '0.875rem', sm: '1rem' },
                color: 'white',
                '&:hover': {
                  color: 'var(--clr-slate-600)',
                },
              }}
            >
              Uslovi korišćenja
            </Link>
            <Link
              color="inherit"
              href="/cookies"
              underline="hover"
              sx={{
                fontSize: { xs: '0.875rem', sm: '1rem' },
                color: 'white',
                '&:hover': {
                  color: 'var(--clr-slate-600)',
                },
              }}
            >
              Politika kolačića
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
