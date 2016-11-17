// TO DO: change the way input is handled to differentiate
// between numbers and operators...

$(document).ready(function() {
  
  var term="0";
  var equation="";
  var visibleEquation="";
  var result=true;
  
  function refreshScreen() {
    
    if (term.length > 11) term="too big lol";
    
    if (equation.length <= 20) visibleEquation = equation;
    else visibleEquation = equation.substr(equation.length-20, 20);
    
    $(".cdisplay").html(term +"<br><span style='font-size: 80%'>" + visibleEquation + "</span>");
    
    if (term==="OVER 9000!!!" || term==="too big lol") { term="0"; equation="";}
  }
  
  $(".cbutton").mousedown(function() {
    
    $(this).css("top", "2px");
  });
  
  $(".cbutton").mouseup(function() {
    
    $(this).css("top", "0px");
  });
  
  $(".feed").click(function() {
    
    if (result || term === "0") {term=""; result=false;}
    
    term += $(this).text();
    equation += $(this).text();
    
    refreshScreen();
  });
  
  $(".operator").click(function() {
    
    if (equation==="" & term !== "0") equation=term;
    equation += $(this).text();
    term = "0";
    
    refreshScreen();
  });
  
  $("#AC").click(function() {
    
    term ="0";
    equation = "";
    
    refreshScreen();
  });
  
  $("#CE").click(function() {
    
    term ="0";
    equation = "";
    
    refreshScreen();
  });
  
  $("#equals").click(function() {
    
    
    equation = equation.replace(/x/ig, "*");
    if (equation !== "") term = (Math.floor(eval(equation)*100000)/100000).toString();
    if (term ==="Infinity") term="OVER 9000!!!";
    equation = "";
    
    result =true;
    refreshScreen();
  });
  
  
  
});