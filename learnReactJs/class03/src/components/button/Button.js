import * as React from 'react';
import Stack from '@mui/material/Stack';
import ButtonC from '@mui/material/Button';
import { styles } from './ButtonStyle';

export default function Button() {
  return (
    <Stack spacing={2} direction="row">
      <ButtonC variant="outlined" style={styles.button}>Text</ButtonC>
    </Stack>
  );
}