import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { AboutTeamCardBack } from './AboutTeamCardBack';
import { AboutTeamCardFront } from './AboutTeamCardFront';
import { cardData } from './data';
import { spacing } from '@/constants';

export function AboutTeamCard() {
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Grid container columns={6} spacing={spacing}>
      {cardData.map(({ imageUrl, name, role, description }, index) => (
        <Grid item xs={6} md={3} lg={2} key={index} mt={spacing}>
          <Card>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'between',
                position: 'relative',
                gap: 0.5,
                mb: 5,
                minHeight: 250,
              }}
            >
              {openCardIndex !== index ? (
                <AboutTeamCardFront
                  imageUrl={imageUrl}
                  name={name}
                  role={role}
                />
              ) : (
                <AboutTeamCardBack name={name} description={description} />
              )}
              <IconButton
                color="primary"
                onClick={() => handleClick(index)}
                sx={{
                  position: 'absolute',
                  bottom: '-40px',
                  transform: openCardIndex === index ? 'rotate(45deg)' : 'none',
                  transition: 'transform 0.2s ease-out',
                }}
              >
                <AddCircleIcon sx={{ fontSize: 50 }} />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
