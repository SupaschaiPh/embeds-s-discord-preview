import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import Head from 'next/head';
import { createContext, useState } from 'react';
import styles from '../styles/Home.module.css';
import Layout from './components/Layout';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import EmbedInput from './components/EmbedInput';
import Navbar from './components/Navbar';

export const HookContext = createContext({});


export default function Home() {
  const [hookUrl, setHookUrl] = useState('');
  const [hookName, setHookName] = useState('Hook');
  const [content, setContent] = useState('');
  const [embeds, setEmbeds] = useState([]);
  const [id, setId] = useState(0);
  const [onLoading,setOnLoading] = useState(false)

  const fetchHookUrl = async (url)=>{
    setOnLoading(true)
    try{
    let hookData = await fetch(url)
    let res = await hookData.json()
    setHookName(res.name)
    
    }catch{}
    finally{
      setOnLoading(false)
    }
  }

  const submitMessage = ()=>{
    let body = {}
    body["name"] = hookName
    body["content"] = content
    let holdEmdeds= new Array()
    for(let i of embeds){
      holdEmdeds.push({
          title:i.title,
          description:i.desc,
          color: parseInt(i.color.slice(1),16)
        }
      )
    }
    body["embeds"]= [...holdEmdeds]
    console.log(JSON.stringify(body))

    fetch(
      hookUrl,{
        method:'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    )
  }

  const hookStore = {
    hookName: hookName,
    setHookName: setHookName,
    content: content,
    setContent: setContent,
    embeds:embeds,
    setEmbeds:setEmbeds,
    onLoading:onLoading
  };

  return (
    <HookContext.Provider value={hookStore}>
      <Layout>
        <Box
          height="100%"
          color="white"
          bgcolor="#313338"
          component="form"
          padding={2}
        >
          <Typography variant="h5" fontWeight={700}>
            Input Data Zone
          </Typography>
          <Stack spacing={2} pt={2}>
            <TextField
              color="primary"
              type="url"
              required
              fullWidth
              label="Hook URL"
              id="hookurl"
              name="hookurl"
              variant="filled"
              value={hookUrl}
              onChange={(e) => {
                setHookUrl(e.target.value);
                fetchHookUrl(e.target.value)
              }}
            />
            <TextField
              color="primary"
              fullWidth
              label="Name"
              id="name"
              name="name"
              variant="filled"
              value={hookName}
              onChange={(e) => {
                setHookName(e.target.value);
              }}
            />
            <TextField
              id="desc"
              name="desc"
              label="Content"
              multiline
              rows={10}
              variant="filled"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
            <Box>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography color="white">Embed</Typography>
                <Button
                  variant="contained"
                  startIcon={<AddCircleOutlineRoundedIcon />}
                  onClick={async () => {
                    setEmbeds([...embeds, {id:id,title:"",desc:"",color:"#5864f2"}]);
                    setId(id + 1);
                  }}
                >
                  Add Embed
                </Button>
              </Stack>
              <Stack spacing={2}>{
              embeds ? embeds?.map(
                (val)=><EmbedInput id={val.id} key={val.id} />
              ): ""
              }</Stack>
            </Box>
            <Button onClick={()=>{submitMessage()}} variant="contained">
              Submit
            </Button>
          </Stack>
        </Box>
      </Layout>
    </HookContext.Provider>
  );
}
