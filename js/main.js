/*Name this external file gallery.js*/



function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
    let element = document.getElementById('image')
    let src= previewPic.getAttribute('src')
     element.style.backgroundImage = "url("+ src +")";
     element.innerHTML = previewPic.alt;

       }
   
       function unDo( previewPic){
         previewPic = document.getElementById('image')
         previewPic.style.backgroundImage = 'none'
         previewPic.innerHTML= 'Hover over an image below to display here.' 

        
    //     /* In this function you should 
    //    1) Update the url for the background image of the div with the id = "image" 
    //    back to the orginal-image.  You can use the css code to see what that original URL was
       
    //    2) Change the text  of the div with the id = "image" 
    //    back to the original text.  You can use the html code to see what that original text was
    //    */
        
       }