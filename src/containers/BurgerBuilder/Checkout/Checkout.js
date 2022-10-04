import React, { Component } from "react";
import CheckoutSummary from "../../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 20,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  };
  checkoutCancelledHandler = () => {
    // this.props.history.goBack();
  };
  checkoutContinuedHandler = () => {
    // this.props.history.push("/checkout/contact-data");
    console.log("Continue Pressed on Continue2");
  };
  render() {
    return (
      <div>
        <h1>CHECKOUT PAGE</h1>

        <CheckoutSummary
          ingredients={this.state.ingredientsHandler}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
      </div>
    );
  }
}
export default Checkout;
