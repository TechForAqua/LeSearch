"use client"
// import { TopBanner } from "./components/top-banner"
import { Sidebar } from "./components/sidebar"
import { MainContent } from "./components/main-content"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/ModeToggle"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <TopBanner /> */}
      <div className="flex flex-1">
        {/* <Sidebar /> */}
        <MainContent />
        <div className="fixed top-4 right-4">
            <ModeToggle />
        </div>
      </div>
    </div>
  )
}

