import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import { flag, code, name, countries } from "country-emoji";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Switch
} from "@material-ui/core";
import Styles from "./styles/NavbarStyles";

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar color="primary" position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inharit">
              <span>{flag("spain")}</span>
            </IconButton>
            <Typography className={classes.title} color="inharit" variant="h6">
              App Title
            </Typography>
            <Switch />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="search..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(Styles)(Navbar);
