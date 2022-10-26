import clsx from "clsx";
import React from "react";

export default function ButtonPrimary(){
    return(
        <button className={clsx(
            'bg-[#003D79]',
            'text-white',
            'py-2 px-4',
            'w-40',
            'rounded',
            'hover:border-white hover:border'
            )}
            type="submit">
            Iniciar sesion
          </button>

    )
}