import React, { useState } from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const TodoList = () => {
  const BoxStyle = {
    padding: '15px'
  }
  const CardStyle = {
    margin: '20px'
  }
 
  const [tasks, setTasks] = useState([]);

  const [value, setValue] = useState("");
  const updateTask = (e) => {
    setValue(e.target.value);
  };
  const addList = () => {
    if (value.trim() === "") {
      return;
    }
    
    const newTasks = [
      ...tasks,
      { value: value, id: crypto.randomUUID() },
    ]; 
    setTasks(newTasks);
    setValue("");
  };

const deleteButton = (taskId) => {
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
setTasks(updatedTasks)
}

  return (
    <div>
      <h1>Список дел:</h1>
       <Box style={BoxStyle}>
        <TextField
          fullWidth
          label="Новая задача"
          id="task"
          onChange={updateTask}
          value={value}
        />
         <Stack spacing={2} direction="row">
          <Button onClick={addList} variant="contained">Добавить в список
          </Button>
          </Stack>
          <ul>
      {tasks.map((object) => (
        <Card style={CardStyle} sx={{ maxWidth: 500 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
         Новая задача
        </Typography>
        <Typography variant="h5" component="div">
        <p id={object.id}>{object.value}</p>
        </Typography>       
      </CardContent>
      <CardActions>

       <IconButton aria-label="delete" id={object.id} size="small" onClick={() => deleteButton(object.id)}>
        <DeleteIcon />
      </IconButton>
     
         
      </CardActions>
    </Card>
      ))}
      </ul> 
      </Box>

      


    </div>
  )
}

export default TodoList
