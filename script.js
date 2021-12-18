let td = document.querySelectorAll('td');
let eraser = document.querySelector('.eraser');
let chosenColor = document.querySelector('.chosen-color');
for(let p of td){
  p.onclick = function() {
if(eraser.checked) {
  p.style.backgroundColor = "";

    }
else{
  p.style.backgroundColor = chosenColor.value;
  }
  }
  }

let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.comment-field');

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  newComment.classList.add('user-comment');
  newComment.textContent = commentField.value;
  commentField.value = '';
  commentList.append(newComment);
};
