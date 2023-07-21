import React from 'react';
import { IconButton, Typography, Box } from '@mui/material';

const Day = ({
  startOfRange,
  endOfRange,
  disabled,
  highlighted,
  outlined,
  filled,
  onClick,
  onHover,
  value,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        borderRadius: startOfRange ? '50% 0 0 50%' : endOfRange ? '0 50% 50% 0' : undefined,
        backgroundColor: (theme) => !disabled && highlighted ? theme.palette.primary.light : undefined,
      }}
    >
      <IconButton
        sx={{
          height: '36px',
          width: '36px',
          padding: 0,
          border: (theme) => !disabled && outlined ? `1px solid ${theme.palette.primary.dark}` : undefined,
          ...(!disabled && filled ? {
            '&:hover': {
              backgroundColor: (theme) => theme.palette.primary.dark,
            },
            backgroundColor: (theme) => theme.palette.primary.dark,
          } : {}),
        }}
        disabled={disabled}
        onClick={onClick}
        onMouseOver={onHover}
      >
        <Typography
          sx={{
            lineHeight: 1.6,
            color: (theme) => !disabled
              ? (filled ? theme.palette.primary.contrastText : theme.palette.text.primary)
              : theme.palette.text.secondary,
          }}
          variant="body2"
        >
          {value}
        </Typography>
      </IconButton>
    </Box>
  );
};

export default Day;
