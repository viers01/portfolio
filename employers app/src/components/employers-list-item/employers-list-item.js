import { render } from "@testing-library/react";
import { Component } from "react/cjs/react.production.min";

class EmployersListItem extends Component {
  constructor (props){
    super(props);
    this.state = { 
      getIncrease: false,
    }
  }

  clickHandler = () => {
    this.setState((state) => {
      return {getIncrease: !state.getIncrease}
    })
  }

  deleteEmployer = () => {
    this.props.employerDelete(this.props.id);
  }

  callParent = () => {
    this.props.parentMethod()
  }
  
  render() {
    const {name,  salary, prize} = this.props

    return(
      <li
        className={
          `d-flex list-group-item justify-content-between align-items-center ${this.state.getIncrease? ' increase': ''}`
        }
      >
        <span className="list-group-item-label">{name}</span>
        <input
          type="text"
          className="list-group-item-label"
          defaultValue={salary + "$"}
        />
        <div className="d-flex justify-content-center align-items-center gap-1">
          <button type="button" className="btn-cookie btn-sm" onClick={this.clickHandler}>
            <i className="fas fa-cookie"></i>
          </button>
          <button type="button" className="btn-trash btn-sm" onClick={this.deleteEmployer}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployersListItem;
