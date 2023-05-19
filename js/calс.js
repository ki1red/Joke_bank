function calculateInvestment() {
  var investAmt = parseFloat(document.getElementById("investamt").value);
  var monthes = parseInt(document.getElementById("investtime").value.split(',')[0]);
  var interest_rate = parseInt(document.getElementById("investtime").value.split(',')[1]);

  //validate input
  if (monthes === "" || interest_rate == 0 || investAmt === "" || document.getElementById("investtime").value == 0) {
    alert("Please enter values");
    return;
  }

  //calculate tip
  var total = investAmt + (investAmt * (interest_rate / 100 / 12 * monthes));

  //next line allows us to always have two digits after decimal point
  var grandTotal = total.toFixed(2);

  //display the tip
  document.getElementById("investyield").style.display = "block";
  document.getElementById("yield").innerHTML = grandTotal;
}

$( ".investtype" ).change(function() {
$(".investtime").empty().append(`<option disabled selected value="0">Срок вклада</option>`);

replenished_dict = {'6,20': '6 месяцев - 20%', '12,22':'1 год - 22%', '18,15':'1.5 года - 15 %', '24,10':'2 года - 10%'}
fast_dict = {'3,20':'3 месяца - 20%', '6,22':'6 месяцев - 22%', '9,23':'9 месяцев - 23%', '12,24':'1 год - 24%', '18,18':'1,5 года - 18%', '24,15':'2 года -15%'}

  if (document.getElementById("investtype").value == 'replenished'){
    for (const [key, value] of Object.entries(replenished_dict)) {
      $('.investtime').append(`<option value="${key}">
                             ${value}
                        </option>`);
    }
  }

    if (document.getElementById("investtype").value == 'fast'){
      for (const [key, value] of Object.entries(fast_dict)) {
        $('.investtime').append(`<option value="${key}">
                               ${value}
                          </option>`);
      }
    }
    
}
);

$( ".investtype" ).change(function() {
  $(".investtime").empty().append(`<option disabled selected value="0">Срок вклада</option>`);
  
  replenished_dict = {'6,20': '6 месяцев - 20%', '12,22':'1 год - 22%', '18,15':'1.5 года - 15 %', '24,10':'2 года - 10%'}
  fast_dict = {'3,20':'3 месяца - 20%', '6,22':'6 месяцев - 22%', '9,23':'9 месяцев - 23%', '12,24':'1 год - 24%', '18,18':'1,5 года - 18%', '24,15':'2 года -15%'}
  
    if (document.getElementById("investtype").value == 'replenished'){
      for (const [key, value] of Object.entries(replenished_dict)) {
        $('.investtime').append(`<option value="${key}">
                               ${value}
                          </option>`);
      }
    }
  
      if (document.getElementById("investtype").value == 'fast'){
        for (const [key, value] of Object.entries(fast_dict)) {
          $('.investtime').append(`<option value="${key}">
                                 ${value}
                            </option>`);
        }
      }
  }
  );
  


//click to call function
document.getElementById("calculate").onclick = function() {
  calculateInvestment();
};
