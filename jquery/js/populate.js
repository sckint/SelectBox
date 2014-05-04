$(function(){
	
	// whenever country select box changes this will activate.
	
	$('#country').change(function(){
	
		var value = $('#country').val();
	
		$.ajax({
		
			type : 'get',
			url:'country.cfm?countryId='+value
			
		}).success(function(response){
		
			$('#state').html(response);	//response as html for state drop down.
			
		}).error(function(){
		
			alert('Error Occured');
			
		});
		
	});
	
	
});
