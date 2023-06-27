import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { CriterionSubmit } from '@/types';

const otherCriterion = 'Other';
const criteria = [
  'I want to pick the option that allows me to meet my deadline',
  'I want to pick the option that makes me feel the most emotionally satisfied',
  'I want to pick the option that aligns with my personal sense of morality or ethics',
  otherCriterion,
] as const;

const validationSchema = yup.object({
  criterion: yup
    .string()
    .required('Pick one of predefined criteria or add your own…'),
  customCriterion: yup
    .string()
    .min(3, 'Custom criterion should be of minimum 3 characters long')
    .when('criterion', {
      is: (criterion: string) => criterion === otherCriterion,
      then: (schema) => schema.required('Field is required'),
    }),
});

type Props = {
  readonly onCriterionSubmit: (criterion: CriterionSubmit) => void;
};

export function CriterionForm({
  onCriterionSubmit,
}: Props): React.ReactElement {
  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      criterion: '',
      customCriterion: '',
    },
    validationSchema,
    onSubmit: (values) => {
      if (values.criterion === otherCriterion) {
        onCriterionSubmit(values.customCriterion.trim());
        return;
      }
      const criterion = criteria.find((c) => c === values.criterion);
      onCriterionSubmit(criterion ?? null);
    },
  });

  const hasCriterionError = touched.criterion && !!errors.criterion;
  const hasCustomCriterionError =
    touched.customCriterion && !!errors.customCriterion;

  const handleSkipClick = () => {
    onCriterionSubmit(null);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        error={hasCriterionError || hasCustomCriterionError}
        variant="standard"
        fullWidth
      >
        <FormLabel id="criterion-radios">
          Pick a criterion you want to use in decision making process
        </FormLabel>
        <RadioGroup
          aria-labelledby="criterion-radios"
          name="criterion"
          value={values.criterion}
          onChange={handleChange}
        >
          {criteria.map((criterion) => (
            <FormControlLabel
              key={criterion}
              value={criterion}
              control={<Radio />}
              label={criterion}
            />
          ))}
          {values.criterion === otherCriterion && (
            <TextField
              name="customCriterion"
              label="Custom criterion"
              variant="outlined"
              placeholder="I want to pick…"
              autoFocus
              fullWidth
              value={values.customCriterion}
              onChange={handleChange}
              helperText={touched.customCriterion && errors.customCriterion}
              error={hasCustomCriterionError}
            />
          )}
        </RadioGroup>
        <FormHelperText error={hasCriterionError}>
          {errors.criterion}
        </FormHelperText>
        <Box sx={{ display: 'flex', justifyContent: 'end', gap: 2 }}>
          <Button onClick={handleSkipClick}>Skip</Button>
          <Button type="submit" variant="contained">
            Next
          </Button>
        </Box>
      </FormControl>
    </form>
  );
}
