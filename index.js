let selectedPages = []

document.querySelectorAll(".checkbox-button").forEach((button, index) => {
  button.addEventListener("click", (e) => {
    e.preventDefault()

    if (button.id === "all-pages") {
      if (!button.classList.contains("active")) {
        document.querySelectorAll(".checkbox-button").forEach((item) => {
          if (!item.classList.contains("active") && item.id !== "all-pages") {
            item.classList.add("active")
            if (!selectedPages.includes(item.id)) {
              selectedPages.push(item.id)
            }
          }
        })
      } else {
        document.querySelectorAll(".checkbox-button").forEach((item) => {
          if (item.id !== "all-pages" && item.classList.contains("active")) {
            item.classList.remove("active")
            selectedPages = selectedPages.filter((id) => id !== item.id)
          }
        })
      }

      button.classList.toggle("active")
      return
    }

    button.classList.toggle("active")

    if (index > 0) {
      if (!selectedPages.includes(button.id)) {
        selectedPages.push(button.id)
      } else {
        selectedPages = selectedPages.filter((item) => item !== button.id)
      }
    }
  })
})

document.getElementById("button").addEventListener("click", (e) => {
  e.preventDefault()
  console.log(selectedPages)
})
