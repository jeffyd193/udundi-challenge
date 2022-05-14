$( document ).click(function() {

    var modal = $( "#explore-modal" );
    var closeBtn = $( "#close-btn" );
    var openBtn = $( "#explore-btn" );
    var exploreText = $( "#explore-text" );



    openBtn.click(function() {
        exploreText.addClass( "hide-text", 300);
        openBtn.addClass( "hidden", 300);

        modal.removeClass( "hidden", 350);
        modal.removeClass( "closed", 350);
    });

    closeBtn.click(function() {
        openBtn.removeClass( "hidden", 300);
        exploreText.removeClass( "hide-text", 300);
        
        modal.addClass( "closed", 350);
        modal.addClass( "hidden ", 350);

     
    });

});