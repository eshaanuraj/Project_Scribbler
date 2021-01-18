function showModalSignIn(){
    var modal = document.getElementById("modal-signin");
    modal.style.display = "flex";
  }
  
  function closeSignInModal(){
    var modal = document.getElementById("modal-signin");
    modal.style.display = "none";
  }
  
  function showModalSignUp(){
    var modal = document.getElementById("modal-signup");
    modal.style.display = "flex";
  }
  
  function closeSignUpModal(){
    var modal = document.getElementById("modal-signup");
    modal.style.display = "none";
  }

  function showModalCreatePost(){
    alert('Entered');
    var modal = document.getElementById("modal-createPost");
    modal.style.display = "flex";
  }
  
  function closeModalCreatePost(){
    var modal = document.getElementById("modal-createPost");
    modal.style.display = "none";
  }
  
  function navigateToPostList(){
    location.href = "html/postslist.html"
  }
  