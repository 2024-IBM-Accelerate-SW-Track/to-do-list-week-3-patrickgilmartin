import React, { Component } from "react";
import { Button, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format } from 'date-fns';

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      due: null, 
    };
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
    });
  };

  handleDateChange = (date) => {
    this.setState({
      due: date ? format(date, 'MM/dd/yyyy') : null,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.content.trim() && this.state.due) {
      this.props.addTodo({
        content: this.state.content,
        due: this.state.due,
      });
      this.setState({
        content: "",
        due: null,
      });
    }
  };

  render() {
    return (
      <div>
        <TextField
          label="Add New Item"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.content} 
          inputProps={{ "data-testid": "new-item-textfield" }}      
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            id="new-item-date"
            label="Due Date"
            value={this.state.due ? new Date(this.state.due) : null}
            onChange={this.handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button
          style={{ marginLeft: "10px" }}
          onClick={this.handleSubmit}
          variant="contained"
          color="primary"
          data-testid="new-item-button"
        >
          Add
        </Button>
      </div>
    );
  }
}

export default AddTodo;
