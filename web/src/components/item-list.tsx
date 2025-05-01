import { SingleItem } from './single-item'

interface IItemListProps {
  title: string
}

export const ItemList = ({ title }: IItemListProps) => {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex flex-row items-center justify-between">
        <h1>{title}</h1>
        <a href="/" className="text-base transition-colors hover:text-black">
          Mostrar tudo
        </a>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(172px,1fr))] gap-2 mb-4">
        {Array.from({ length: 6 }).map((_, index) => {
          return <SingleItem key={index} />
        })}
      </div>
    </div>
  )
}
