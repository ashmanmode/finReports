function record_transaction()
{
  console.log('itna chala');
	var order_id = document.getElementById("order_id").value;
	var buyer_name = document.getElementById("buyer_name").value;
	var buyer_email = document.getElementById("buyer_email").value;
	var product_sku = document.getElementById("product_sku").value;

	// Create JSON
	var json = ''
	json += '{';
	json += '"order_id":"'+order_id+'",';
	json += '"buyer_name":"'+buyer_name+'",';
	json += '"buyer_email":"'+buyer_email+'",';
	json += '"product_sku":"'+product_sku+'",';
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
