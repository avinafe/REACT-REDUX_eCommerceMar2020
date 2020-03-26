import React from "react";
import { connect } from "react-redux";

import { fecthProducts } from "../../store/productos/action";

const Products = ({ products: { data } }) => {
  const productosObject = { ...data };
  console.log("PRODUCTS:", Object.values(productosObject));

  // const productosArray = Object.values(productosObject);
  // const test = productosArray[0];
  // console.log("PRODUCTS:", data);

  return (
    <section>
      <h2>Productos</h2>
      <div className="container container-productos">
        {/* {productosArray.map(product => (
          <article>
            <img src="" alt="" />
            <h3>ola</h3>
          </article>
        ))} */}
      </div>
    </section>
  );
};

// const Products = props => {
//   return (
//     <>
//       <h1>{console.log("props: ", props)}</h1>
//       {
//         console.log(props.fecthProducts)
//         props.fecthProducts([])
//       }
//     </>
//   );
// };
// const mapStateToProps = state => ({
//   products: state.products
// });

// const mapDispatchToProps = {
//   fecthProducts: fecthProducts
// };

export default Products;
// export default connect(mapStateToProps, mapDispatchToProps)(Products);
