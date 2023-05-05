    var txt = document.getElementById( 'droptxt' );
    var txt2 = document.getElementById( 'droptxt2' );
    var txt3 = document.getElementById( 'droptxt3' );
    var txt4 = document.getElementById( 'droptxt4' );

    content = document.getElementById( 'content' );
    content2 = document.getElementById( 'content2' );
    content3 = document.getElementById( 'content3' );
    content4 = document.getElementById( 'content4' );

    list = document.querySelectorAll( '.content input[type="checkbox"]' );
    quantity = document.querySelectorAll( '.quantity' );


// Close the dropdown if the user clicks outside of it
window.onclick = function( e ) {
    if ( !e.target.matches( '.list' )) { 
        console.log(e.target)
        if ( content.classList.contains( 'show' ) ) {
            content.classList.remove( 'show' ) 
        } else if ( content2.classList.contains( 'show' ) ) {
            content2.classList.remove( 'show' ) 
        } else if ( content3.classList.contains( 'show' ) ) {
            content3.classList.remove( 'show' ) 
        } else if ( content4.classList.contains( 'show' ) ) {
            content4.classList.remove( 'show' ) 
        } else {
            console.log('Ya fucked up')
        }
    }
}

list.forEach( function( item, index ) {
    item.addEventListener( 'click', function() {
        quantity[ index ].type = ( item.checked ) ? 'number' : 'hidden';
        calc()
    } )
} )

quantity.forEach( function( item ) {
    item.addEventListener( 'input', calc )
} )

function calc() {

    if ( content.classList.contains( 'show' ) ) {

        for ( var i = 0, arr = []; i < list.length; i++ ) {
            if ( list[ i ].checked ) arr.push( quantity[ i ].value + ' x ' + list[ i ].value )
        }

        txt.value = arr.join( ', ' )

        return;

    } else if ( content2.classList.contains( 'show' ) ) {

        for ( var j = 0, arr2 = []; j < list.length; j++ ) {
            if ( list[ j ].checked ) arr2.push( quantity[ j ].value + ' x ' + list[ j ].value )
        }

        txt2.value = arr2.join( ', ' )

        return;
        
    } else if ( content3.classList.contains( 'show' ) ) {

        for ( var k = 0, arr3 = []; k < list.length; k++ ) {
            if ( list[ k ].checked ) arr3.push( quantity[ k ].value + ' x ' + list[ k ].value )
        }

        txt3.value = arr3.join( ', ' )

        return;
        
    } else if ( content4.classList.contains( 'show' ) ) {

        for ( var l = 0, arr4 = []; l < list.length; l++ ) {
            if ( list[ l ].checked ) arr4.push( quantity[ l ].value + ' x ' + list[ l ].value )
        }

        txt4.value = arr4.join( ', ' )

        return;
        
    }
}


txt.addEventListener( 'click', function() {
    content.classList.toggle( 'show' )
} );

txt2.addEventListener( 'click', function() {
    content2.classList.toggle( 'show' )
} );

txt3.addEventListener( 'click', function() {
    content3.classList.toggle( 'show' )
} );

txt4.addEventListener( 'click', function() {
    content4.classList.toggle( 'show' )
} );