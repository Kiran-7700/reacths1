import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      Department: "",
      Rating: "",
      allEntry:[] 
    };
  }

  submitForm=(e)=>{
    e.preventDefault();
    const newEntry={Name:this.state.name,
                    Department:this.state.Department,
                    Rating:this.state.Rating};

    this.setState({
        allEntry:[...this.state.allEntry,newEntry]
    })
   
  }

  render() {
    return (
      <div className="fullPage">
        <form onSubmit={this.submitForm}>
          <div className="Form">
            <h1 className="heading">EMPLOYEE &nbsp; FEEDBACK &nbsp; FORM</h1>
            <br />
            <label> Name :</label>
            <input
              type="text"
              autoComplete="off"
              value={this.state.name}
              name="name"
              onChange={(e)=>this.setState({name:e.target.value})}
            />
            <br /> <br />
            <label> Department :</label>
            <input
              type="text"
              autoComplete="off"
              value={this.state.Department}
              name="Department"
              onChange={(e)=>this.setState({Department:e.target.value})}
            />
            <br /> <br />
            <label> Rating :</label>
            <input
              type="number"
              autoComplete="off"
              value={this.state.Rating}
              name="number"
              onChange={(e)=>this.setState({Rating:e.target.value})}
            />
            <br /> <br /> <br />
            <button type="submit">Submit</button>
          </div>
        </form>

        <div className="container">
            {
                this.state.allEntry.map((curr)=>{
                   return(
                    <div className="show">
                       <p>Name: <span>{curr.Name} |  &nbsp;</span> </p> 
                       <p>Department : <span>{curr.Department} |  &nbsp;</span>
                        </p> 
                       <p> Rating : <span>{curr.Rating}  &nbsp;</span></p>
                    </div>
                   )
                })
            }
        </div>
      </div>
    );
  }
}

export default Form;
