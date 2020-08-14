import React from 'react';
//import callApi from '../../api/apiCaller';
import {Link} from 'react-router-dom';
class ProductItem extends React.Component {
    render() {
        var { pd, id } = this.props;
        var statusName = pd.status === true ? 'Con hang' : 'Het hang';
        var statusClass = pd.status === true ? 'warning' : 'default';
        return (
            <tbody>
                <tr>
                    <td>{id + 1}</td>
                    <td>{pd.id}</td>
                    <td>{pd.name}</td>
                    <td>{pd.price}$</td>
                    <td>
                        <span className={`label label-${statusClass}`}>{statusName}</span>
                    </td>
                    <td>
                        <Link to={`/product/${pd.id}/edit`} className="btn btn-success">EDIT</Link>
                      &nbsp;
                      <button type="button" className="btn btn-warning" onClick={() => this.onDelete(pd.id)}>DELETE</button>
                    </td>
                </tr>
            </tbody>
        );
    }
    onDelete = (id) => {
        
        // eslint-disable-next-line no-restricted-globals
        if(confirm('Ban chac chan xoa?')){
           this.props.onDelete(id);
        }
    }
}

export default ProductItem;
