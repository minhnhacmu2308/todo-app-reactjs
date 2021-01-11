import React, { Component } from 'react';
import Taskitem from './Taskitem';
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tasks:[
            {
              id:1,
              name: 'Đi chơi cầu lông',
              status: true
            },
            {
              id: 2,
              name: 'Đi chơi bóng đá',
              status: false
            },
            {
              id: 3,
              name: 'Đi chơi bóng chuyền',
              status: true
            },
            {
              id: 4,
              name: 'Đi chơi bơi lội',
              status: true
            },
          ]
        }
      }
    render() {
        var { Tasks }=this.props;
        var elementTasks=this.props.tasks.map((task,index)=>{
            return <Taskitem key={task.id} index={index} task={task}/>
        })
        return (
            <table className="table table-bordered table-hover mt-15">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input type="text" className="form-control" />
                        </td>
                        <td>
                            <select className="form-control">
                                <option value="-1">Tất Cả</option>
                                <option value="0">Ẩn</option>
                                <option value="1">Kích Hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                   {elementTasks}
                   
                </tbody>
            </table>
        );
    }
}

export default Table;