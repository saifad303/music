import Player from "./Player";
import AlbumList from "./AlbumList";

function Main() {
  return (
    <div className="relative bg-gray-500 w-screen h-screen">
      <AlbumList />
      <Player />
    </div>
  );
}

export default Main;
