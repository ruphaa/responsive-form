$(document).ready(function() {
    console.log('Welcome');
    $('.signup').validate({ // initialize the plugin
        rules: {
            name: {
                required: true,
            },
            username: {
                required: true,
                minlength: 5

            },
            email: {
                required: true,
                email: true
            }
        },
        // invalidHandler: function(event, validator) {
        //     var errors = validator.numberOfInvalids();
        //     $('input').css('box-shadow', '0 10px 0px -7px #de3226, 0 10px 0px -7px #de3226');
        //     console.log(errors);
        // },
        submitHandler: function (form) { // for demo
            alert('valid form submitted'); // for demo
            return false; // for demo
        }
    });
});