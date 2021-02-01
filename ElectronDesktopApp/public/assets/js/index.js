require('mysql');

$(function() {
    $("#register_from").on("submit", function(event){
        event.preventDefault();
        // Get all data

        let username = $("#username").val();
        let email = $("#email").val();
        let password = $("#password").val();
        let conf_password = $("#repassword").val();
        let phoneno = $("#phone_no").val();


        if (password === conf_password){
            console.log("submit");
        }else{
            console.log("error");
        }

    })
});