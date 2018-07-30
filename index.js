const token = " ";

function getRepos(){
    fetch("https://api.github.com/users/:user/repos", {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
}