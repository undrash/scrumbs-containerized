
const { createApolloFetch } = require( "apollo-fetch" );


const fetch = createApolloFetch({
    uri: SERVICE_URL,
});


const nameInput     = document.getElementById( "subscriber-name" );
const emailInput    = document.getElementById( "subscriber-email" );
const subscribeBtn  = document.getElementById( "submit-button" );


subscribeBtn.addEventListener( "click", () => {

    const name      = nameInput.value;
    const email     = emailInput.value;

    if ( validateName( name ) && validateEmail( email ) ) {

        fetch({
            query: `{ subscribe(name: "${ name }", email: "${ email }") }`
        }).then(res => {

            const response = JSON.parse( res.data.subscribe );

            if ( response.success ) {
                console.log( response );
            } else {
                console.warn( response.message );
            }

        });

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






