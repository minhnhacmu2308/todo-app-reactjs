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
      ],
      isShowtaskform:false
    }
  }
  showTaskform=()=>{
   
    this.setState({isShowtaskform:!this.state.isShowtaskform})
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
    console.log(this.state.tasks)
  }
  s4(){
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1)
  }
  generateID(){
    return this.s4()+this.s4()+'-'+this.s4()+'-'+this.s4()+this.s4();
  }
  render() {
    let {tasks,isShowtaskform}=this.state;
    let elemTaskform=isShowtaskform===true?<Taskform showTaskform={this.showTaskform}/>:null
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
            <button
              type="button"
              className="btn btn-danger mt-5"
              onClick={this.onGenerateData}
            >
              <span className="fa fa-plus mr-5"></span>Tạo dữ liệu mẫu
              </button>
            <Control />
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Table tasks={this.state.tasks}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
