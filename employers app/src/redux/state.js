const store = {
  _state: {
    employers: [],
    filtred: [],
    inputsValue: {
      name: "",
      salary: 0,
    },
  },
  callback() {
    console.log("стейт изменился");
  },
  handleSearchInput(currentSearch = ''){
    this._state.filtred = this._state.employers.filter(employer => employer.name.includes(currentSearch))
    this.callback(this._state);
  },
  subscribe(observer) {
    this.callback = observer;
  },
  handleChange(name, value) {
    this._state.inputsValue[name] = value;
    this.callback(this._state);
  },
  employerDelete(id) {
    const findEmployer = this._state.employers.find(
      (employer) => employer.id === id
    );
    this._state.employers.splice(
      this._state.employers.indexOf(findEmployer),
      1
    );
    this.handleSearchInput()
    this.callback(this._state);
  },
  getRandomId() {
    return Math.floor(Math.random() * 9999);
  },
  addData(event) {
    const { name, salary, id = this.getRandomId() } = this._state.inputsValue;
    this._state.employers.push({
      name: name,
      salary: salary,
      id: id,
    });
    this._state.inputsValue.name = '';
    this._state.inputsValue.salary = 0;
    event.target.reset();
    this.handleSearchInput()
    this.callback(this._state);
  },
  giveState() {
    return this._state;
  },
};

export default store;
