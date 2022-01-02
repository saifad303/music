import {
  RewindIcon,
  FastForwardIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/solid";
import {
  MinusIcon,
  PlayIcon,
  HomeIcon,
  MusicNoteIcon,
  CollectionIcon,
} from "@heroicons/react/outline";
function Player() {
  return (
    <div className="absolute left-0 bottom-0 bg-gray-700 w-full h-36 rounded-t-3xl">
      <MinusIcon className=" w-20 h-10 absolute -top-[8px] mx-auto left-0 right-0" />
      <div className="flex items-center justify-between mt-5 px-5">
        <div className=" text-gray-900">
          <p className=" text-sm">Riders on the storm</p>
          <p className=" text-base font-medium">The Doors</p>
        </div>
        <div className="flex items-center space-x-3">
          <button>
            <RewindIcon className=" h-5" />
          </button>
          <button>
            <PlayIcon className=" h-14" />
          </button>
          <button>
            <FastForwardIcon className=" h-5" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-around mt-4">
        <button className="flex flex-col items-center justify-center">
          <HomeIcon className="h-6" />
          <p className=" text-xs">Home</p>
        </button>

        <button className="flex flex-col items-center justify-center">
          <MusicNoteIcon className="h-6" />
          <p className=" text-xs">Songs</p>
        </button>

        <button className="flex flex-col items-center justify-center">
          <CollectionIcon className="h-6" />
          <p className=" text-xs">Album</p>
        </button>
        <button className="flex flex-col items-center justify-center">
          <UserGroupIcon className="h-6" />
          <p className=" text-xs">Artist</p>
        </button>

        <button className="flex flex-col items-center justify-center">
          <HeartIcon className="h-6" />
          <p className=" text-xs">Liked</p>
        </button>
      </div>
    </div>
  );
}

export default Player;
