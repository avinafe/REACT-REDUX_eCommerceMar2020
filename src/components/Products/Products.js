import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../redux";

function Products({ fetchProducts, productsData }) {
  useEffect(() => {
    fetchProducts();
    // console.log("fetchProducts: ", fetchProducts());
  }, []);

  return productsData.loading ? (
    <h2>Loading...</h2>
  ) : productsData.error ? (
    <h2>{productsData.error}</h2>
  ) : (
    <div>
      <h2>Products List</h2>
      <ol>
        {productsData.products.map(product => (
          <li>{product.character}</li>
        ))}
      </ol>
    </div>
  );
}

const mapStateToProps = state => {
  return { productsData: state.products };
};

const mapDispatchToProps = dispatch => {
  return { fetchProducts: () => dispatch(fetchProducts()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
