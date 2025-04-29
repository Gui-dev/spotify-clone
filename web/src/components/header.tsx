import logo from './../assets/spotify-logo.png'

export const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between p-5">
      <img src={logo} alt="Spotify Logo" />
      <a href="/" className="text-2xl transition-colors hover:text-green-500">
        <h1>Spotify</h1>
      </a>
    </div>
  )
}
