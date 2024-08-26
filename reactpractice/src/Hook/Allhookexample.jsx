import React from 'react'
import Hook1example from './Hook1example'
import Hook2example from './Hook2example'
import Task from './Task'
import Task1 from './Task1'
import Hook3example from './Hook3example'
import Hook4example from './Hook4example'
import Task2api from './Task2api'
import Task3api from './Task3api'
import Hook5example from './Hook5example'
import Hook6example from './Hook6example'
import Task4 from './Task4'
import Example1usecontext from './Usecontext_HOOK/Example1usecontext'
import Ucexample1 from './Usecontext_HOOK/Ucexample1'
import Ucontextexp1 from './Usecontext_HOOK/Ucontextexp1'
import Themecomex1 from './Usecontext_HOOK/Themecomex1'
import Themecomex2 from './Usecontext_HOOK/Themecomex2'
import Example1userefclass from './UseRef/Classcomponent/Example1userefclass'
import Example2userefclass from './UseRef/Classcomponent/Example2userefclass'
import Example3userefclass from './UseRef/Classcomponent/Example3userefclass'
import Parentrefex1 from './UseRef/Forwardref/Parentrefex1'
import Example1callback from './UseCallback_HOOK/Example1callback'
import Example1UR from './UseReducer_HOOK/Example1UR'
import Example1UM from './UseMemo_HOOK/Example1UM'

export default function Allhookexample() {
  return (
    <div>
        {/* <Hook1example/> */}
        {/* <Hook2example/> */}
        {/* <Hook3example/> */}
        {/* <Hook4example/> */}

        {/* ......useRef........ */}
        {/* <Hook5example/> */}
        {/* <Hook6example/> */}
        {/* <Example1usecontext/> */}
        {/* <Ucexample1/> */}
        {/* <Ucontextexp1/> */}
        {/* <Themecomex1>
        <Themecomex2/>
        </Themecomex1> */}
        {/* <Example1userefclass/> */}
        {/* <Example2userefclass/> */}
        {/* <Example3userefclass/> */}
        {/* <Parentrefex1/> */}
        
        {/* UseMEMO */}
        <Example1UM/>

        {/* callback hooks */}
        {/* <Example1callback/> */}

        {/* UseReducer */}
        {/* <Example1UR/> */}

        {/* <Task/> */}
        {/* <Task1/> */}
        {/* <Task2api/> */}
        {/* <Task3api/> */}
        {/* <Task4/> */}
    </div>
  )
}
