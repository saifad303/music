import {
  SearchIcon,
  MenuIcon,
  DotsVerticalIcon,
} from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/solid";
function AlbumList() {
  return (
    <div className="px-7 bg-zinc-300 text-center h-screen overflow-hidden">
      <div className="flex items-center justify-between">
        <button>
          <MenuIcon className="h-7" />
        </button>
        <button>
          <SearchIcon className="h-7" />
        </button>
      </div>
      <h2 className="text-xl font-semibold">The Doors</h2>
      <p className="text-sm font-normal">Jim Morrison</p>
      <div className="overflow-y-auto h-[61%]">
        <div className="flex items-start py-3">
          <button className="mr-4">
            <PlayIcon className="h-10" />
          </button>
          <div className="text-left">
            <p className="text-sm font-medium">Song name</p>
            <p className="text-xs">Artist name</p>
          </div>
          <button className="ml-auto self-center">
            <DotsVerticalIcon className="h-7" />
          </button>
        </div>
        <div className="flex items-start py-3">
          <button className="mr-4">
            <PlayIcon className="h-10" />
          </button>
          <div className="text-left">
            <p className="text-sm font-medium">Song name</p>
            <p className="text-xs">Artist name</p>
          </div>
          <button className="ml-auto self-center">
            <DotsVerticalIcon className="h-7" />
          </button>
        </div>
        <div className="flex items-start py-3">
          <button className="mr-4">
            <PlayIcon className="h-10" />
          </button>
          <div className="text-left">
            <p className="text-sm font-medium">Song name</p>
            <p className="text-xs">Artist name</p>
          </div>
          <button className="ml-auto self-center">
            <DotsVerticalIcon className="h-7" />
          </button>
        </div>
        <div className="flex items-start py-3">
          <button className="mr-4">
            <PlayIcon className="h-10" />
          </button>
          <div className="text-left">
            <p className="text-sm font-medium">Song name</p>
            <p className="text-xs">Artist name</p>
          </div>
          <button className="ml-auto self-center">
            <DotsVerticalIcon className="h-7" />
          </button>
        </div>
        <div className="flex items-start py-3">
          <button className="mr-4">
            <PlayIcon className="h-10" />
          </button>
          <div className="text-left">
            <p className="text-sm font-medium">Song name</p>
            <p className="text-xs">Artist name</p>
          </div>
          <button className="ml-auto self-center">
            <DotsVerticalIcon className="h-7" />
          </button>
        </div>
        <div className="flex items-start py-3">
          <button className="mr-4">
            <PlayIcon className="h-10" />
          </button>
          <div className="text-left">
            <p className="text-sm font-medium">Song name</p>
            <p className="text-xs">Artist name</p>
          </div>
          <button className="ml-auto self-center">
            <DotsVerticalIcon className="h-7" />
          </button>
        </div>
        <div className="flex items-start py-3">
          <button className="mr-4">
            <PlayIcon className="h-10" />
          </button>
          <div className="text-left">
            <p className="text-sm font-medium">Song name</p>
            <p className="text-xs">Artist name</p>
          </div>
          <button className="ml-auto self-center">
            <DotsVerticalIcon className="h-7" />
          </button>
        </div>
        <div className="flex items-start py-3">
          <button className="mr-4">
            <PlayIcon className="h-10" />
          </button>
          <div className="text-left">
            <p className="text-sm font-medium">Last Song name</p>
            <p className="text-xs">Artist name</p>
          </div>
          <button className="ml-auto self-center">
            <DotsVerticalIcon className="h-7" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AlbumList;
