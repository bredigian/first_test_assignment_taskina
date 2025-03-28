document.querySelectorAll(".checkbox-button").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault()
    button.classList.toggle("active")
  })
})

document.getElementById("button").addEventListener("click", (e) => {
  e.preventDefault()
  console.log("Submitting form...")
})
