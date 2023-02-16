import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import TranslateIcon from '@mui/icons-material/Translate';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

import { Option } from '../types';

const languageOptions = [
  'English',
  'Mandarin Chinese',
  'Hindi',
  'Spanish',
  'French',
  'Standard Arabic',
  'Bengali',
  'Russian',
  'Portuguese',
  'Indonesian',
];

const skillsToLearnOptions = [
  'App Development (Programming)',
  'Copywriting',
  'UX and UI Design',
  'Video Game Development',
  'Digital Marketing & SEO',
  'Data Science',
  'Social Media Marketing & Management',
  'Product Design',
  'Video Editing',
  'eCommerce',
  'Business Analytics',
];

const freeTimeOptions = [
  'Reading',
  'Journaling/Writing',
  'Writing Poetry',
  'Performing Slam Poetry',
  'Sewing',
  'Walking',
  'Gardening',
  'Bird-Watching',
  'Painting',
  'Drawing',
  'Cooking',
  'Genealogy',
  'Become an Expert',
  'Jewelry-Making',
  'Guitar',
  'Card Tricks',
  'Play Cards',
  'Star-Gazing',
  'Fishing',
  'Photography',
  'Chess',
  'Whittling',
  'Puzzles',
  'Coding',
  'Dancing',
  'Scrapbooking',
  'Pinterest',
  'Raise Chickens',
  'Homesteading',
  'Papier Mache',
  'Origami',
  'Whistling',
  'Singing',
  'Make Recycled Art',
  'Blogging',
];

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
          <ListItemButton onClick={() => onPresetPick(languageOptions)}>
            <ListItemAvatar>
              <Avatar>
                <TranslateIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Languages to learn"
              secondary="Pick across most commonly used languages…"
            />
          </ListItemButton>
          <ListItemButton onClick={() => onPresetPick(skillsToLearnOptions)}>
            <ListItemAvatar>
              <Avatar>
                <DownhillSkiingIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Skills to acquire"
              secondary="Want to learn a new skill but don't know which one is best for you?"
            />
          </ListItemButton>
          <ListItemButton onClick={() => onPresetPick(freeTimeOptions)}>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Free time options"
              secondary="If you wonder how to spend your next hour or more, pick this one!"
            />
          </ListItemButton>
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
