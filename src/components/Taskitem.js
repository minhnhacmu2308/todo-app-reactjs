import React, { Component } from 'react';

class Taskitem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.index+1}</td>
                <td>{this.props.task.name}</td>
                <td className="text-center">
                    <span className={this.props.task.status===true?'label label-danger':'label label-success'}>
                       {this.props.task.status===true?'Kích hoạt':'Ẩn' }
                                        </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning">
                        <span className="fa fa-pencil mr-5"></span>Sửa
                                </button>
                                &nbsp;
                                <button type="button" className="btn btn-danger">
                        <span className="fa fa-trash mr-5"></span>Xóa
                                </button>
                </td>
            </tr>
        );
    }
}

export default Taskitem;