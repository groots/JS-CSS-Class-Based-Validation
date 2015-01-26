//Javascript
$(function(){
    $(".access-button").on("click", function () {
            //check form items that should not be null
            //Clear all error messages

    //        $('label').css({ "display": "none" });

            //var registerReturnObj = {
            //    "_id": "54bfccab9d4c46942b3b43a5",
            //    "acceptTerms": false,
            //    "firstName": "Luna",
            //    "lastName": "Dale",
            //    "email": "lunadale@ecosys.com",
            //    "phone": "(962) 600-3814",
            //    "registered": "2014-01-16T01:27:22 +05:00",
            //    "greeting": "Hello, undefined! You have 1 unread messages."
            //};



            function processValidation(condition, obj) {  
                if (condition) {
                    console.log("made it here");
                    $('label[for=' + obj.attr('id') + ']').css({ "display": "inline" }).addClass("error-label");
                } else {
                    $('label[for=' + obj.attr('id') + ']').css({ "display": "inline" }).removeClass("error-label");
                }
            }

            //validate empty fields
            $(".notNull").each(function () {
                var fieldVal = $(this).val() != "" ? $(this).val() : 1;
                processValidation(fieldVal === 1, $(this));
                console.log("not null");
            });

            //validate phone
            $(".validate-phone").each(function () {
                var regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
                var regexString = !regex.test($(this).val());
                processValidation(regexString, $(this));
            });

            //validate checkbox 
            $(".validate-checked").each(function () {
                if (!$(this).is(":checked")) {
                    console.log("not checked");
                }
            });

            //validate email
            $(".validate-email").each(function () {
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                var regexString = !regex.test($(this).val());
                processValidation(regexString, $(this));
            });

            //Validate if email or phone number has input
            var $emailField = $(".bool-email");
            var $phoneField = $(".bool-phone");
            if ($emailField.val() !== "" || $phoneField.val() !== "") {
                //stop validation on both
                $phoneField.parent().find(".toggleLabel").removeClass("error-label");
                $emailField.parent().find(".toggleLabel").removeClass("error-label");
            } 


            //loop through form to look for any error tags if true return false
            $('#get-wifi').find('[input]').each(function () {
                console.log("code here");

            });
            var hostOrigin = window.location.origin;
            var firstVal = document.getElementById('firstName').value;
            var lastVal = document.getElementById('lastName').value;
            var emailVal = document.getElementById('email').value;
            var phoneVal = document.getElementById('mobileNumber').value;
            var optedOut = $("#optOut").is(":checked");
            var termsOfUse = $("#terms").is(":checked");
            var mallId = "163";
            // $.ajax({
            //     type: "POST",
            //     url: hostOrigin + '/wifi2/processwificlick/',
            //     data: { firstnameVal: firstVal, lastnameVal: lastVal, emailaddressVal: emailVal, phonenumberVal: phoneVal, termsVal: termsOfUse, optoutVal: optedOut, mallidval: mallId }, // serializes the form's elements.
            //     success: function (data) {
            //         console.log(data);
            //     },
            //     failure: function () {
            //         //show fail
            //     },
            //     error: function (e) {
            //         console.log("fail!");
            //     }
            // });
        });


        $(".form-control").on("keyup", function () {
            if ($(this).val() === "") {
                $('label[for=' + $(this).attr('id') + ']').css({ "display": "none" });
            } else {
                $('label[for=' + $(this).attr('id') + ']').css({ "display": "inline" });
            }
        });
});