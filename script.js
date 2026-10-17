const data = [
    {
        name: 'name',
        title:'des',
        age: 13
    },
      {
        name: 'name',
        title:'des',
        age: 13
    },
      {
        name: 'name',
        title:'des',
        age: 13
    },
      {
        name: 'name',
        title:'des',
        age: 13
    }
]

const container = document.querySelector('.container')

data.map((item) => {
    const div = document.createElement('div')
    div.innerHTML = `
    <h1>${item.name}</h1>
     <h2>${item.title}</h2>
      <h3>${item.age}</h3>
    `
    container.appendChild(div)
    const h1 = div.querySelector('h1')
    h1.style.color = 'red'
    h1.style.backgroundColor = 'black'
})

