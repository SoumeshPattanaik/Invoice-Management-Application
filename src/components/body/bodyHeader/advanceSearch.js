import React,{useState} from 'react'
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Slide } from '@mui/material';
import { Cancel, Search } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    color:"black"
  },
  txtBox: {
    backgroundColor: "#FFFFFF !important",
    borderRadius: "0.3rem !important",
  },
}));

const Transition_right = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

function AdvanceSearch(props){
    const classes = useStyles();
    const [doc_id,set_doc_id] = useState("");
    const [inv_id,set_inv_id] = useState("");
    const [cust_num,set_cust_num] = useState("");
    const [bus_year,set_bus_year] = useState("");

    const [open, setOpen] = useState(false);

    const handleSearch = () =>{
      const advSearch_arr = [];
      advSearch_arr.push(doc_id);
      advSearch_arr.push(inv_id);
      advSearch_arr.push(cust_num);
      advSearch_arr.push(bus_year);
      console.log(advSearch_arr);
      props.adv_Search(advSearch_arr);
      setOpen(false)
    }

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
  return (
    <>
      <Button
        variant="outlined"
        style={{ color: "white", paddingLeft: "0.9rem", paddingRight: "0.9rem" }}
        onClick={handleClickOpen}
        size="medium"
      >
        Advance Search
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.dialogPaper }}
        aria-labelledby="form-dialog-title"
        TransitionComponent={Transition_right}
      >
        <DialogTitle>Advance Search</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item md={6}>
                <TextField
                  name="doc_id"
                  variant="outlined"
                  label="Document ID"
                  onChange={(e) => set_doc_id(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  name="inv_id"
                  variant="outlined"
                  label="Invoice ID"
                  onChange={(e) => set_inv_id(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  name="cust_num"
                  variant="outlined"
                  label="Customer Number"
                  onChange={(e) => set_cust_num(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  name="bus_year"
                  variant="outlined"
                  label="Business Year"
                  onChange={(e) => set_bus_year(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSearch}
            variant="outlined"
            color="warning"
            startIcon={<Search />}
          >
            SEARCH
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            startIcon={<Cancel />}
          >
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );

 }

 export default AdvanceSearch