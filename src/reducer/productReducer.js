const productListReducer = (
  state = { products: [], loading: false, error: null },
  action
) => {
  switch (action.type) {
    case "PRODUCT_LIST_REQUEST":
      return { ...state, loading: true };
    case "PRODUCT_LIST_SUCCESS":
      return { loading: false, products: action.payload };
    case "PRODUCT_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const productDetailsReducer = (
  state = { product: {}, loading: false, error: null },
  action
) => {
  switch (action.type) {
    case "PRODUCT_DETAIL_REQUEST":
      return { ...state, loading: true };
    case "PRODUCT_DETAIL_SUCCESS":
      return { loading: false, product: action.payload };
    case "PRODUCT_DETAIL_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export { productListReducer, productDetailsReducer };
