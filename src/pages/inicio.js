import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../redux";
import Products from "../components/Products";

function Inicio({ fetchProducts }) {
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <Products />
    </div>
  );
}

const mapStateToProps = state => {
  return { productsData: state.products };
};

const mapDispatchToProps = dispatch => {
  return { fetchProducts: () => dispatch(fetchProducts()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Inicio);
