const description=document.getElementById("income-description");
const income_amount=document.getElementById("income-amount");
const expense_input=document.getElementById("expense-input");
const category_input=document.getElementById("category-input");
const amount_input=document.getElementById("amount-input");
const form =document.getElementById("expense-form")
const transaction=document.getElementById("adding-transaction");
const totalincome=document.getElementById("total-income")
const total_expense=document.getElementById("total-expense")
const table=document.getElementById("table")
const balance =document.getElementById("balance");
let count=0;
let count_expense=0
addIncome=()=>{
    
const description_value=description.value
const income_value=income_amount.value;
const z=parseInt(income_value)
count=count+z

console.log(count)
const row=document.createElement("tr")
if(description_value==""&&income_value==""){
alert("you have not input all fields")
}
else{
const row_td_description=document.createElement("td")
const row_td_income=document.createElement("td")
const category=document.createElement("td")
row_td_description.textContent=description_value;
row_td_income.textContent=income_value;
row.appendChild(row_td_description)
row.appendChild(category);
row.appendChild(row_td_income)
const s=table.appendChild(row)
category.textContent="Income"

const delete_button=document.createElement("td")
const button=document.createElement("button")
button.style.width="100px"
button.style.height="35px"
button.style.marginLeft="38px"
button.style.borderRadius="10px"
button.textContent="delete"
delete_button.appendChild(button)
row.appendChild(delete_button)
button.addEventListener("click",function(){
s.remove()
count=count-z;
console.log(count)
totalincome.innerHTML=count;
balance.innerHTML=count-count_expense;

})

description.value=""
income_amount.value=""

}

}
form.addEventListener('submit',function(event){
    event.preventDefault()
    const expense_value=expense_input.value
console.log(expense_value)
    const row=document.createElement("tr")
    const coloumn=document.createElement("td")
    coloumn.textContent=expense_value
    row.appendChild(coloumn)
  
    

    const expense_category=category_input.value
   console.log(expense_category)
    const coloumn2=document.createElement("td")
    coloumn2.textContent=expense_category
    row.appendChild(coloumn2)
    
    
    const expense_amount=amount_input.value
   const z=parseInt(expense_amount)
//    console.log("hello "+z)
   count_expense+=z
  console.log(expense_amount)
    const coloumn3=document.createElement("td")
    coloumn3.textContent=expense_amount
    row.appendChild(coloumn3)

  
   const s= table.appendChild(row)
   const delete_button=document.createElement("td")
const button=document.createElement("button")
button.style.width="100px"
button.style.height="35px"
button.style.marginLeft="38px"
button.style.borderRadius="10px"

button.textContent="delete"
delete_button.appendChild(button)
row.appendChild(delete_button)
button.addEventListener("click",function(){
s.remove()
count_expense=count_expense-z
total_expense.innerHTML=count_expense;
balance.innerHTML=count-count_expense
if(balance<=0){
    balance.innerHTML=0
}
})
x=0;
totalincome.innerHTML=count;
total_expense.innerHTML=count_expense;
balance.innerHTML=count-count_expense;
if(balance<=0){
    balance.innerHTML=0
}

expense_input.value=""
amount_input.value=""
let span =document.getElementById("balance")
let value=span.textContent
if(value<=0){
    balance.innerHTML=0
}
    })

function clearAll(){
    table.remove() 
    balance.innerHTML=0 ;
    count_expense=0;
total_expense.innerHTML=0;
}

