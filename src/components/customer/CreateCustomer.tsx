import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TextField, Typography, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
        display: "block"
      },
    },
    wrapper: {
        width:"100%",
    },
    formInput: {
      width: "100%"
    },
    button: {
      margin: theme.spacing(1),
    },
  }),
);

export interface IValues {
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    address: string,
    description: string
}
export interface IFormState {
    [key: string]: any;
    values: IValues[];
    submitSuccess: boolean;
    loading: boolean;
}
const defaultValues: IValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    description: ""
}
function CreateCustomer<RouteComponentProps>() {
    const [values, setValues] = useState(defaultValues as IValues);

    const classes = useStyles();
    
    const handleChange = (event: any) => {
        event.persist();
        setValues(values => ({
            ...values,
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = (event:any) => {
        event.persist();
        axios.post(`http://localhost:5000/customers`, values).then(data => [
              
          ]);
    }

    return ( 
        <div className={classes.root}>
        <div className={classes.wrapper}>
        <TextField
          id="outlined-input"
          name="first_name"
          label="First Name"
          type="text"
          className={classes.formInput}
          variant="outlined"
          onChange={handleChange}
        />
         <TextField
          id="outlined-input"
          name="last_name"
          label="Last Name"
          type="text"
          className={classes.formInput}
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="outlined-input"
          name="email"
          label="Email Address"
          type="email"
          className={classes.formInput}
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="outlined-input"
          name="phone"
          label="Contact Number"
          type="text"
          className={classes.formInput}
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="outlined-input"
          name="address"
          label="Address"
          type="text"
          className={classes.formInput}
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="outlined-input"
          name="description"
          label="Description"
          type="text"
          className={classes.formInput}
          variant="outlined"
          onChange={handleChange}
        />
        <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        onClick={handleSubmit}
      >
        Save
      </Button>
        </div>
      </div>
    )
}

export default withRouter(CreateCustomer);