"use client"
// import { TopBanner } from "./components/top-banner"
import { Sidebar } from "./components/sidebar"
import { MainContent } from "./components/main-content"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <TopBanner /> */}
      <div className="flex flex-1">
        <Sidebar />
        <MainContent />
        <div className="fixed top-4 right-4">
          <Button className="bg-black text-white hover:bg-black/90">Upgrade</Button>
        </div>
      </div>
    </div>
  )
}

