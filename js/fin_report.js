function record_transaction()
{
  console.log('itna chala');
	document.getElementById("message").innerHTML = '&nbsp;&nbsp;Processing...';
	document.getElementById("message").style.color = 'black';
	var order_id = document.getElementById("type").value;
	var buyer_name = document.getElementById("for").value;
	var buyer_email = document.getElementById("from").value;
	var product_sku = document.getElementById("amount").value;
	var lent_to = document.getElementById("lent_to").value;
	
	// Give values
	console.log(order_id);
	if(order_id=="on")
		order_id = 'Debit';
	else
		order_id = 'Credit';
	
	if(buyer_email=="on")
		buyer_email = 'HDFC';
	else
		buyer_email = 'ICICI';

	// Create JSON
	var json = ''
	json += '{';
	json += '"type":"'+order_id+'",';
	json += '"for":"'+buyer_name+'",';
	json += '"from":"'+buyer_email+'",';
	json += '"amount":"'+product_sku+'",';
	json += '"lent_to":"'+lent_to+'"';
	json += '} ';

        var url_id = 'AKfycbxSvEFwoX4MKnH34fcIsG7ozY1ngISvIMsoxnMbwy7W2QFM9JPH';
	var url = 'https://cors.io/?https://script.google.com/macros/s/'+url_id+'/exec?';

	var send_url = url+'data=' + json;
	
	console.log(send_url); 

	$.get(send_url, function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
        var toastHTML = "";
        if (status) {
        	console.log('MAIL SENT');
        	toastHTML = '<span>MAIL SENT SUCCESS</span><button class="btn-flat toast-action">OK</button>';
		document.getElementById("message").innerHTML = '&nbsp;&nbsp;Success';
                document.getElementById("message").style.color = 'green';
        }
        else
        {
        	console.log('FAILED! Please try again.');
        	toastHTML = '<span>FAIL: Try Again</span><button class="btn-flat toast-action">OK</button>';
		document.getElementById("message").innerHTML = '&nbsp;&nbsp;Failed';
                document.getElementById("message").style.color = 'red';
        }
        M.toast({html: toastHTML});
    });
	
}
