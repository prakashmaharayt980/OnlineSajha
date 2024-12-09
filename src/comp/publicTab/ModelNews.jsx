import React, { useState } from 'react';
import { Dialog, DialogContent } from '@mui/material';

const ModalAds = ({ AdsHomeData }) => {
  const [isOpen, setIsOpen] = useState(true);

  const { image } = AdsHomeData[0];
  const base = import.meta.env.VITE_API_BASE_URL_IMAGE;

  return (
    <Dialog 
      open={isOpen} 
      onClose={() => setIsOpen(false)}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          overflow: 'visible',
        }
      }}
    >
      <DialogContent 
        sx={{
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          borderRadius: 2,
          overflow: 'visible',
        }}
      >
        <button 
          onClick={() => setIsOpen(false)}
          style={{
            position: 'absolute',
            top: -40,
            right: 0,
            zIndex: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            color: '#000',
            borderRadius: '20px',
            padding: '8px 16px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.7)'}
        >
          Skip
        </button>

        <img 
          src={base + image} 
          alt="Advertisement"
          style={{
            maxWidth: '100%',
            maxHeight: '90vh',
            objectFit: 'contain',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalAds;