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
  X,
} from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "@/components/ui/ModeToggle";

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
    <div className="w-64 border-r dark:bg-black bg-gray-50 flex flex-col">
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
              <div className="absolute left-0 top-10 w-48 dark:bg-black bg-white shadow-lg rounded-md border border-gray-200 z-10">
                <ul>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#333] cursor-pointer"
                    onClick={openModal}
                  >
                    Settings
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#333]  cursor-pointer"
                    
                  >
                    <ModeToggle />
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#333]  cursor-pointer"
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
      {isModalOpen && (
         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
         <div className="bg-white rounded-md shadow-lg w-1/2 p-6 relative">
           {/* Close Button */}
           <button
             className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
             onClick={closeModal}
           >
             <X className="h-5 w-5" />
           </button>

           {/* Modal Content */}
           <h2 className="text-lg font-medium mb-6">My Account</h2>
           <div className="space-y-4">
             {/* Display Name */}
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">
                 Display name
               </label>
               <input
                 type="text"
                 className="w-full border rounded-md p-2 text-gray-700 focus:ring focus:ring-blue-500"
                 defaultValue="Tarun Sai Srinivas"
               />
             </div>

             {/* Workspace Name */}
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">
                 Workspace name
               </label>
               <input
                 type="text"
                 className="w-full border rounded-md p-2 text-gray-400 bg-gray-100"
                 defaultValue="My Workspace"
                 disabled
               />
             </div>

             {/* Email */}
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">
                 Email
               </label>
               <input
                 type="email"
                 className="w-full border rounded-md p-2 text-gray-400 bg-gray-100"
                 defaultValue="tarunsaisrinivas7@gmail.com"
                 disabled
               />
             </div>

             {/* Language */}
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">
                 Language
               </label>
               <select
                 className="w-full border rounded-md p-2 text-gray-700 focus:ring focus:ring-blue-500"
                 defaultValue="English"
               >
                 <option>English</option>
                 <option>Spanish</option>
                 <option>French</option>
               </select>
             </div>

             {/* Citation Format */}
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">
                 Citation Format
               </label>
               <select
                 className="w-full border rounded-md p-2 text-gray-700 focus:ring focus:ring-blue-500"
                 defaultValue="APA (7th edition)"
               >
                 <option>APA (7th edition)</option>
                 <option>MLA</option>
                 <option>Chicago</option>
               </select>
             </div>
           </div>

           {/* Footer */}
           <div className="mt-6 flex justify-end">
             <Button variant="secondary" onClick={closeModal}>
               Close
             </Button>
           </div>
         </div>
       </div>
     )}
    </div>
  );
}
