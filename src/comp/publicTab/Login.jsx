import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import RemoteServices from '../../RemoteServices/RemoteService';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ Open, handleOpenLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleonSubmit = async () => {
    const data = { username: user, password };
    setError('');

    try {
      const res = await RemoteServices.sendLogin(data);
      localStorage.setItem('token', res.access);
      navigate('/admin');
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <Dialog open={Open} maxWidth="xs" fullWidth>
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" textAlign="center" fontWeight="bold">
              OnlineSajha
            </Typography>
            <IconButton onClick={handleOpenLogin} edge="end" color="inherit">
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box display="flex" justifyContent="center" alignItems="center" my={2}>
            <Box
              sx={{
                width: 70,
                height: 70,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                backgroundColor: '#e0e0e0',
                fontWeight: 'bold',
                fontSize: 20,
              }}
            >
              Admin
            </Box>
          </Box>
          {error && (
            <Typography color="error" textAlign="center" mb={2}>
              {error}
            </Typography>
          )}
          <Box component="form">
            <TextField
              fullWidth
              label="User"
              variant="outlined"
              margin="normal"
              placeholder="Enter your username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              margin="normal"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleonSubmit}
            onKeyDown={handleonSubmit}
            sx={{
              width: '100%',
              py: 1.5,
              background: 'linear-gradient(90deg, #8e2de2, #4a00e0)',
              '&:hover': {
                background: 'linear-gradient(90deg, #6b1ecb, #3a00b6)',
              },
            }}
          >
            LOGIN
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

LoginModal.propTypes = {
  Open: PropTypes.bool.isRequired,
  handleOpenLogin: PropTypes.func.isRequired,
};

export default LoginModal;
