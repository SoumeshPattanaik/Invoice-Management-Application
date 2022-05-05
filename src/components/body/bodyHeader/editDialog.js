import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios'
import { Cancel, Edit } from "@material-ui/icons";
import { Slide } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    backgroundColor: "#ffffff",
    color: "#FFFFFF !important",
  }
}));

const Transition_left = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function EditDialog(props) {
  const classes = useStyles();

  console.log(props.currentRow);
  console.log(props.select);

  const [inv_curr, set_inv_curr] = useState("");
  const [cust_pay_terms, set_cust_pay_terms] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleUpdate = (e) => {
    if(props.select.length > 1){
      alert("Multiple Row Selected");
    }else{
      e.preventDefault();

      const url = `http://localhost:8080/HRC_endgame/EditServlet?sl_no=${props.select[0]}&invoice_currency=${inv_curr}&cust_payment_terms=${cust_pay_terms}`;

      try {
        axios.get(url).then((res) => console.log(res.data));
      } catch (err) {
        console.log(err);
      }
    }
    setOpen(false);
  };

  const handleClose = (e) => {
    e.preventDefault();

    console.log(inv_curr, cust_pay_terms);
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        style={{ color: "white", paddingLeft: "2rem", paddingRight: "2rem", right:'-2rem' }}
        onClick={handleClickOpen}
        disabled={!props.currentRow}
        size="small"
        startIcon={<Edit />}
      >
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.dialogPaper }}
        aria-labelledby="form-dialog-title"
        TransitionComponent={Transition_left}
      >
        <DialogTitle style={{color:"black"}}>EDIT</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off">
            <Grid container spacing={4}>
              <Grid item md={6}>
                <TextField
                  name="inv_curr"
                  variant="outlined"
                  label="Invoice Currency"
                  onChange={(e) => set_inv_curr(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  name="cust_pay_terms"
                  variant="outlined"
                  label="Customer Payment Terms"
                  onChange={(e) => set_cust_pay_terms(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleUpdate}
            variant="outlined"
            color="secondary"
            startIcon={<Edit />}
          >
            EDIT
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            style={{ color: "white", borderColor: "white" }}
            startIcon={<Cancel />}
          >
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditDialog;
