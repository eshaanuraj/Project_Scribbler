var numberOfClicks=0;
function incrementCounter(){
    document.getElementById("counterLikedBy").innerHTML = "Liked!";
    document.getElementById("likedDefault").innerHTML= "";
    numberOfClicks += 1;
    if(numberOfClicks!=0){
        if (numberOfClicks==1){
            document.getElementById('counterLikedBy').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('counterLikedBy').innerHTML = numberOfClicks + " people have liked this!";
        }
    }
  }
  
  function toggleEditSave(){
    var toggleSave = '<button class="editPost">Save '+
    '<i style="font-size: 14px;font-weight: bolder;" '+
    'class="fa fa-save" aria-hidden="true"></i>'+
    '</button>';
    var toggleEdit = '<button class="editPost">Edit '+
    '<i style="font-size: 14px;font-weight: bolder;" '+
    'class="fa fa-pencil-square-o" aria-hidden="true"></i>'+
    '</button>';
  
    var edtSaveBtn = document.getElementById('editPost');
    var toDo = (edtSaveBtn.innerText).toString().trim();
    if(toDo.localeCompare('Edit')===0){
      var bSave = document.getElementById('editPost');
      bSave.innerHTML = toggleSave;
      enableEditableText();
  
    }
    else{
      console.log("Currently Save");
      var bEdit = document.getElementById('editPost');
      bEdit.innerHTML = toggleEdit;
      updateEditedBlog();
    }
  
  }
  
  function enableEditableText(){
    var getBlogContentEle = document.getElementById('postBody');
    var getBlogContent = getBlogContentEle.innerText;
  
    //Div element
    var getDiv = document.getElementById('postBodyId');
    //Create a input element
    var inputElement = '<textarea class="txtBlog" id="txtEditedBlog" rows="10" cols="220">'+
    getBlogContent+
    '</textarea>'
    //Update the Div element
    getDiv.innerHTML = inputElement;
  }
  function updateEditedBlog(){
    var editedBlog = document.getElementById('txtEditedBlog');
  
    var textEdited = (editedBlog.innerHTML).toString();
    
    var pElement = '<p id="postBody">'+
    textEdited+
    '</p>';
    var getDiv = document.getElementById('postBodyId');
    getDiv.innerHTML=pElement;
  
  }
  function addComment(){
    console.log("Inside add comment");
    var x = document.getElementById("txtCommentPost").addEventListener("onchange", function(){
      document.getElementById("txtCommentPost").innerHTML;
    });
  
    var x = document.getElementById("txtCommentPost").value;
    
    console.log(x);
    var pElement = '<p >'+ x + '</p>';
    var getDiv = document.getElementById('listAllComments');
    getDiv.innerHTML = pElement + getDiv.innerHTML;
  }
  