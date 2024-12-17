import { useEffect, useState } from 'react'

import { topics as topicListData } from '../../utils/fdata'

type topicListType = {
  id: number
  name: string
  link: string
}

const TopicList = ({ filter }: { filter: string }) => {
  const [topics, setTopics] = useState<topicListType[] | []>([])

  useEffect(() => {
    const filteredTopics = () => {
      return topicListData.filter((topic) =>
        topic.name.toLowerCase().includes(filter.toLowerCase())
      )
    }

    setTopics(topicListData)
    if (filter) {
      setTopics(filteredTopics())
    }
  }, [filter])

  if (!topics.length) {
    return <p>Loading Topics</p>
  }

  return (
    <ul>
      {topics.map((topic) => (
        <li key={topic.id}>{topic.name}</li>
      ))}
    </ul>
  )
}

export default TopicList
