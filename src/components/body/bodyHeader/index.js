import React from "react";
import AddDialog from "./addDialog";
import DeleteDialog from "./deleteDialog";
import EditDialog from "./editDialog";
import Button from "@mui/material/Button";
import { ButtonGroup, InputBase } from "@material-ui/core";
import AdvanceSearch from "./advanceSearch";
import TextField from "@mui/material/TextField";
import "./style.css";
import Predict from "./predict";
import RefreshIcon from "@material-ui/icons/Refresh";
import AnalyticsView  from "./analyticsView";
import { Search } from "@material-ui/icons";

function BodyHeader(props){
  console.log(props.currentRow);
  return (
    <div className="parentBodyHeader">
      <ButtonGroup>
        <Predict currentRow={props.currentRow} />
        <AnalyticsView />
        <AdvanceSearch adv_Search={props.adv_Search} />
      </ButtonGroup>

      <Button 
        variant="outlined"
        onClick={() => window.location.reload(false)}
        className="refreshBtn"
        >
        <RefreshIcon/>
        </Button>

      <InputBase
        type="search"
        placeholder={'Search Customer...'}
        onChange={(e) => props.searchItems(e.target.value)}
        className="searchBox"
        size="small"
        startAdornment={<Search/>}
      />

      <ButtonGroup className="btnGrp">
        <AddDialog />
        <EditDialog currentRow={props.currentRow} select={props.select} />
        <DeleteDialog currentRow={props.currentRow} select={props.select} />
      </ButtonGroup>
    </div>
  );
};

export default BodyHeader;
