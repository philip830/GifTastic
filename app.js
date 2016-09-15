var bands = ['The Beatles', 'Jimi Hendrix', 'Rolling Stones', 'Led Zeppelin'];

// Generic function for displaying movie data 
    function renderButtons(){ 

        // // Deletes the movies prior to adding new movies (this is necessary otherwise you will have repeat buttons)
        $('#bandsView').empty();

        // Loops through the array of movies
        for (var i = 0; i < bands.length; i++){

            // Then dynamicaly generates buttons for each movie in the array

            // Note the jQUery syntax here... 
            var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
            a.addClass('band'); // Added a class 
            a.attr('data-name', bands[i]); // Added a data-attribute
            a.text(bands[i]); // Provided the initial button text
            $('#bandsView').append(a); // Added the button to the HTML
            console.log("now" + bands[i]);
        
        }


    function buttonDisplay(){
        $('button').on('click', function() {
         //   var band = $('#movie-input').val().trim();
           for (var i = 0; i < bands.length; i++){
          //    var band = $(this).data(.band)
          //  for (var i = 0; i < bands.length; i++){
          // var bands = $(this).data('bands');
            var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + bands + "&api_key=dc6zaTOxFJmzC&limit=10";

            console.log("then" + bands);

            
            $.ajax({
                    url: queryURL,
                    method: 'GET'
                console.log("ajax")
                }
                })
                .done(function(response) {
                    // step 1: Run this file, click a button, and see what the data looks like in the browser's console. Open up the Object, then open up the data key, then open up 0. Study the keys and how the JSON is structured.

                    console.log(queryURL);
                    
                        
                    // step 2: since the image information is inside of the data key then make a variable named results and set it equal to response.data

                    //------------put step 2 in between these dashes--------------------
                    var results = response.data;
                    //--------------------------------
                
                    for (var i = 0; i < results.length; i++) {

                        /* step 3: 
                            * uncomment the for loop above and the closing curly bracket below
                            * make a div and reference it in a variable named animalDiv
                            * make a paragraph tag and put it in a variable named p
                                * set the text of the paragraph to the rating of the image in results[i]
                            * make an image and reference it in a variable named animalImage
                            * set the image's src to results[i]'s fixed_height.url 

                            * append the p variable to the animalDiv variable
                            * append the animalImage variable to the animalDiv variable

                            * prepend the animalDiv variable to the element with an id of gifsAppearHere

                        */

                        //------------put step 3 in between these dashes--------------------
                        var bandsDiv = $('<div>');

                        var p = $('<p>').text("Rating: " + results[i].rating);

                        var bandsImage = $('<img>');
                        bandsImage.attr('src', results[i].images.fixed_height.url);

                        bandsDiv.append(p);
                        bandsDiv.prepend(bandsImage);

                        $('#gifsAppearHere').prepend(bandsDiv);
                        //--------------------------------
                    }

               
       };
    }
    }
    
renderButtons();
//buttonDisplay();

    