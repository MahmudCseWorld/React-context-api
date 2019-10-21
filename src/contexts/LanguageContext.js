import React, { Component, createContext } from "react";

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
  state = {
    language: "english"
  };

  languageChange = e => {
    this.setState({
      language: e.target.value
    });
  };

  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, languageChange: this.languageChange }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export const withLangugaeContext = Component => props => (
  <LanguageContext.Consumer>
    {value => <Component languageContext={value} {...props} />}
  </LanguageContext.Consumer>
);
