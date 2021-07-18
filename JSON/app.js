//JS CODe 
  fetch("https://jsonplaceholder.typicode.com/posts").then(function(responce){
             return responce.json();
                }).then(function(body){
                      console.log(body, "body");
                      document.getElementsByClassName("class-body")[0].innerHTML= body[0].userId;
                      document.getElementsByClassName("class-body")[1].innerHTML= body[1].id;
                      document.getElementsByClassName("class-body")[2].innerHTML= body[2].title;
                      document.getElementsByClassName("class-body")[3].innerHTML= body[3].body;
                  })