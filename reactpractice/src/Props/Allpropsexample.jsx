import React from 'react'
import Parent1component from './Parent1component'
import Parent2component from './Parent2component'
import Parent3component from './Parent3component'
import Parent4component from './Parent4component'
import Parent5compnent from './Parent5compnent'
import Parent6component from './Parent6component'
import Parent7component from './Parent7component'
import Parent8compnent from './Parent8compnent'
import Parent9classcomponent from './Parent9classcomponent'

export default function Allpropsexample() {
  return (
    <div>
        {/* pass single or multiple variable one component to other component */}
        {/* <Parent1component/> */}

        {/* send multiple code or content to child */}
        {/* <Parent2component/> */}

        {/* transfer method or function to child component */}
        {/* <Parent3component/> */}

        {/* conditional Randering */}
        <Parent4component/>

        {/* <Parent5compnent/> */}
        {/* <Parent6component/> */}

        {/* <Parent7component/> */}
        {/* <Parent8compnent/> */}

        <Parent9classcomponent/>
    </div>
  )
}
