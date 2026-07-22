export const labelEl = document.createElement('label')
labelEl.setAttribute('for', 'search')
labelEl.innerText = `Search`

export const inputEl = document.createElement('input')
inputEl.setAttribute('id', 'search')
inputEl.setAttribute('type', 'text')
inputEl.setAttribute('placeholder', 'Look for author or blog name')

function updateValue(e: any) {
  inputEl.value = e.target?.value
  console.log(inputEl.value)
}

inputEl.addEventListener('change', updateValue)
