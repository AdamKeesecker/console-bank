var total = 1000;
var action = getAction();
while(!quit(action)){
  if(total > -750){
    if(action=='c'){
      alert('Your current total is ' + total)
      action=getAction();
    }
    if(action==='d' || action==="w"){
      var amount = howMuch();
      if(action === 'd' && amount < 500){
        total = total + amount;
        alert("Your total is now " + total);
      }
      else if(action === 'd' && amount >= 500){
        total=total+amount+25;
        alert('What?! You just got free money! (25$ credited to your account)');
        alert('Your new total is ' + total);
      }
      else if(action==='w' && total - amount >= -750){
        total = total - amount;
        alert('Your new total is ' + total);
      }
      else if(action==='w' && total - amount <= -750){
        total = total - amount;
        alert('Your account has exceeded a balance of -750$. Your account has been frozen. Please pay us immediately. We will find you.');
      }
    }
  }
  else{
    alert('Dude. Frozen. Pay up!');
    break;
  }
}










function getAction(){
  var action = prompt("Would you like to (c)heck balance, (w)ithdraw, (d)eposit, or (q)uit?");
  return action;
}
function quit(letter){
  return letter === 'q';
}
function howMuch(){
  var amount = prompt("How much?");
  return parseInt(amount);
}
