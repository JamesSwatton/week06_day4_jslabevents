document.addEventListener('DOMContentLoaded', () => {

const inputForm = document.querySelector('#new-item-form');
inputForm.addEventListener('submit', handleInputForm)


  console.log('JavaScript loaded');
})


const handleInputForm = function(event){
  event.preventDefault()
  const listItem = document.createElement('li')

  const listH1 = document.createElement('h1')
  const listH3 = document.createElement('h3')
  const listP = document.createElement('p')

  listH1.textContent = `${event.target.title.value}`
  listH3.textContent = ` ${event.target.author.value}`
  listP.textContent = `${event.target.category.value}`

  listItem.appendChild(listH1)
  listItem.appendChild(listH3)
  listItem.appendChild(listP)

  const readingList = document.querySelector('#reading-list')
  readingList.appendChild(listItem)

}
