import { useState } from 'react'
import SearchBar from '../SearchBar'
import TopicList from '../TopicList'

const MainList = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <SearchBar searchTerm={searchTerm} handleSearchTerm={setSearchTerm} />
      <TopicList filter={searchTerm} />
    </div>
  )
}

export default MainList
