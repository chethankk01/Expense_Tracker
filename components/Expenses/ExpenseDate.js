import './ExpenseDate.css';
const ExpenseDate=props => {
    const month=props.date.toLocaleString("en-US",{month:"long"});
    const year=props.date.getFullYear();
    const day=props.date.toLocaleString("en-US",{day:"2-digit"});
    return(
        <div class="expense-date">
            <div class="expense-date_month">{month}</div>
            <div class="expense-date_day">{day}</div>
            <div class="expense-date_year">{year}</div>
        </div> 
    )
}
export default ExpenseDate;