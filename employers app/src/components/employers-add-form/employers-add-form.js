import "./employers-add-form.css";

const EmployersAddForm = (props) => {
  const handleSubmit = function (event) {
    event.preventDefault();
    props.addData(event);
  };
  const sendChange = function (event) {
    props.handleChange(event.target.name, event.target.value);
  };
  return (
    <div className="employers-add-form d-flex justify-content-between">
      <h3>Добавьте нового сотрудника</h3>
      <form className="employers-form d-flex" onSubmit={handleSubmit}>
        <input
          required
          value={props.inputsValue.inputNameValue}
          onChange={sendChange}
          type="text"
          placeholder="Как его зовут"
          className="new-post-label"
          name="name"
        />
        <input
          value={props.inputsValue.inputSalaryValue}
          onChange={sendChange}
          type="number"
          className="new-post-label"
          placeholder="З/П"
          name="salary"
        />
        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployersAddForm;
