import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

const App = (props) => {
  return (
    <div className="app">
      <AppInfo />
      <EmployersAddForm
        addData={props.addData}
        inputsValue={props.inputsValue}
        handleChange={props.handleChange}
      />
      <section className="search-panel">
        <SearchPanel handleSearchInput = {props.handleSearchInput}/>
        <AppFilter />
      </section>
      <EmployersList props={props.store.giveState()} employerDelete = {props.employerDelete} />
    </div>
  );
};

export default App;
