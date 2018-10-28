function nameCheck() {
    
      let x = document.getElementById('fname').value;
    
     let y = document.getElementById('lname').value;
	
      let z = document.getElementById('email').value; 
    
      
     if (x == "" ||!(isNaN(x))||x>=0 || x<0)
    {
        window.alert("First Name must be filled out");
        
    }
    // (y == "" || y>=0 || y<0)
    else if (y == "" ||!(isNaN(y))||y>=0 || y<0)
    {
        window.alert("Last Name must be filled out");
        
    }
   
    else if(z == "" || !(isNaN(z))||z>=0 || z<0)
    {
        window.alert("Email must be filled out");
       
    }
    
    else{
        window.alert('Thank you we will get back to you shortly');
    }

}