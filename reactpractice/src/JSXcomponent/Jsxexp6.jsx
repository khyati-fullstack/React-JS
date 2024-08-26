import React from 'react'
import Adminpage from './Extracom/Adminpage'
import Customer from './Extracom/Customer'
import Suppler from './Extracom/Suppler'

export default function Jsxexp6() {

    const userrole = "Admin"
    switch (userrole) {
        // case "Admin":
        //     return <Adminpage/>;
        // case "Admin":
        //     return <Customer/>;
        case "Admin":
            return <Suppler/>;
    
       
    }
}
