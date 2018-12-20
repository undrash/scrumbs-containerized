



var submit                  = document.getElementById( "reset-password-submit" );
var passwordInput           = document.getElementById( "reset-password-password" );
var passwordConfirmInput    = document.getElementById( "reset-password-confirm" );
var error                   = document.getElementById( "reset-password-error-text" );


submit.addEventListener( "click", function (event) {

    var method = "POST",
        endpoint = window.location.href;
    data = { password: passwordInput.value, confirm: passwordConfirmInput.value };

    httpRequest(
        method,
        endpoint,
        data,
        function (response) {
            console.log( response );
        },
        function (message) {
            error.innerHTML = message;
            error.style.opacity = 1;
        }
    )

});


function httpRequest(method, endpoint, data, success, failure) {

    var xhr = new XMLHttpRequest();

    xhr.open( method, endpoint, true );

    xhr.setRequestHeader( 'Content-type', 'application/json' );

    xhr.setRequestHeader( 'Accept', 'application/json' );


    xhr.onload = function () {

        var response = JSON.parse( xhr.responseText );

        if ( response.success ) {

            if ( success ) success( response );

        } else {

            if ( failure ) failure( response.message );
        }
    };

    if ( data ) {
        xhr.send( JSON.stringify( data ) );
    } else {
        xhr.send();
    }

    return xhr;
}
