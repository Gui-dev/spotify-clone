import { ItemList } from './item-list'

export const Main = () => {
  return (
    <div className="mr-2.5 mb-2.5 ml-2.5 flex-1 rounded-2xl bg-linear-to-b from-green-700 to-black p-5">
      <ItemList title="Artistas populares" />
      <ItemList title="Músicas populares" />
    </div>
  )
}
