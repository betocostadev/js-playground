const repo = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad']

function searchSuggestions(repository, customerQuery) {
  // Write your code here
  console.log('running')
  const match = repository.filter((st) =>
    st.toLowerCase().includes(customerQuery.substring(0, 2).toLowerCase())
  )
  const sorted = match && match.length ? match.sort((a, b) => a.localeCompare(b)) : []
  console.log(sorted)
  return sorted.length > 3 ? sorted.filter((d, ind) => ind < 3) : sorted
}

console.log(searchSuggestions(repo, 'Mouse'))
