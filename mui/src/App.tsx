import {
  Box,
  FormControl,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  formControl: {
    margin: 4,
    minWidth: 120,
    border: "0",
  },
  selectEmpty: {
    marginTop: 4,
  },
  root: {
    color: "red",
    border: "1px solid black",
    borderRadius: 6,
  },
  select: {
    marginTop: "44px",
    color: "green",
    "& ul": {
      backgroundColor: "#cccccc",
    },
    "& li": {
      fontSize: 12,
    },
  },
});

function App() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <Box p={6}>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          MenuProps={{
            classes: { paper: classes.select },
          }}
          className={classes.root}
          disableUnderline
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default App;
