
import React,{Component} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import image from './images.png'


import {connect} from 'react-redux' ;
import { add_Reminder,remove_Reminder,clear_Reminder } from "./actions";

import moment from "moment";




class App extends Component{

    state = {
        text:'',
        date:new Date()
    }

     render_Reminder=()=>{
         const {reminders}=this.props;
         return (
             <ul className="list-group">
                 {
                     reminders.map(reminder=>{
                         return (
                             <li key={reminder.id}  className="list-group-item">
                                 <div>{reminder.text}</div>
                                 <div>{moment(new Date(reminder.date)).fromNow()}</div>
                                 <div className=" btn btn-danger closeIcon" onClick={()=>this.props.remove_Reminder(reminder.id)}>X</div>
                             </li>
                         )
                     })
                 }
             </ul>
         )

    }

    render(){
        
        return (
            <div className='App'>
                <img src={image} alt="" />

                <div className='reminder-title'>
                    <h2>What Should You Do?</h2>
                    </div>
                    <form  action="#">
                        <input type="text" placeholder='what do you think ?'
                        className='form-control'
                        onChange={(e)=>{this.setState({text:e.target.value})
                        }} value={this.state.text}/>
                        <br />
                        <input type="datetime-local"  className='form-control' 
                        onChange={(e)=>this.setState({
                            date:e.target.value
                        })} value={this.state.date} />
                        <br />
                        

                        <button 
                        onClick={()=>{
                            this.props.add_Reminder(this.state.text,this.state.date)
                            this.setState({text:'',date:''})
                        }}
                        className=" btn btn-primary w-100">Add Reminders</button>
                        <br />
                        <br />
                        {this.render_Reminder()}


                        <button className=" btn btn-danger w-100 clear-reminder" onClick={()=>this.props.clear_Reminder()}>Clear Reminders</button>

                        

                       


                    </form>
                  
                                
                

            </div>
            
        )
    }
}


function mapStateToProps(state){
    return {
        reminders : state
    }

}
// function mapDispatchToProps(dispatch){
//     return{
//         add_Reminder: () => dispatch({type:'ADD_REMINDER'})
//     }

// }

export default connect(mapStateToProps,{add_Reminder,remove_Reminder,clear_Reminder})(App)
