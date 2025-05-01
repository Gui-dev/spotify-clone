import { Play } from 'lucide-react'

export const SingleItem = () => {
  return (
    <div className="flex flex-col gap-2.5 rounded-md hover:bg-green-800 py-6 px-4 group transition-all">
      <div className="relative flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center h-[140px] w-[140px] rounded-full overflow-hidden">
          <img
            src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
            alt="Imagem do artista X"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold truncate">Henrique e Juliano</h1>
          <p className="text-sm">Artista</p>
        </div>
        <button
          type="button"
          className="absolute right-2 bottom-14 hidden items-center justify-center bg-green-300 rounded-full p-2 cursor-pointer hover:bg-green-400 group-hover:flex"
        >
          <Play className="text-gray-900 size-5" />
        </button>
      </div>
    </div>
  )
}
