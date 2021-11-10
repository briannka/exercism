//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  // let hasNumber = /\d/;
  let scenario = "";

  if(message.slice(message.length - 1) === "?" && message !== message.toUpperCase()) {
    scenario = "normal_question" ;
  } else if(isNaN(message) === true) {
    scenario = "whatever";
  }  else if (message === message.toUpperCase() && message.slice(message.length - 1) === "!") {
    scenario = "yell_at_him";
  } else if (message.slice(message.length - 1) === "?" && message === message.toUpperCase()) {
    scenario = "capital_question";
  } else if (message.length === 0) {
    scenario = "say_nothing";
  } else {
    scenario ="whatever";
  }

  switch(scenario){
  case "capital_question":
    return "Calm down, I know what I'm doing!";
      break;
  case "normal_question":
    return "Sure.";
      break;
  case "yell_at_him":
    return "Whoa, chill out!";
      break;
  case "say_nothing":
    return "Fine. Be that way!";
      break;
  case "whatever":
    return "Whatever."
      break;
  }  
};
