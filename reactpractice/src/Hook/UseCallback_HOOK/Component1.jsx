import React, { memo } from 'react'

function Component1() {
    console.log("----- i am component");
  return (
    <div>
        <h1>Hello CallBack</h1>
    </div>
  )
}
export default memo(Component1)