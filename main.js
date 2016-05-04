
$(document).ready(function(){
    var fbRef = new Firebase('https://communityservice.firebaseio.com/');
	// navbar
	$('.loginpage').hide();
	
	$('#login').click(function(){
		$('table, #search, #filter-count').hide();
		$('.loginpage').show();
	});
	
	$('#home').click(function(){
		$('table, #search, #filter-count').show();
		$('.loginpage').hide();
	});
	
	//search
	$('#search').keyup(function(){
		var search = $(this).val(), count = 0;
		$('table').show();
		$(".cstable tr").each(function(){

            if ($(this).text().search(new RegExp(search, "i")) < 0) {
                $(this).fadeOut();
 
            } else {
                $(this).show();
                count++;
            }
        });
        var numberItems = count;
        if (count > 0){
        $("#filter-count").text("Number of Results = "+count);
        }
        else {
        $("#filter-count").text("No Results :(");
        $('table').hide();
        }
	});
    
    //retrieval
    
    fbRef.child('csdata').on("child_added", function(snapshot, prevChildKey){
        var entry = snapshot.val();
        console.log(entry);
        console.log(entry.name);
        
       var tabledata = '<tr> <td>' + entry.name + '</td> <td>' + entry.done + '</td> <td>' + entry.left + '</td> </tr>';
        
        $('table').append(tabledata);
            
            
            
    });
    
    //adding
    $("#addition").submit(function(event) {
        
        var name = $('#name').val();
        var done = $('#done').val();
        var left = $('#left').val();
        
        var data = {
            name: name,
            done: done,
            left: left
        };
        
        fbRef.child('csdata').push(data);
        
		
	});
	
	//login 
	$("#onlog").submit(function(event) {
	   $(location).attr('href','http://www.example.com');
	   console.log('success');
	   
	    
	});

});
