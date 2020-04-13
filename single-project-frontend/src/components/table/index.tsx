import React from 'react'

export interface TableProps<T> {
  items: T[]
}

export const Table = function Table<T>(props: TableProps<T>) {
  const { items } = props
  const itemNodes = items.map((item) => (
    <div className="table-item">{item}</div>
  ))

  return <div className="table-container">{itemNodes}</div>
}
