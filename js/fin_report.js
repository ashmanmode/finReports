function record_transaction()
{
  console.log('itna chala');
	var order_id = document.getElementById("type").value;
	var buyer_name = document.getElementById("for").value;
	var buyer_email = document.getElementById("from").value;
	var product_sku = document.getElementById("amount").value;

	// Create JSON
	var json = ''
	json += '{';
	json += '"type":"'+order_id+'",';
	json += '"for":"'+buyer_name+'",';
	json += '"from":"'+buyer_email+'",';
	json += '"amount":"'+product_sku+'",';
	json += '} ';

        var url_id = '';
	var url = 'https://cors.io/?https://script.google.com/macros/s/'+url_id+'/exec?';
	url += 'request_type=single&';

	var send_url = url+'data=' + json;
	
	console.log(send_url); 

	$.get(send_url, function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
        var toastHTML = "";
        if (status) {
        	console.log('MAIL SENT');
        	toastHTML = '<span>MAIL SENT SUCCESS</span><button class="btn-flat toast-action">OK</button>';
        }
        else
        {
        	console.log('FAILED! Please try again.');
        	toastHTML = '<span>FAIL: Try Again</span><button class="btn-flat toast-action">OK</button>';
        }
        M.toast({html: toastHTML});
    });
	
}
