import React, { useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Switch
} from "@material-ui/core";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext} from "./contexts/LanguageContext";
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

function Navbar(props) {
    const { classes } = props;
    const { isDarkMode, toggleTheme } = useContext(ThemeContext); 
  const { language } = useContext(LanguageContext); 
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

export default withStyles(Styles)(Navbar);
