   

const form = document.getElementById("form")
const search = document.getElementById("search")
const profile = document.getElementById("profile-info")
const repo = document.getElementById("repo")


form.addEventListener("submit", (e) => {
  e.preventDefault()

  const user = search.value


  const users = fetch(
    `https://api.github.com/users/${user}`
  )
    .then((res) => res.json())
    .then((data) => {

      profile.innerHTML = `  <div class="profile-info">
      <img class="userImg" src=${data.avatar_url} alt="" />

           <h3 class="username">${data.login}</h3>   
            <div class="hold-follow">
            <h4 > <span>${data.followers}</span> Follower</h4>
            <h4 ><span>${data.following}</span> Following</h4>
           </div>
           </div>`

      const repos = fetch(
        `https://api.github.com/users/${user}/repos`
      )
        .then((res) => res.json())
        .then((data) => {
          repos.innerHTML = `
        
            <div class="repo">
            <div class="namerepo"><a href=${data[0].html_url}><h4>${data[0].name}</h4></a></div>
            <div class="namerepo"><a href=${data[1].html_url}><h4>${data[1].name}</h4></a></div>
            <div class="namerepo"><a href=${data[2].html_url}><h4>${data[2].name}</h4></a></div>
            <div class="namerepo"><a href=${data[3].html_url}><h4>${data[3].name}</h4></a></div>
            <div class="namerepo"><a href=${data[4].html_url}><h4>${data[4].name}</h4></a></div>
            <div class="namerepo"><a href=${data[5].html_url}><h4>${data[5].name}</h4></a></div>
             </div>`

          
        })
    })
})














