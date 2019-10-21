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
import { ThemeContext } from "./contexts/ThemeContext";
import { withLangugaeContext } from "./contexts/LanguageContext";
import Styles from "./styles/NavbarStyles";

const content = {
  english: {
    search: "Search",
    flag: "🇬🇧"
  },
  french: {
    search: "Chercher",
    flag: "🇫🇷"
  },
  spanish: {
    search: "Buscar",
    flag: "🇪🇸"
  }
};

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { classes } = this.props;
    const { isDarkMode, toggleTheme } = this.context;
    const { language } = this.props.languageContext;
    const { search, flag } = content[language];
    return (
      <div className={classes.root}>
        <AppBar color={isDarkMode ? "default" : "primary"} position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inharit">
              <span>{flag}</span>
            </IconButton>
            <Typography className={classes.title} color="inharit" variant="h6">
              App Title
            </Typography>
            <Switch onChange={toggleTheme} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={`${search}...`}
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

export default withLangugaeContext(withStyles(Styles)(Navbar));
