import React from 'react';


class ProductList extends React.Component {
    render() {
        return (
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Danh sach san pham</h3>
              </div>
            <div className="container">
                <div className="panel-body">

                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Ma SP</th>
                                <th>Ten</th>
                                <th>Gia</th><th>Trang thai</th><th>ACTION</th>
                            </tr>
                        </thead>
                        {this.props.children}
                    </table>

                </div>
            </div></div>
        );
    }
}

export default ProductList;
