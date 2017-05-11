$(document).ready(function(){
  //click search and run
  $("#searchButton").click(function(){
    //get search input
    var searchTerm = $("#searchTerm").val();
    //api url with searchterm
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&callback=?";
    
    $.ajax( {
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data){
        
        $("#results").html("");
        
        for(var i = 0; i < 10; i++){
          
          //console.log(data[3][i]);
          
          $("#results").append("<p><a href=" + data[3][i] + " target= '_blank'>" + data[1][i] + " <i class='fa fa-external-link-square' aria-hidden='true'></i></a></p>");
          
          $("#results").append("<p>" + data[2][i] + "</p>");
        }
      },
      error: function(err){
        alert("Error");
      }
    });
    
  });
  
  //type enter on keyboard
  $("#searchTerm").keyup(function(e){
    if(e.keyCode == 13)
    {
        $("#searchButton").click();
    }
  });
});