import React, { Component } from 'react';
import './App.css';
import Taskform from './components/Taskform'
import Control from './components/Control';
import Table from './components/Table';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks:[
      ],
      isShowtaskform:false,
      taskEditting:null
    }
  }
  componentWillMount(){
    if(localStorage && localStorage.getItem('tasklist')){
      var tasks =JSON.parse(localStorage.getItem('tasklist'))
      this.setState({
        tasks: tasks
    })
    }
  }
 
  onGenerateData = () => {
    let tasks = [
      {
        id: this.generateID(),
        name: 'Đi chơi cầu lông',
        status: true
      },
      {
        id: this.generateID(),
        name: 'Đi chơi bóng đá',
        status: false
      },
      {
        id: this.generateID(),
        name: 'Đi chơi bóng chuyền',
        status: true
      },
      {
        id: this.generateID(),
        name: 'Đi chơi bơi lội',
        status: true
      },
    ]
    this.setState({
        tasks: tasks
    })
    localStorage.setItem('tasklist',JSON.stringify(tasks))
  }
  s4(){
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1)
  }
  generateID(){
    return this.s4()+this.s4()+'-'+this.s4()+'-'+this.s4()+this.s4();
  }
  onSubmit=(data)=>{
      let {tasks}=this.state;
      if(data.id===''){
        data.id=this.generateID();
        tasks.push(data);
        this.setState({tasks:tasks});
        localStorage.setItem('tasklist',JSON.stringify(tasks))
      }else{
        let index=this.findIndex(data.id);
        tasks[index]=data;
        this.setState({tasks:tasks,taskEditting:null});
        localStorage.setItem('tasklist',JSON.stringify(tasks))
      }
     
     
  }
  showTaskform=()=>{
    if(this.state.isShowtaskform && this.state.taskEditting!==null){
      this.setState({isShowtaskform:true,taskEditting:null});
    }else{
      this.setState({isShowtaskform:true})
    }
  }
  onClear=()=>{
    this.setState({
      name:'',
      status:false
    })
  }
  onDelete=(data)=>{
    let {tasks}=this.state;
    let index=this.findIndex(data);
     if(index!==-1){
       tasks.splice(index,1)
       this.setState({tasks:tasks});
     }
     localStorage.setItem('tasklist',JSON.stringify(tasks))
  }
  onUpdataStatus=(data)=>{
    let {tasks}=this.state;
    let index=this.findIndex(data);
     if(index!==-1){
       tasks[index].status=!tasks[index].status;
       this.setState({tasks:tasks});
     }
     localStorage.setItem('tasklist',JSON.stringify(tasks))

    
  }
  findIndex =(id)=>{
    let {tasks}=this.state;
    let result=-1;
    tasks.forEach((task,index)=>{
      if(task.id===id){
        result=index;
      }
    });
    return result;
  }
  onCloseForm=()=>{
    this.setState({isShowtaskform:false});
  } 
  onOpenForm=()=>{
    this.setState({isShowtaskform:true});
  }
  onEdit=(data)=>{
    let {tasks}=this.state;
    let index=this.findIndex(data);
    let taskEditting =tasks[index];
    this.setState({taskEditting:taskEditting})
    this.onOpenForm();
  }
  render() {
    let {tasks,isShowtaskform,taskEditting}=this.state;
    let elemTaskform=isShowtaskform===true?<Taskform 
    showTaskform={this.onCloseForm} onSubmit={this.onSubmit} 
     task={taskEditting}
    onClear={this.onClear}/>:null
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {elemTaskform}
          </div>
          <div className={isShowtaskform===true?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button 
            type="button" 
            className="btn btn-primary"
            onClick={this.showTaskform}
            >
              <span 
              className="fa fa-plus mr-5"
              
              ></span>Thêm Công Việc
              </button>
       
            <Control />
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Table tasks={tasks} onEdit={this.onEdit} showTaskform={this.onCloseForm} onUpdataStatus={this.onUpdataStatus} onDelete={this.onDelete}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
