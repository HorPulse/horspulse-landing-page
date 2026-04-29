"use client";

import {
  SiGoogle,
  SiNetflix,
  SiMeta,
  SiApple,
  SiSpotify,
} from "react-icons/si";

const icons = [
  SiGoogle,
  SiNetflix,
  SiMeta,
  SiApple,
  SiSpotify,
];

export default function Clients() {
  return (
    <div className="px-8 lg:px-16 py-12">
      <div className="overflow-hidden">
        <div className="flex gap-16 w-max animate-scroll">
          {[...icons, ...icons].map((Icon, i) => (
            <Icon
              key={i}
              className="text-3xl text-black opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
}