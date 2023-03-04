import * as React from 'react'
import { NativeModules } from 'react-native'
import LoadMoreFlatlist from './components/loadMoreFlatlist'


export const addOne = (input: number) => input + 1

export {LoadMoreFlatlist}

export default NativeModules.LoadMoreFlatlistModule
