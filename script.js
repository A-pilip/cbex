function calculateProfit() {
    var referalCapital = document.getElementById("referalTradingCapital").value;
    referalCapital = Number(referalCapital);
    var newUserCapital = document.getElementById("newUserCapital").value;
    newUserCapital = Number(newUserCapital);
    var resultField = document.getElementById("profitResult");
    var statusField = document.getElementById("profitStatus");
  
    if (referalCapital < 100 && newUserCapital < 100) {
      resultField.style.display = 'block';
      statusField.style.display = 'none';
      resultField.value =
        "The least trading capital which one can use for trading is $100, You need $" + (100 - referalCapital) +" to top up your account to $100" +". You cant sign up a new user which Capital is not up to $100, You need $" + (100 - referalCapital) +" to register a new user.";
      }
  
       else if (referalCapital < 100) {
      resultField.style.display = 'block';
      statusField.style.display = 'none';
      resultField.value =
        "The least trading capital which one can use for trading is $100. You need $" + (100 - referalCapital) +" to top up your account to $100.";
      }
      
      else if (newUserCapital < 100) {
        statusField.style.display = 'none';
        resultField.style.display = 'block';
      resultField.value =
        "The least trading capital which one can use for trading is $100. You need $" + (100 - newUserCapital) +" to top up your account to $100.";
      }
      else if (newUserCapital >= referalCapital / 2) {
      function cbexCalcForReferal() {
        let refCapital = referalCapital + (7 / 100) * newUserCapital;
  
        for (let start = 0; start <= 21; start++) {
          console.log(refCapital);
          var amountPerTradeCapital = (1 / 100) * refCapital;
  
          refCapital = refCapital - amountPerTradeCapital;
          refCapital =refCapital +amountPerTradeCapital +((93/100)*amountPerTradeCapital);
        }
  
        for (let start = 0; start <= 36; start++) {
  
          console.log(refCapital);
          var amountPerTradeCapital = (1 / 100) * refCapital;
          
          refCapital = refCapital - amountPerTradeCapital;
          refCapital =refCapital +amountPerTradeCapital +((93/100)*amountPerTradeCapital);
              }
        return refCapital;
      }
  
      function cbexCalcForNewUser() {
        let NewCapital = newUserCapital + (3 / 100) * newUserCapital;
        let start = 0;
        while (start <= 9) {
          NewCapital =
            NewCapital + (1 / 100) * NewCapital - 0.05 * (1 / 100) * NewCapital;
          start++;
        }
        start = 0;
        while (start <= 44) {
          NewCapital =
            NewCapital + (1 / 100) * NewCapital - 0.05 * (1 / 100) * NewCapital;
          start++;
        }
        return NewCapital;
      }
  
      var refProfit = cbexCalcForReferal() - referalCapital;
      var newUserProfit = cbexCalcForNewUser() - newUserCapital;
      statusField.style.display = 'block';
      resultField.style.display = 'block';
      statusField.value ="Referal New Capital: $" +cbexCalcForReferal().toFixed(4) +"  New User Capital: $" + cbexCalcForNewUser().toFixed(4);
      resultField.value ="Referral profit: $" +refProfit.toFixed(2) +", New user profit: $" +newUserProfit.toFixed(2);
  
    } else {
      resultField.style.display = 'block';
      statusField.style.display = 'none';
      resultField.value ="According to the CBEX rule, you are to bring a new user who has half of your capital. You need $" +(referalCapital / 2 - newUserCapital) +" more to register a new user.";
    }
  }
  