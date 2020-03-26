import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import { fecthProducts } from "../store/productos/action";

import store from "../store";

class Inicio extends Component {
  constructor(props) {
    super(props);

    // console.log("inicio: ", this.props);
    this.state = {
      products: []
    };
  }
  render() {
    // return null;
    return <Products products={this.state.products} />;
    // return <Products products="ola mundo" />;
  }
  componentDidMount() {
    // this.props.dispatch(fecthProducts());

    store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched),
      // we will update local component state and force component to rerender
      // with new data.
      this.setState({ products: store.getState().products });
      console.log("STORE: ", store.getState().products);
      console.log("STATE: ", this.state);
    });
  }

  mapStateToProps = state => ({
    products: this.store.products
  });

  // mapDispatchToProps = {
  //   fecthProducts: this.store.fecthProducts
  // };
}
// export default connect(this.mapStateToProps, this.mapDispatchToProps)(Inicio);
// export default connect(this.mapStateToProps, {})(Inicio);
export default Inicio;
