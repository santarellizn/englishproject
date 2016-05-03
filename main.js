
$(document).ready(function(){
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

    //login
    var username = $('#username').text();
    var password = $('#password').text();
    $("#onform").submit(function(event) {
        var creds = {
				username: username,
				password: password 

			};
		console.log(creds);
    });
});