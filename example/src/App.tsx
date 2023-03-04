import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import LoadMoreFlatlistModule, {
  LoadMoreFlatlist,
} from 'react-native-load-more-flatlist'
import ListItem from './components/listItem/ListItem'
import { data } from './data'
import styles from './style'

const App = () => {
  const [listData, setListData] = useState(data)
  const [isLoading, setIsLoading] = useState(false)

  const onListEndReached = async () => {
    setIsLoading(true)
    await setTimeout(() => {
      setListData([...listData, ...data])
      setIsLoading(false)
    }, 2000)
  }

  const renderFlatlistItem = ({ item, index }) => {
    return <ListItem title={item.name} value={item?.value} />
  }
  return (
    <SafeAreaView style={styles.container}>
      <LoadMoreFlatlist
        data={listData}
        onListEndReached={onListEndReached}
        renderFlatlistItem={renderFlatlistItem}
        isLoading={isLoading}
        style={styles.flatlistStyle}
      />
    </SafeAreaView>
  )
}

export default App
