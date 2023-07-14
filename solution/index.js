// Work on ensuring on each button click, the correct action is dispatched and displayed on the input


//This is the input section
let inputWindow  = document.querySelector('.inputWindow')



// getting all the buttons of my calculator 
let inputBtns = document.querySelectorAll('button')
inputBtns.forEach((btn) => {
     if(btn.innerText == 'DEL' || btn.innerText == '='){
        return 
     } else{
         btn.addEventListener('click', (e) => {
             let btnValue = e.target.innerText
             console.log(btnValue)
             inputWindow.value += btnValue
         })
     }
    // attaching an event listener for each btn and displaying the clicked results on the input window 
    
})




// This is the query results button 
let resultsBtn = document.querySelector('#resultBtn')
//Ensuring on any btn click the result is displayed in the input field 
resultsBtn.addEventListener('click', (e) => {
    // evaluate the inputs 
    
    let results = eval(inputWindow.value)

      inputWindow.value = results   ;
})

// This is the clear button
let clearBtn = document.querySelector('.reset')

clearBtn.addEventListener('click', (e) => {
    inputWindow.value = ''
})

// This is the delete button
let deleteBtn = document.querySelector('#del')
deleteBtn.addEventListener('click', (e) => {
    console.log(e.target.innerText)
    // inputWindow.value = inputWindow.value.slice(0, -1)

})


