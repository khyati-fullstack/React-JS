import React from 'react'

const Childrefex1 = React.forwardRef((props,ref)=>{
    return (
        <div>
            <input ref={ref} type="text" placeholder="Entet Child"/>
        </div>
    )
})
export default Childrefex1;
