import { Avatar, Box, Paper, Skeleton, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import { HookContext } from '..';
import EmbedPreview from './EmbedPreview';

export default function Preview() {
  const { hookName, content, embeds, onLoading } = useContext(HookContext);
  return (
    <Box color="white" padding={{ xs: 2, md: 5 }} height="100%">
      <Paper sx={{ padding: 2, height: '100%' }}>
        <Stack direction="row" spacing={2}>
          {!onLoading ? (
            <Avatar src="https://media.discordapp.net/attachments/1118014561778405488/1118831527137132674/0.png" />
          ) : (
            <Skeleton variant="circular" width={40} height={40} />
          )}
          <Stack spacing={1}>
            {!onLoading ? (
              <Typography fontWeight={600}>{hookName}</Typography>
            ) : (
              <Skeleton width={100} variant="rounded" />
            )}
            <Typography>{content}</Typography>
            {embeds
              ? embeds.map((val) => (
                  <EmbedPreview key={'embedsPreview' + val.id} id={val.id} />
                ))
              : ''}
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}
