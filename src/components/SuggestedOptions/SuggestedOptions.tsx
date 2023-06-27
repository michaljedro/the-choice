import React from 'react';
import { Option } from '@/types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { defaultOptions } from './data';
import { OptionIcon } from './OptionIcon';

type Props = {
  readonly onPresetPick: (options: Option[]) => void;
};

export function SuggestedOptions({ onPresetPick }: Props) {
  return (
    <Accordion elevation={0} disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="suggested-options-panel-content"
        id="suggested-options-panel-header"
      >
        <Typography>…or use our presets</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
        <List sx={{ width: '100%' }}>
          {defaultOptions.map(({ name, title, description, icon, options }) => {
            return (
              <ListItemButton key={name} onClick={() => onPresetPick(options)}>
                <ListItemAvatar>
                  <Avatar>
                    <OptionIcon icon={icon} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={title} secondary={description} />
              </ListItemButton>
            );
          })}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
