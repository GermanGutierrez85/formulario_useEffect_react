import { React, useState, useEffect } from 'react'

export default function DataDisplay() {
  const [data, setData] = useState([]);
  /* const loadedData = [
    { id: 1, name: 'Me' },
    { id: 2, name: 'Cuesta' },
    { id: 3, name: 'Muchoooo' },
    { id: 4, name: ':(' },
  ] */

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const loadedData = [
        { id: 1, name: 'Me' },
        { id: 2, name: 'Cuesta' },
        { id: 3, name: 'Muchoooo' },
        { id: 4, name: ':(' },
      ]

      setData(loadedData);

    }
    fetchData();
  }, [])

  const list = data.length > 0 ? data.map((element) => (
    <li key={element.id}>{element.name}</li>)) : "Loading..."


  return (
    <>
      <h2>Objetos</h2>
      <ul>
        {list}
      </ul>
    </>
  )
}
