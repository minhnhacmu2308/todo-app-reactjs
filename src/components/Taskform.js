import React, { Component } from 'react';

class Taskform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name:'',
            status:false,
        }
    }
    componentWillMount() {
       if(this.props.task){
           this.setState({
               id:this.props.task.id,
               name:this.props.task.name,
               status:this.props.task.status,
           })
       }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.task){
            this.setState({
                id:nextProps.task.id,
                name:nextProps.task.name,
                status:nextProps.task.status,
            })
        }else if(nextProps && nextProps.task===null){
            this.setState({
                id:'',
                name:'',
                status:false,
            })
        }
      }
    onChange =(even)=>{
        let target=even.target;
        let name= target.name;
        let value=target.value;
        if(name==='status'){
            value=target.value==='true'?true:false;
        }
        this.setState({
            [name]:value
        })
    }
    onSubmit =(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.props.showTaskform();
        this.props.onClear();
    }
    onClose=()=>{
        this.props.showTaskform();
    }
    render() {
        let {id}=this.state
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">{id===''?'Thêm Công Việc':'Cập nhật công việc'}</h3>
                    <span onClick={this.props.showTaskform} >Close</span>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input 
                            type="text"
                             className="form-control" 
                             name='name'
                             value={this.state.name}
                             onChange={this.onChange}
                             />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control" required="required"
                         name='status'
                         value={this.state.status}
                         onChange={this.onChange}
                         >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">{id===''?'Thêm':'Lưu lại'}</button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick={this.onClose}>Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Taskform;