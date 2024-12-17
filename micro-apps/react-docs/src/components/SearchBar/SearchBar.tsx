import { Dispatch, SetStateAction } from 'react'

type Props = {
  searchTerm: string
  handleSearchTerm: Dispatch<SetStateAction<string>>
}

const SearchBar = ({ searchTerm, handleSearchTerm }: Props) => {
  const updateSearch =
    (handleSearchTerm: Dispatch<SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleSearchTerm(e.target.value)
    }

  return (
    <div>
      <label>Search</label>
      <input type="text" value={searchTerm} onChange={updateSearch(handleSearchTerm)} />
    </div>
  )
}

export default SearchBar
