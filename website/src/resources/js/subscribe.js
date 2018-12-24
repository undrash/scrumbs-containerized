

const nameInput     = document.getElementById( "subscriber-name" );
const emailInput    = document.getElementById( "subscriber-email" );
const subscribeBtn  = document.getElementById( "subscribe-button" );


let blocked = false;


subscribeBtn.addEventListener( "click", () => {

    if ( blocked ) return;
    blocked = true;

    const name      = nameInput.value;
    const email     = emailInput.value;

    console.log( "CLICK REGISTERED!" );

    if ( validateName( name ) && validateEmail( email ) ) {


        httpRequest(
            "POST",
            "/subscribe",
            {
                name,
                email
            },
            (response) => {

                console.info( "Request success" );
                blocked = false;
            },
            (message) => {
                console.warn( message );
                blocked = false;
            }
        );

    } else {
        alert( "Please provide a valid name and email address" );
    }

});



function validateEmail(email) {
    let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return regex.test( String(email).toLocaleLowerCase() );
}



function validateName(name) {
    return name.length > 2 && name.length < 100;
}



function httpRequest(method, endpoint, data, success, failure) {

    let xhr = new XMLHttpRequest();

    xhr.open( method, SERVICE_URL + endpoint, true );
    xhr.setRequestHeader( "Content-type", "application/json");
    xhr.setRequestHeader( "Accept", "application/json" );


    xhr.onload = () => {

        console.log( xhr.responseText );

        let response = JSON.parse( xhr.responseText );

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



