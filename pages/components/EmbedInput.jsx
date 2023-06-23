import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Paper,
  Stack,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useContext, useState } from 'react';
import { HookContext } from '..';
export default function EmbedInput({ id = 1 }) {
  const { embeds=[], setEmbeds } = useContext(HookContext) || {embeds:[]};
  let i;
  let holds = [...embeds];
 

  for (i in embeds) {
    if (embeds[i].id == id) {
      holds.splice(i, 1);
      break;
    }
  }

  const thisIndex = i;
  const setValue = (title, desc, color) => {
    holds = [...embeds];
    if (title !== undefined) holds[thisIndex].title = title;
    if (desc !== undefined) holds[thisIndex].desc = desc;
    if (color !== undefined) holds[thisIndex].color = color;

    setEmbeds(holds);
  };
  const deleteEmbed = () => {
    holds = [...embeds];
    holds.splice(thisIndex, 1);
    setEmbeds(holds);
  };
  return (
    <Paper>
      <Box>
        <Stack direction="row" spacing={2}>
          <Box width={5} bgcolor={embeds[thisIndex]?.color} />
          <Box width="100%" p={2}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="secondary" />}
              >
                <Typography>Embed {id}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      sx={{ width: 10 / 12 }}
                      id={'embedTitle' + id}
                      name={'embedTitle' + id}
                      label="Title"
                      variant="filled"
                      value={embeds[thisIndex]?.title}
                      onChange={(e) => setValue(e.target.value, undefined)}
                    />
                    <TextField
                      sx={{ width: 2 / 12 }}
                      type="color"
                      label="color"
                      value={embeds[thisIndex]?.color}
                      onChange={(e) =>
                        setValue(undefined, undefined, e.target.value)
                      }
                    />
                  </Stack>
                  <TextField
                    fullWidth
                    id={'embedDesc' + id}
                    name={'embedDesc' + id}
                    label="Descption"
                    variant="filled"
                    multiline
                    rows={5}
                    value={embeds[thisIndex]?.desc}
                    onChange={(e) => setValue(undefined, e.target.value)}
                  />
                </Stack>
              </AccordionDetails>
            </Accordion>
            <Box pt={2} textAlign="end" >
              <Button
                startIcon={<DeleteForeverIcon />}
                variant="contained"
                color="error"
                onClick={() => {
                  deleteEmbed();
                }}
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
}
