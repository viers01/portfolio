import EmployersListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css";
import React from "react";

const EmployersList = ({ props, employerDelete }) => {
  const elements = props.filtred.map((element) => {
    const { id, ...other } = element;
    return <EmployersListItem key={id} {...other} id={id} employerDelete={employerDelete} />;
  });

  return <ul className="employers-list list-group">{elements}</ul>;
};

export default EmployersList;
