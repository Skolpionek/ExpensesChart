import Data from '../data.json' assert {type: 'json'};
const CHART = document.querySelector(".chart")




let week = []

Data.forEach(item=>{
   week.push(item.day)
   createElement(item.day,item.amount)
})

function createElement(day,amount){
   const d = new Date();
   let Today = d.getDay();
   console.log(week[Today-1])
   const column = document.createElement("div")
   column.classList.add("column")
   column.innerHTML = `
   <div class="hover">
            $${amount}
          </div>
          <div ${week[Today-1] == day ? "class='block active'" : "class='block'"} style="height: ${amount*2}px;"></div>
          ${day}
   `
   CHART.appendChild(column)

}