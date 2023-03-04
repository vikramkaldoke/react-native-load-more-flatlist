# React Native Load More Flatlist

A react-native-load-more-flatlist component is based on Flatlist component for React Native.
This component will help you to achieve infinite scroll functionality of flatlist with the bottom loader component.

![loadmore](https://user-images.githubusercontent.com/49480790/222896319-2766710f-caf3-496b-9164-8d9daee5dba3.gif)


## Install

1. Install this package using `npm` or `yarn`

with `npm`:

```
npm install --save react-native-load-more-flatlist
```

with `yarn`:

```
yarn add react-native-load-more-flatlist
```

2. `import { LoadMoreFlatlist } from 'react-native-load-more-flatlist';`

## Api

### Props

All props are passed to underlying [FlatList](https://facebook.github.io/react-native/docs/flatlist)

| Name                       | Type                                                                                      | Description                             
| :------------------------- | :---------------------------------------------------------------------------------------- | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| `listData`                     | `T[]`                                                                                     | List of items to be rendered.                                                                                                                                                                                              |
| `activityIndicatorStyle`                     | `ViewStyle`                                                                                     | To set style to Activity Indicator(bottom loader).                                                                                                                                                                                      |
| `renderFlatlistItem`               | `(params: {item:{},index:number) => JSX.Element` | Flatlist render item.                                                                                                                           |
| `onListEndReached`        | `() => void`                                 | Callback function once list scrolled to the end.                                                                                                                                                         |
| `isLoading`             | `boolean`                                                      | Flag to show or hide bottom loader indicator (required).                                                                                                                                                                                          |
| `indicatorColor`              | `string`                                                                 |To set activity indicator color.                                                                                                                                                                                    |
| `listFooterComponent`                | `() => JSX.Element`                                                                 | To pass custom list footer loader component.                                                                                                                                                                                 |
| `...props`                | `flatlist default props`                               | You can pass all other flatlist props.                                                                                                                                          |

## Example

```typescript
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import  {
  LoadMoreFlatlist,
} from 'react-native-load-more-flatlist';
import ListItem from './components/listItem/ListItem';
import { data } from './data';
import styles from './style';

const App = () => {
  const [listData, setListData] = useState(data)
  const [isLoading, setIsLoading] = useState(false)

  const onListEndReached = async () => {
    setIsLoading(true)
    await setTimeout(() => {
      setListData([...listData, ...data])
      setIsLoading(false)
    }, 2000);
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

```
### Data file (data.tsx)
```typescript
export const data = [
    {name: 'BitCoin', value: 50},
    {name: 'Crypto', value: 45},
    {name: 'Zipto', value: 58},
    {name: 'CoinZero', value: 75},
    {name: 'Ruppee', value: 69}];
```

### List Item file (ListItem.tsx)
```typescript
import React, { memo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './style'

interface props {
  title?: string
  onPress?: Function
  isRajya?: boolean
  value?: any
  setSelectedValue?: any
}

const ListItem: React.FC<props> = (props) => {
  const { title, value } = props
  return (
    <TouchableOpacity style={styles.containerStyle}>
      <View style={styles.wrapperViewstyle}>
        <Text style={styles.textStyle}>{title}</Text>
        <Text style={styles.valueTextStyle}>{value}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default memo(ListItem);

```

### List Item style file (style.ts)
```typescript
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  containerStyle: {
    padding: 20,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 4,
    elevation: 5,
  },
  wrapperViewstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontWeight: '700',
    color: 'black',
  },
  valueTextStyle: {
    fontWeight: '700',
    color: 'black',
  },
})

export default styles
```

