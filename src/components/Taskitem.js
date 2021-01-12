import React, { Component } from 'react';

class Taskitem extends Component {
 
    onUpdataStatus=()=>{
        this.props.onUpdataStatus(this.props.task.id);
    };
    onDelete=()=>{
        this.props.onDelete(this.props.task.id);
        this.props.showTaskform();
    };
    onEdit=()=>{
        this.props.onEdit(this.props.task.id);
    }
    render() {
        return (
            <tr>
                <td>{this.props.index+1}</td>
                <td>{this.props.task.name}</td>
                <td className="text-center">
                    <span onClick={this.onUpdataStatus} className={this.props.task.status===true?'label label-danger':'label label-success'}>
                       {this.props.task.status===true?'Kích hoạt':'Ẩn' }
                                        </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.onEdit}>
                        <span className="fa fa-pencil mr-5"></span>Sửa
                                </button>
                                &nbsp;
                                <button type="button" onClick={this.onDelete} className="btn btn-danger">
                        <span className="fa fa-trash mr-5" ></span>Xóa
                                </button>
                </td>
            </tr>
        );
    }
}

export default Taskitem;