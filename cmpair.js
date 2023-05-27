const formCompare = document.getElementById("form-compare")
const one = document.getElementById("one")
const two = document.getElementById("two")

let oneLength
let twoLength

formCompare.addEventListener("submit", (e) => {
  e.preventDefault()
  fetch(`https://api.github.com/users/${one.value}/repos`)
    .then((res) => res.json())
    .then((data) => {
      oneLength = data.length
    })

  fetch(`https://api.github.com/users/${two.value}/repos`)
    .then((res) => res.json())
    .then((data) => {
      twoLength = data.length
      if (oneLength > twoLength) {
        alert(`The Winner is ${one.value} :${oneLength}`)
      } else
        alert(`The Winner is ${two.value} :${twoLength}`)
    })
})