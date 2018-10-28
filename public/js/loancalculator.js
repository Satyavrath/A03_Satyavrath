
/**
 * Simple interest example. 
 */
function computeLoan(num1,num2,num3){
    let amount;
    let interest_rate;
    let months;

    if(num1){
        amount = num1;
    } 
    else{
        amount = document.getElementById('amount').value;
    }
    if(num2){
        interest_rate = num2;
    }
    else{
        interest_rate = document.getElementById('interest_rate').value;
    }
    if(num3){
        months =num3;
    }
    else{
        months = document.getElementById('months').value;  
    }
    var testArray =[];
   testArray.push(amount);
   testArray.push(interest_rate);
   testArray.push(months);
   if(num1 || num2 || num3){
    return testArray;  
}
    
        amount = document.getElementById('amount').value;
        interest_rate = document.getElementById('interest_rate').value;
        months = document.getElementById('months').value;
   

    if(amount<0|| interest_rate<0||months<0){
        window.alert('Please enter value greater than 0'); 
        $("#payment").html("") ;
       

    } 
    
}
function computeLoan2(num1,num2,num3){
    if(num1){
        amount = num1;
    } 
    else{
        amount = document.getElementById('amount').value;
    }
    if(num2){
        interest_rate = num2;
    }
    else{
        interest_rate = document.getElementById('interest_rate').value;
    }
    if(num3){
        months =num3;
    }
    else{
        months = document.getElementById('months').value;  
    }
     
    if(amount>0 && interest_rate>0 && months>0){
    
    let interest = (amount * interest_rate * 0.01* months)/12;
    let interestPerMonth = (interest/months).toFixed(2);
    let payment = (Number(amount) +(interest)).toFixed(2);
    var testArray1 = [];
    testArray1.push(interest);
    testArray1.push(parseFloat(interestPerMonth));
    testArray1.push(parseFloat(payment));
    if(num1 || num2 || num3){
        return testArray1;  
    }
   document.getElementById('Interest').innerHTML = "Monthly Interest = $"+interestPerMonth;
   document.getElementById('Interest_total').innerHTML = "Total Interest = $"+interest.toFixed(2);
   document.getElementById('payment').innerHTML = "Total Payment = $"+payment;
   var loanArray = [interestPerMonth,interest,payment];
   pieChart(loanArray);
    }
    else{window.alert('Please enter value greater than 0');}    
    return testArray1;
}
       
function computeLoan3(num1,num2,num3){
    if(num1 == null || num2==null || num3 == null){
         throw Error('The given argument is not a number');  
    }
    if(num1){
        amount = num1;
    } 
    else{
        $()
        document.getElementById('Interest').value;
    }
    if(num2){
        interest_rate = num2;
    }
    else{
        document.getElementById('Interest_total').value;
    }
    if(num3){
        months =num3;
    }
    else{
        document.getElementById('payment').value;  
    }
   var testArray2 = [];
    testArray2.push(Interest);
    testArray2.push(Interest_total);
    testArray2.push(payment);
    if(num1 || num2 || num3){
        return testArray2;  
    }
    document.getElementById('Interest').innerHTML="";
    document.getElementById('Interest_total').innerHTML = "";
    document.getElementById('payment').innerHTML="";
    document.getElementById('pie').style.display = 'none';
}

 function pieChart(loanArray){
    document.getElementById('pie').style.display = 'block';
    let canvas = document.getElementById('pie').getContext('2d');
    let myPieChart = new Chart(canvas,{
        type: 'pie',
        data: {
            datasets: [{
                // label: 'Loan Summary',
                data: loanArray,
                backgroundColor:['green','Orange','dodgerblue']
                       }],
        
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Monthly Interest',  
                'Interest',
                'Payment'
            ]
        },
        options: {
            responsive: true
        }
    }); 
 }
