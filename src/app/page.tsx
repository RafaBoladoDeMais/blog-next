import clsx from "clsx";

export default function HomePage(){
  return (
    <div>
    <h1 className={clsx('text-xl', 'font-bold', 'text-blue-500', 'hover:text-blue-300', 'cursor-pointer')} >Hello from page.tsx</h1> 
    </div> 
  )
} 
