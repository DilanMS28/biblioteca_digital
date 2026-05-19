import React from 'react'

type TitleAdminProps = {
    title: string;
    description: string;
    route?: string
}

export default function TitleSection({title, description, route}: TitleAdminProps) {
  return (
    <div className='mb-8'>
      <p className='font-medium uppercase text-slate-400 mb-2 text-xs'>{route}</p>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-lg text-slate-600">{description}</p>
    </div>
  )
}
