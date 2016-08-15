// $('.button-collapse').click(function() {
//   alert( "Handler for .click() called." );
// });
$(document).ready(function(){
   // alert("HOLA");
   $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: false// Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
   
   
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
        
    $("#mybutton").click(function() {
        alert( "Handler for .click() called." );
         
    });
    
    
});

/*


 
 $('.collapsible').collapsible();*/
