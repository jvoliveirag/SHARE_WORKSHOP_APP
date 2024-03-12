import { Separator } from "@radix-ui/react-separator";
import { Github } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {

  return (
    <div className="px-6 py-3 flex items-center justify-between border-b">
      <div className="flex items-center md:pt-2">
        <a href="/"><img src="logo.png" alt="logo" width={150} className="md:flex flex-1 mr-3 pb-2 hidden"/></a>
        <a href="/"><img src="favicon.png" alt="logo" width={40} className="md:hidden flex-1 mr-3 pb-2 flex"/></a>
        <Separator orientation="vertical" className="h-8" />
        <h1 className="md:text-2xl text-lg md:font-normal font-bold flex md:ml-3 pb-2">
          Gestão de pessoas
        </h1>
      </div>

      <div className="flex items-center gap-3 pb-2 md:pb-0">
        <span className="text-sm md:text-base text-muted-foreground hidden md:flex md:gap-1">
          Desenvolvido durante os workshops da <a href="https://www.share4edu.com/" className="underline font-bold italic">SHARE</a>
        </span>

        <Separator orientation="vertical" className="h-6" />

        <Button variant="outline">
          <Github className="w-4 h-4 mr-2 flex" />
          <a href="https://github.com/jvoliveirag/">Github</a>
        </Button>
      </div>
    </div>
  )
}