
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
	
	function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        //console.log('ID: ' + profile.getId());
        //console.log('Name: ' + profile.getName());
        //console.log('Image URL: ' + profile.getImageUrl());
        //console.log('Email: ' + googleUser.getBasicProfile().getEmail());
        var email = profile.getEmail();
    }
    
    //retrieval
    
    
    fbRef.child('csdata').on("child_added", function(snapshot, prevChildKey){
        var entry = snapshot.val();
    
        var tabledata = '<tr id="' + entry.id + '" > <td>' + entry.name + '</td> <td>' + entry.done + '</td> <td>' + entry.left + '</td> </tr>';
        
        console.log( entry.id );
        
        $('table').append(tabledata);
            
            
    });
    
    //adding
    $("#addition").submit(function(event) {
        
        var name = $('#name').val();
        var done = $('#done').val();
        var left = $('#left').val();
        var id = $('#id').val();
        
        var data = {
            name: name,
            done: done,
            left: left,
            id: id
        };
        
        fbRef.child('csdata').push(data);
        
		
	});
});
