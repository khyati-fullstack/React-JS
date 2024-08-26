import React from 'react'

const Childfr1 = React.forwardRef((props,ref) => {
    return (
        <div>
            <div>
                <input type="text" ref={ref} placeholder='Enter Name'onChange={(e)=>props.setName(e?.target?.value)}/>
            </div>     

            <div>
            <input type="checkbox" ref={ref} id='sub1' value="HTML" onChange={(e)=>props.setSubject(e?.target?.value)}/>
            <label>HTML</label> <br />
            <input type="checkbox" ref={ref} id='sub2' value="CSS" onChange={(e)=>props.setSubject(e?.target?.value)}/>
            <label>CSS</label> <br />
            <input type="checkbox" ref={ref} id='sub3' value="JavaScript" onChange={(e)=>props.setSubject(e?.target?.value)}/>
            <label>JavaScript</label>
            </div>       

            <div>
                <input type="email" ref={ref} placeholder='E-mail add' onChange={(e)=>props.setEmail(e?.target?.value)}/>
            </div>

            <div>
            <span><input type="radio" ref={ref} name='gender' id='male' value="male"onChange={(e)=>props.setGender(e?.target?.value)}/>Male </span>
            <span><input type="radio" ref={ref} name='gender' id='female'value="female"onChange={(e)=>props.setGender(e?.target?.value)}/>Female 
            </span>
            </div>

            <div>
                <select name="" id="" ref={ref} onChange={(e)=>props.setCity(e?.target?.value)} >
                <option value="select">Select</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Baroda">Baroda</option>
                <option value="Surat">Surat</option>
                </select> <br />
            </div>
            
        </div>
    )
})
export default Childfr1;

        