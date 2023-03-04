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

export default memo(ListItem)
