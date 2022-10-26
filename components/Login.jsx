import clsx from "clsx"
import React from "react"
import {useForm} from "react-hook-form"
import ButtonPrimary from "./ButtonPrimary"

export default function Login({ }) {
const {register,handleSubmit} = useForm()
const onSubmit = async data => {
  let result = await fetch(
    '', // aquí va la liga de la data
    {
      method: 'POST',
      body: JSON.stringify(data)
    }
  )
  console.log(await result.json())
}
  return(
    <>
      <section className={clsx(
        'md:py-10 md:px-5', 
        'w-full',
        'h-screen',
        'flex', 
        'lg:space-x-20 md:content-center'
      )}>
        <article className={clsx(
          'h-full', 
          'w-full', 
        )}  
        >
      <form className={clsx(
      'bg-white/20',
      'border border-white/30 rounded-2xl',
      'backdrop-blur-sm',
      'flex- flex-col justify-center',
      'py-8 px-5',
      'shadow-xl shadow-black/10',
      'w-full',
      'items-center',
      'hover:border-white shadow-2xl hover:shadow-white/60',
      )} onSubmit={handleSubmit(onSubmit)}>
        <div className={clsx('mb-4')}>
          <h1 className={clsx(
            'text-center text-white',
            'text-3xl',
            'py-11'
          )}>Bienvenido</h1>
          <input className={clsx(
            'shadow',
            'appearance-none',
            'border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
            'hover:border-cyan-400 border-2'
          )} 
            id="username" 
            type="email" 
            placeholder="Ingresa tu correo" {...register("email", { required: true},{pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Entered value does not match email format'
          }})}/>
        </div>
        <div className={clsx(
          'mb-6'
        )}>
          <input className={clsx(
            'shadow',
            'appearance-none',
            'border',
            'rounded',
            'w-full',
            'py-2 px-3',
            'text-gray-700',
            'mb-3',
            'leading-tight',
            'hover:border-cyan-400 border-1',
            'focus:outline-none focus:shadow-outline')}
            id="password" 
            type="password" 
            placeholder="Ingresa tu contraseña" {...register("password", { required: true, maxLength:16,minLength:8     
            })}/>  
        </div>
        <div className={clsx(
          ' flex ',
          ' items-center',
          'justify-between',
          'flex-col'
          )}>
            <ButtonPrimary/>
          <a className={clsx(
            'inline-block',
            'align-baseline',
            'text-white',
            'hover:text-blue-800',
            'py-4',

          )}  href="#">Crear cuenta
          </a>
        </div>
      </form>
          
        </article>
      </section>
        
    </>
  )
}