import * as React from 'react'
import { ActivityIndicator, FlatList, ViewStyle } from 'react-native'

interface props {
  activityIndicatorStyle?: ViewStyle
  listData: any[]
  renderFlatlistItem: ({
    item,
    index,
  }: {
    item: any
    index: number
  }) => JSX.Element
  onListEndReached?: () => void
  windowSize?: number
  maxToRenderPerBatch?: number
  updateCellsBatchingPeriod?: number
  removeClippedSubviews?: boolean
  initialNumToRender?: number
  style?: ViewStyle
  listFooterComponent?: () => JSX.Element
  isLoading: boolean
  onEndReachedThreshold?: number | any
  keyExtractor?: () => string
  indicatorColor?: string
}

const defaultProps: props = {
  windowSize: 5,
  maxToRenderPerBatch: 5,
  updateCellsBatchingPeriod: 50,
  removeClippedSubviews: false,
  initialNumToRender: 5,
  isLoading: false,
  listData: [],
  renderFlatlistItem: function ({
    item,
    index,
  }: {
    item: any
    index: any
  }): JSX.Element {
    throw new Error('Function not implemented.')
  },
}

const LoadMoreFlatlist: React.FC<props> = (props) => {
  const listFooterComp = () => {
    return (
      <ActivityIndicator
        size={'large'}
        style={props.activityIndicatorStyle}
        color={props?.indicatorColor}
      />
    )
  }

  return (
    <FlatList
      data={props.listData}
      renderItem={props.renderFlatlistItem}
      onEndReached={props.onListEndReached}
      windowSize={props.windowSize}
      maxToRenderPerBatch={props?.maxToRenderPerBatch}
      updateCellsBatchingPeriod={props?.updateCellsBatchingPeriod}
      removeClippedSubviews={props?.removeClippedSubviews}
      initialNumToRender={props?.initialNumToRender}
      style={props?.style}
      ListFooterComponent={
        props.isLoading
          ? props.listFooterComponent
            ? props.listFooterComponent
            : listFooterComp
          : null
      }
      onEndReachedThreshold={props.onEndReachedThreshold}
      keyExtractor={(item, index) => index.toString()}
      {...props}
    />
  )
}

LoadMoreFlatlist.defaultProps = defaultProps
export default LoadMoreFlatlist
