import { Box, Paper, Skeleton, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import { HookContext } from '..';

export default function EmbedPreview({ id }) {
  const { embeds=[], setEmbeds } = useContext(HookContext);
  let holds = [...embeds];
  let i;

  for (i in embeds) {
    if (embeds[i].id == id) {
      holds.splice(i, 1);
      break;
    }
  }

  const thisIndex = i;
  return (
    <Paper>
      <Box>
        <Stack direction="row">
          <Box width={5} bgcolor={embeds[thisIndex]?.color} />
          <Box width="100%" padding={2}>
            <Typography>{embeds[thisIndex]?.title}</Typography>
            <Typography>{embeds[thisIndex]?.desc}</Typography>
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
}
