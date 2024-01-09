import { useEffect, useState } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'

type InnerProps = {
  row: number
  items: JSX.Element[]
}
const Row = (props: InnerProps) => {
  const {
    row,
    items
  } = props

  const style = StyleSheet.create({
    row: {
      flexDirection: 'row',
    }
  })

  return (
    <View style={style.row}>
    </View>
  )

}

type GridProps = {
  columns: number
  rows: number
  items: JSX.Element[]
}
export const Grid = (props: GridProps) => {
  const {
    columns,
    rows,
    items
  } = props

  const style = StyleSheet.create({
    container: {
      flex: columns,
      marginHorizontal: "auto"
    }
  })

  return (
    <View style={style.container}>
      {items}
    </View>
  )

}

