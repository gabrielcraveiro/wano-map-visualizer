import React, { useState } from "react";
// @ts-ignore
import { MapInteractionCSS } from "react-map-interaction";
import { Button } from "@mantine/core";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export default function Home() {
  const [chapter, setChapter] = useState(1045);

  return (
    <main>
      <div
        id="map"
        className={
          "min-h-screen min-w-screen bg-black overflow-hidden max-w-screen max-h-screen"
        }
      >
        <div className="flex items-center justify-between bg-gh-500 py-2 px-3 text-white">
          <p>Current Chapter: {chapter}</p>
          <div className="flex space-x-3 items-center">
            <Button
              color={"gray"}
              size={"xs"}
              leftIcon={<ArrowLeftIcon />}
              disabled={chapter <= 1012}
              onClick={() => setChapter(chapter - 1)}
            >
              Last Chapter
            </Button>
            <Button
              color={"gray"}
              size={"xs"}
              rightIcon={<ArrowRightIcon />}
              disabled={chapter >= 1045}
              onClick={() => setChapter(chapter + 1)}
            >
              Next Chapter
            </Button>
          </div>
        </div>
        <MapInteractionCSS showControls={true} className={"<md:h-screen"}>
          <img src={`/maps/${chapter}.jpeg`} className={""} />
        </MapInteractionCSS>
        <div>
          <div className="absolute bottom-2 left-5 bg-gh-500 text-white p-2 rounded text-xs">
            <div>
              Maps by:{" "}
              <a
                className={"text-blue-300 underline"}
                href="https://www.reddit.com/user/kerbeks12"
              >
                KERBEKS12
              </a>
            </div>
            <div className="mt-2">
              App by:{" "}
              <a
                className={"text-blue-300 underline"}
                href="https://gabrielcraveiro.com.br"
              >
                Gabriel Craveiro
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
