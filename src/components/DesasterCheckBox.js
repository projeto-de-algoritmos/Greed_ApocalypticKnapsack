import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function DesasterCheckbox(props) {
  const [checked, setChecked] = React.useState([false, false, false, false]);

  React.useEffect(() => {
    const callbackIndicesArray = checked.flatMap((bool, index) => bool ? index : [])
    props.callback(callbackIndicesArray)
  }, [checked])

  const handleZombieChange = (event) => {
    setChecked([event.target.checked, checked[1], checked[2], checked[3]]);
  };

  const handleNuclearAttacksChange = (event) => {
    setChecked([checked[0], event.target.checked, checked[2], checked[3]]);
  };

  const handleAssaultersChange = (event) => {
    setChecked([checked[0], checked[1], event.target.checked, checked[3]]);
  };

  const handleGlobalWarmingChange = (event) => {
    setChecked([checked[0], checked[1], checked[2], event.target.checked]);
  };

  return (
    <Box sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <FormControl
        component="fieldset"
        sx={{ m: 2, alignItems: "center", textAlign: "center" }}
        variant="standard"
      >
        <FormLabel component="legend" sx={{ maxWidth: "95%", height: "auto", alignSelf: "center" }}>Selecione os possíveis desastres pós-apocalípticos</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={checked[0]} onChange={handleZombieChange} name="Zumbis" />
            }
            label="Zumbis"
          />
          <FormControlLabel
            control={
              <Checkbox checked={checked[1]} onChange={handleNuclearAttacksChange} name="Ataques Nucleares" />
            }
            label="Ataques Nucleares"
          />
          <FormControlLabel
            control={
              <Checkbox checked={checked[2]} onChange={handleAssaultersChange} name="Saqueadores" />
            }
            label="Saqueadores"
          />
          <FormControlLabel
            control={
              <Checkbox checked={checked[3]} onChange={handleGlobalWarmingChange} name="Aquecimento Global" />
            }
            label="Aquecimento Global"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}