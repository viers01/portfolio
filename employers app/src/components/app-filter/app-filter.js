import './app-filter.css';


const AppFilter = () => {
    return(
        <div className="btn-group d-flex justify-content-between">
            <button className="btn btn-light flex-grow-0" type="button">Все сотрудники</button>
            <button className="btn btn-light flex-grow-0" type="button">На увольнение</button>
            <button className="btn btn-light flex-grow-0" type="button">Зп меньше 1000$</button>
        </div>
    )
}

export default AppFilter;