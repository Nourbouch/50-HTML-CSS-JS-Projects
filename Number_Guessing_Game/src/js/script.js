const input = document.getElementById("number")
const btn = document.getElementById("btn")
const result = document.getElementById("result")
  if(input.value !== '' && input.value.length > 0){
     let val = parseInt(input.value);
    const random = Math.floor(Math.random() * 3)
    if(val !== isNaN()){
        result.innerText =" no"
  }
    if(val === random ){
        result.innerText = "You are correct"
  }
    else{
        result.innerText = "The random number is  " + random + " YOU ARE WRONG!"
    }
  }
  else{
    alert('Please Enter a valid number !')
  }
})
