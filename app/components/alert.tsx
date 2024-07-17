import React, { useState } from 'react'

const Alert = () => {
     const [open,setOpen] = useState(true);

  return (
<>
    {
        open&&
        <div className="w-[350px] h-[100px] ring-black ring-1 ring-inherit text-black absolute right-3 bottom-3 animate-accordion-up delay-1000"> hamada</div>

    }
</>  )
}

export default Alert