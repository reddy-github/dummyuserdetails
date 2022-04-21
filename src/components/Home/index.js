import { Drawer } from "@mui/material";
import { Component } from "react";


import './index.css'

class Home extends Component { 
    state = {
        
        open:false,
        
      }

    toggle=()=>{
        let {toggle1}=this.state;
        this.setState({open:!this.state.open});
    }
    toggle=()=>{
        let {toggle2}=this.state;
        this.setState({open:!this.state.open});
    }
    
 

    render() {

    return ( 
        <div className="container">
            <div order="1">
                <iframe src="http://localhost:3004/data" title="data"  class="responsive-iframe" >
                </iframe>
            </div>
            <div  order="2"className="sider-bar">
            
                <div>
                   <h1 className="view" onClick={this.toggle}>Profile</h1>
                   <Drawer 
                    onClose={this.toggle}
                   open={this.state.open}
                   direction="left"
                   anchor="right"
                   >
                       <h1>profile</h1>
                    </Drawer>
                   
                   
                        <h1 className="view" onClick={this.toggle}>Post</h1>
                   <Drawer 
                        onClose={this.toggle}
                        open={this.state.open}
                             direction="left"
                            anchor="right"
                   >
                       <h1>Post</h1>
                    </Drawer>
                   
               
            </div>
        </div></div>
    )}
}

export default Home


//https://jsonplaceholder.typicode.com/users


//https://jsonplaceholder.typicode.com/posts?userId=1
