var deleteFunction = function(numberOfPosts) {

    for (var i = 0; i < numberOfPosts; i++) {
        // Get the Delete modal
        var modal = document.getElementsByClassName('delete-modal')[i];

        // Get the div that opens the modal
        var div = document.getElementsByClassName("deletePost")[i];

        // Get the <span> element that closes the modal
        var close = document.getElementsByClassName("delete-buttonNo")[i];

        // When the user clicks on the Delete icon, open the modal 
        div.onclick = function() {
            modal.style.display = "block";
        }

        // When the user clicks on `No` button, close the modal
        close.onclick = function() {
            modal.style.display = "none";
        }
    }
}

deleteFunction(5)

function showMore() {
    alert(postTag.value);
    location.href = "post.html";
}