import React, { Component } from "react";
import Aux from "../../hoc/Aux1/Aux1.js";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar.js";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer.js";
class Layout extends Component {
   state={
    showSideDrawer: true
   }
   
    SideDrawerClosedHandler=()=>{
this.setState({showSideDrawer: false})
    }
  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler} />
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
