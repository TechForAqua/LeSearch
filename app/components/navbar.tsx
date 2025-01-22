import { ChevronDown, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <div className="h-14 border-b px-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <span className="font-medium">Tarun Sai Srinivas</span>
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon">
          <ChevronDown className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Plus className="h-4 w-4" />
        </Button>
        <Button className="ml-2">Upgrade</Button>
      </div>
    </div>
  )
}

