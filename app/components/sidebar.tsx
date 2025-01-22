import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Home,
  Search,
  GitGraph,
  FileText,
  Keyboard,
  Users,
  ThumbsUp,
  HelpCircle,
  ChevronDown,
  Plus,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const openModal = () => {
      setIsModalOpen(true);
      setIsOpen(false); // Close dropdown when modal opens
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

  return (
    <div className="w-64 border-r bg-gray-50 flex flex-col">
      <div className="p-4 border-b relative">
        <div className="flex items-center justify-between">
          {/* Button with Dropdown */}
          <div className="relative">
            <Button
              variant="ghost"
              onClick={toggleDropdown}
              className="font-medium flex items-center gap-2"
            >
              Tarun Sai Srini...
              <ChevronDown className="h-4 w-4" />
            </Button>
            {isOpen && (
              <div className="absolute left-0 top-10 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-10">
                <ul>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={openModal}
                  >
                    Option 1
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => alert("Option 2 selected")}
                  >
                    Option 2
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => alert("Option 3 selected")}
                  >
                    Option 3
                  </li>
                </ul>
              </div>
            )}
          </div>
          

          {/* Additional Buttons */}
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronDown className="h-4 w-4 rotate-90" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Sidebar Content */}
      <ScrollArea className="flex-1">
        <div className="space-y-1 p-2">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Home className="h-4 w-4" /> Home
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Search className="h-4 w-4" /> Search
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <GitGraph className="h-4 w-4" /> Graph
          </Button>
        </div>

        <div className="space-y-1 p-2">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <FileText className="h-4 w-4" /> The Mechanisms of Nucle...
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <FileText className="h-4 w-4" /> Prompts to get you started
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <FileText className="h-4 w-4" /> Welcome guide
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Keyboard className="h-4 w-4" /> Keyboard shortcuts
          </Button>
        </div>

        <div className="p-4">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">PLAN USAGE</span>
              <Badge variant="secondary" className="font-normal">
                Free
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>AI words/day</span>
                <span className="text-gray-500">0/300</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Imports/day</span>
                <span className="text-gray-500">0/5</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Recordings/day</span>
                <span className="text-gray-500">0/1</span>
              </div>
            </div>
          </div>

          <Button variant="secondary" className="w-full justify-start gap-2 mb-2">
            <Sparkles className="h-4 w-4" /> Get unlimited
          </Button>

          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Users className="h-4 w-4" /> Invite and earn
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <ThumbsUp className="h-4 w-4" /> Feedback
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <HelpCircle className="h-4 w-4" /> Support
            </Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
