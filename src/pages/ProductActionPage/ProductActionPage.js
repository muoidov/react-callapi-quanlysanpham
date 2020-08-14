import React from 'react';
// import callApi from '../../api/apiCaller';
import actAddProductRequest from './../../reducers/product';
import {connect} from 'react-redux';
import { actEditProductRequest, updateProductRequest } from '../../actions/index';
// import products from './../../reducers/product';
class ProductActionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            id: '',
            txtname: '',
            txtprice: '',
            checkstt: ''
        })
    }
    onSave = (e) => {
        e.preventDefault(); var {id, txtname, txtprice, checkstt } = this.state;
        var { history } = this.props;
        var product={
            id:id,
            name:txtname,
            price:txtprice,
            status:checkstt
        }
        if(id){
            this.props.onUpdateProduct(product);

        }else{

        this.props.onAddProduct(product);
        
    }history.goBack();}
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
            };
        }
        componentWillReceiveProps(nextProps){
if(nextProps&&nextProps.itemEditing){
    var{itemEditing}=nextProps;
    this.setState({
        id:itemEditing.id,
        txtname:itemEditing.name,
        txtprice:itemEditing.price,
        checkstt:itemEditing.status
    })
}
        }
    
    render() {
        var { txtname, txtprice, checkstt } = this.state;
        return (

            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form onSubmit={this.onSave}>
                        <div className="form-group">
                            <label >Thong tin san pham</label>
                            <input type="text" className="form-control" placeholder="TEN SP" name="txtname"
                                value={txtname}
                                onChange={this.onChange} />
                            <input type="text" className="form-control" placeholder="Gia" name="txtprice" value={txtprice} onChange={this.onChange} />
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" name="checkstt" value={checkstt} onChange={this.onChange} checked={checkstt}/>
                                Con hang
                            </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
}
const mapStateToProps=state=>{
    return{
        itemEditing:state.itemEditing
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        onAddProduct:(product)=>{
            dispatch(actAddProductRequest(product));
        },
        onEditProduct:(id)=>{
            dispatch(actEditProductRequest(id));
        },
        onUpdateProduct:(product)=>{
            dispatch(updateProductRequest(product));
        }
    };
}

export default connect(mapDispatchToProps,mapStateToProps) (ProductActionPage);
