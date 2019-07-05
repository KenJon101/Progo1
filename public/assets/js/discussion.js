//Grab input
//POST to server
//store (persist) on Mongo
//GET to server
$('#comments-form').on('submit', function(event) {
  event.preventDefault();
  
  getUser().then(user => {
  
    const $form = $(this);
    const action = $form.attr('action');

    const {
      avatar,
      firstname,
      userUID
    } = user;

    user = JSON.stringify({
      avatar,
      firstname,
      userUID
    });

    const data = {
      user,
      comments: $form.find('#comments').val()
    };

    $.post(action, data).then(res => {
      data.createdAt = new Date();
      $('#posts').prepend(commentTemplate(data));
    });
  });
});

function commentTemplate(comment) {
  const user = JSON.parse(comment.user || "{}");

  return `
    <div class="comment-container">
      <h3>${user.firstname || '-'}</h3>
      <p class="comment">${comment.comments}</p>
      <span class="date">${new Date(comment.createdAt)}</span>
    </div>
  `;
}

function getPosts() {
  $.get('/posts').then(function(posts) {
    $('#posts').html(posts.map(commentTemplate));
  });
}

getPosts();