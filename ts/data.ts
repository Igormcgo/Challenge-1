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

// set the data
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

// Adding the data to the HTML
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

const postsList = document.getElementById('posts-list');

if (postsList) {
    let postsDataToHTML = ''
  
    for (const postData of data) {  
      postsDataToHTML += postCard(postData)
    }
  
    postsList.innerHTML = postsDataToHTML
  
    const postButtons = document.querySelectorAll('.post-btn');
    postButtons.forEach((button) => {
      button.addEventListener('click', function () {
        console.log(+this.id);
      });
    });
  }


