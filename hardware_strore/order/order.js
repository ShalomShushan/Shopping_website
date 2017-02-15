var $ = function (id) {
    return document.getElementById(id);
}
var submit = function () {
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var isValid = true;

    // validate email address
    if (emailAddress1 == "") { 
        $("email_address1_error").firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else {
        $("email_address1_error").firstChild.nodeValue = "";
    } 

    // validate email address re-entry
    if (emailAddress2 == "") { 
        $("email_address2_error").firstChild.nodeValue = "This field is required.";
        isValid = false; 
    } else if (emailAddress1 !== emailAddress2) { 
        $("email_address2_error").firstChild.nodeValue = "This entry must equal first entry.";
        isValid = false;
    } else {
        $("email_address2_error").firstChild.nodeValue = "";
    }

    // validate first name 
    if ($("first_name").value == "") {
        $("first_name_error").firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else if(!isNaN($("first_name").value)) {
        $("first_name_error").firstChild.nodeValue = "Can't be a number.";
        isValid = false;
    }
    else {
        $("first_name_error").firstChild.nodeValue = "";
    }  

    // validate last name  
    if ($("last_name").value == "") {
        $("last_name_error").firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else if(!isNaN($("last_name").value)) {
        $("last_name_error").firstChild.nodeValue = "Can't be a number.";
        isValid = false;
    }
    else {
        $("last_name_error").firstChild.nodeValue = "";
    }  

    // validate credit card number  
    if ($("card_number").value == "") {
        $("card_number_error").firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else if (isNaN($("card_number").value)) {
        $("card_number_error").firstChild.nodeValue = "Must be a number.";
    }
    else {
        $("card_number_error").firstChild.nodeValue = "";
    }

    // validate Address  
    if ($("address").value == "") {
        $("address_error").firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else {
        $("address_error").firstChild.nodeValue = "";
    }

    // validate city 
    if ($("city").value == "") {
        $("city_error").firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else if(!isNaN($("city").value)) {
        $("city_error").firstChild.nodeValue = "Can't be a number.";
        isValid = false;
    }
    else {
        $("city_error").firstChild.nodeValue = "";
    } 

    // validate zip  
    if ($("zip_code").value == "") {
        $("zip_code_error").firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else if (isNaN($("zip_code").value)) {
        $("zip_code_error").firstChild.nodeValue = "Must be a number.";
    }
    else {
        $("zip_code_error").firstChild.nodeValue = "";
    }

    // validate state  
    if ($("state").value == "") {
        $("state_error").firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else if(!isNaN($("state").value)) {
        $("state_error").firstChild.nodeValue = "Can't be a number.";
        isValid = false;
    }
    else {
        $("state_error").firstChild.nodeValue = "";
    } 

    // submit the form if all entries are valid
    if (isValid) {
        $("email_form").submit(); 
    }
}

var calculate = function ()
{
    $("total_sum").value = "$" + ($("amount").value) * ($("product").value);
}

var clear = function () {
	$("email_address1").value = "";
	$("email_address2").value = "";
	$("first_name").value = "";
	$("middle_name").value = "";
	$("last_name").value = "";
	$("product").value = "11";
	$("amount").value = "1";
	$("total_sum").value = "";
	$("credit_name").value = "1";
	$("card_number").value = "";
	$("month").value = "";
	$("year").value = "2016";
	$("address").value = "";
	$("city").value = "";
	$("zip_code").value = "";
	$("state").value = "";
}

window.onload = function () {
    $("join_list").onclick = submit;
    $("email_address1").focus();
    $("calculate").onclick = calculate;
    clear();
}
