import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Cancel, Delete } from "@material-ui/icons";
import { Slide } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    // backgroundColor: "#2A3E4C !important",
    // color: "#FFFFFF !important",
    color:"black"
  },
  txtBox: {
    backgroundColor: "#FFFFFF !important",
    borderRadius: "0.3rem !important",
  },
}));

const Transition_left = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function DeleteDialog(props){
  const classes = useStyles();
  console.log(props.select);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDelete = (e) => {
    e.preventDefault();

    const url = `http://localhost:8080/HRC_endgame/DeleteServlet?sl_no=${props.select}`;

    try {
      axios.get(url).then((res) => console.log(res.data));
    } catch (err) {
      console.log(err);
    }
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        variant="contained"
        style={{ color: "white", paddingLeft: "2rem", paddingRight: "2rem", right:"-2rem" }}
        onClick={handleClickOpen}
        disabled={!props.currentRow}
        size="medium"
        startIcon={<Delete/>}
        color="error"
      >
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.dialogPaper }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionComponent={Transition_left}
      >
        <DialogTitle id="alert-dialog-title">{"Delete Records ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"
            style={{ color: "red" }}>
            Deleting the records can not be retrieved.
          </DialogContentText>
          <DialogContentText
            id="alert-dialog-description"
            style={{ color: "black" }}>
            Are you sure you want to delete these record[s] ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button
            onClick={handleDelete}
            variant="outlined"
            color="error"
            startIcon={<Delete />}
          >
            DELETE
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
            startIcon={<Cancel />}
          >
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteDialog;
