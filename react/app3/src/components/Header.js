import React from 'react'

function Header({increase}) {
    console.log("header component re rendered")
  return (
    <div>
        <div>Header-</div>
        <button onClick={increase}>Click</button>
    <div>
        {/* <code>{JSON.stringify(data)}</code> */}
    </div>


    </div>

  )
}

export default React.memo(Header);