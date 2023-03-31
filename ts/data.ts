// class that store the data
class PostsData {
  id: number;
  title: string;
  body: string;
  imageUrl: string;

  constructor(id:number, title:string, body:string, imageUrl: string){
    this.id = id;
    this.title = title;
    this.body = body;
    this.imageUrl = imageUrl;
  }
}

//class that store the comments
class Comments {
  id: number;
  postId: number;
  email: string;
  body: string;
  
  constructor(id:number, postId:number, body:string, email:string){
    this.id = id;
    this.postId = postId;
    this.body = body;
    this.email = email;
  }
}

// set the posts
const data: PostsData[] = new Array<PostsData>();

data.push({
  id : 1,
  title : "Post 1",
  body : "Body of post 1",
  imageUrl : "https://fotografiamais.com.br/wp-content/uploads/2019/04/fotos-da-natureza-um-genero.jpg"
});

data.push({
  id: 2,
  title: "Post 2",
  body: "Body of post 2",
  imageUrl: "https://img.freepik.com/fotos-gratis/bela-paisagem-de-um-rio-cercado-por-muito-verde-em-uma-floresta_181624-40482.jpg?w=1380&t=st=1680198786~exp=1680199386~hmac=75263a427df2001893bc9d39b43066fa991b5336c38bc525477146a5217b106b"
});

data.push({
  id: 3,
  title: "Post 3",
  body: "Body of post 3",
  imageUrl: "https://img.freepik.com/fotos-gratis/caminho-de-madeira-bonito-indo-as-arvores-coloridas-de-tirar-o-folego-em-uma-floresta_181624-5840.jpg?w=1380&t=st=1680198883~exp=1680199483~hmac=cf55aa1c1c1f8b0659c545d85067eee21750235943d18580146f4364faa29f42"
});

// set the comments
const comments: Comments[] = new Array<Comments>();

comments.push({
  id: 1,
  postId: 1,
  email: "pedrinho@gmail.com",
  body: `What a beautiful view, I love the sunset!`
});

comments.push({
  id: 2,
  postId: 1,
  email: "Joaozin@gmail.com",
  body: `Amazing!!!`
});

comments.push({
  id: 1,
  postId: 2,
  email: "Joaozin@gmail.com",
  body: `I love rivers!!!`
});

comments.push({
  id: 2,
  postId: 2,
  email: "klebermachado@gmail.com",
  body: `Wow, how much green`
});

comments.push({
  id: 1,
  postId: 3,
  email: "RafadoBt@gmail.com",
  body: `I love Autumn!!!`
});

comments.push({
  id: 2,
  postId: 3,
  email: "Bovs@gmail.com",
  body: `Where are this place? I need to visit`
});


// HTML Posts
const postCard = (aux : PostsData) => `
  <div class='post'>
    <button type='button' class='post-btn' id='${aux.id}'>
      <img src='${aux.imageUrl}' alt='${aux.title}' />
      <div>
        <h1>${aux.title}</h1>
        <p>${aux.body}</p>
      </div>
    </button>
  </div>
`;

// HTML Comments
const postComments = (aux : Comments) =>` 
  <h3>${aux.email}</h3>
  <p>${aux.body}</p>
`;

//beginning of project
const postsList = document.getElementById('posts-list')!;
let postsDataToHTML = '';

if (postsList) {

  for (const postData of data) {  
    postsDataToHTML += postCard(postData)!;
  }

  postsList.innerHTML = postsDataToHTML;

  createPostButtons();
}

function createPostButtons() {
  const postButtons = document.querySelectorAll('.post-btn');
  postButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const postId = +this.id;
      const postData : PostsData = data.find((post : PostsData) => post.id === postId)!;

      // HTML from the new page
      let imageHtml = ` <div class="postImage">
                          <img src="${postData.imageUrl}" alt="${postData.title}" class="imageClass" />
                          <div class="description">
                            <h1>${postData.title}</h1>
                            <p id="body">${postData.body}</p>
                          </div>
                        </div>`;  
      
      let commentsHtml = `<h2 class="commentsh2">Comments</h2>`;

      for(const aux of comments){
        if(aux.postId == postId)
          commentsHtml += postComments(aux);
      }

      const backHtml = `<button id="back-btn">Back</button>`;
      const pageHtml = `${imageHtml}<div class="comments">${commentsHtml}</div>${backHtml}`;

      // New page with the post and the comments
      postsList.innerHTML = pageHtml;

      // Back-Button event
      const backButton = document.querySelector('#back-btn')!;
      backButton.addEventListener('click', function() {
        postsList.innerHTML = postsDataToHTML;
        createPostButtons();
      });
    });
  });
}
