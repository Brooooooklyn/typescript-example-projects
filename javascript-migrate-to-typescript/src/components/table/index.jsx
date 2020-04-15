import React from 'react'

/**
 * @template T
 * @param {{ items: T[] }} props
 * @returns {JSX.Element} 
 */
export const Table = function Table(props) {
  const { items } = props
  const itemNodes = items.map((item) => (
    <div className="table-item">{item}</div>
  ))

  return <div className="table-container">{itemNodes}</div>
}
