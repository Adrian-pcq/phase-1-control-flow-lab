function scuberGreetingForFeet(value){
  // Write your code here!
  if (value <= 400){
    return "This one is on me!"
  }else if (value > 400 && value <= 2000){
    return "That will be twenty bucks."
  }else  if(value > 2000 && value < 2500){
    return "I will gladly take your thirty bucks."
  }else if(value >= 2500){
    return "No can do."
  }
}

function ternaryCheckCity(value){
  // Write your code here!
return (value === "NYC")? "Ok, sounds good.":"No go."
}

function switchOnCharmFromTip(value){
  // Write your code here!
  switch (value){
    case "generous":
    return  "Thank you so much."

    case "not as generous":
      return "Thank you.";
      default :
      return "Bye."
    
  }
}