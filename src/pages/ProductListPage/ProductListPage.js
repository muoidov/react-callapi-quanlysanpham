import React from 'react';
import ProductList from './../../components/ProductLis/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {actFetchProductsRequest,actDeleteRequest}  from './../../actions/index';
import products from '../../reducers/product';
// import axios from 'axios';
//import callApi from './../../api/apiCaller';
class ProductListPage extends React.Component {
    
    componentDidMount() {
this.props.fetchAllProducts(products);
    }
    onDelete = (id) => {
      this.props.onDeleteProduct(id);
    }
    findIndex = (products, id) => {
        var rs = -1;
        products.forEach((product, index) => {
            if (product.id === id) {
                rs = index;
            }
        });
        return rs;
    }
    render() {
        var { products } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                <Link to='/product/add' className="btn btn-info">ADD SAN PHAM</Link><br />
                <br />

                <ProductList>
                    {this.showProduct(products)}
                </ProductList>
            </div>
        );
    }
    showProduct = (products) => {
        var rs = null;
        if (products.length > 0) {
            rs = products.map((pd, id) => {
                return (<ProductItem key={id} pd={pd} id={id} onDelete={this.onDelete}></ProductItem>);
            });
        }
        return rs;
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
    }}
    const mapDispatchToProps = (dispatch, props) => {

        return {
            fetchAllProducts: () => {
                dispatch(actFetchProductsRequest());
        
        
        },
        onDeleteProduct : (id)=>{
            dispatch(actDeleteRequest(id));
        }
        }

    }

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
