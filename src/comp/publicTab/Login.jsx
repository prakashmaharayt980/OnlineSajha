import  { useState } from 'react';
import PropTypes from 'prop-types';  // For prop validation
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
import CloseIcon from '@mui/icons-material/Close'; // Importing close icon
import RemoteServices from '../../RemoteServices/RemoteService';
import { useNavigate } from 'react-router-dom';
const LoginModal = ({ Open, handleOpenLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const navigate=useNavigate()
 const handleonSubmit = async() => {
  const data={username:email,password};
  await  RemoteServices.sendLogin(data).then((res)=>{
        console.log(res);
        localStorage.setItem("token",res.access);
        navigate("/admin");
    })
 }
  return (
    <div>
      {/* Login Modal */}
      <Dialog open={Open}  maxWidth="xs" fullWidth>
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" textAlign="center" fontWeight="bold">
              OnlineSajha
            </Typography>
            {/* Close Button */}
            <IconButton onClick={handleOpenLogin} edge="end" color="inherit">
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            my={2}
          >
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
          <Box component="form">
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              margin="normal"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
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

// Prop validation
LoginModal.propTypes = {
  Open: PropTypes.bool.isRequired, // Modal open state (Boolean)
  handleOpenLogin: PropTypes.func.isRequired, // Function to handle modal open/close
};

export default LoginModal;
