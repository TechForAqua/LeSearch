"use client";
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
  ChevronUp,
  Plus,
  Sparkles,
  X,
  Settings,
  LogOut,
  Menu,
  PanelRight,
  File,
  NotebookPen,
  FolderOpen,
} from "lucide-react";


import { useEffect, useState,useCallback } from "react";
import { useRouter } from "next/navigation";
import { SearchComponent } from "./searchComponent";
import { FeedbackModal } from "./feedback-modal";

const getBarColor = (current: number, total: number): string => {
  const percentage = (current / total) * 100;
  if (percentage === 0) return "bg-gray-400";
  if (percentage <= 50) return "bg-blue-500";
  if (percentage <= 80) return "bg-yellow-500";
  return "bg-red-500";
};

export function Sidebar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMac, setIsMac] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState<boolean>(false)
  const [isPlusMenuOpen, setIsPlusMenuOpen] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const openModal = () => {
    setIsModalOpen(true);
    setIsOpen(false);
  };

  const closeModal = () => setIsModalOpen(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const togglePlusMenu = () => setIsPlusMenuOpen((prev) => !prev);

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().includes("MAC"))
  }, [])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      // Check if Ctrl (Windows/Linux) or Command (macOS) is pressed along with "K"
      if ((event.key === "k" || event.key === "K") && (isMac ? event.metaKey : event.ctrlKey)) {
        event.preventDefault()
        setOpen((open) => !open)
      }
    },
    [isMac],
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])
  const homeclick = () => {
    router.push("/");
  };
  const handleGraph = () => {
    router.push("/graph");
  };
  return (
    <div className="relative">
      {/* Toggle button (always visible) */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={toggleSidebar}
      >
        <Menu className="h-4 w-4" />
      </Button>
      {!isSidebarOpen && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50"
          onClick={toggleSidebar}
        >
          <PanelRight className="h-4 w-4 " />
        </Button>
      )}
      {/* Sidebar content */}
      <div
        className={`w-64 border-r max-h-full dark:bg-black bg-gray-50 flex flex-col h-screen transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b relative">
          <div className="flex items-center justify-between">
            {/* Dropdown Button */}
            <div
              className={`relative ${isSidebarOpen ? "" : "hidden md:block"}`}
            >
              <Button
                variant="ghost"
                onClick={toggleDropdown}
                className="font-medium flex items-center gap-2"
              >
                <span className={isSidebarOpen ? "" : "hidden md:hidden"}>
                  Tarun Sai Srini...
                </span>
                <Users className="h-4 w-4" />
              </Button>
              {isOpen && (
                <div className="absolute left-0 top-10 w-48 dark:bg-black bg-white shadow-lg rounded-md border border-gray-200 z-10">
                  <ul>
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#333] cursor-pointer"
                      onClick={() => alert("Profile selected")}
                    >
                      <Users className="h-4 w-4" /> Profile
                    </li>
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#333] cursor-pointer"
                      onClick={openModal}
                    >
                      <Settings className="h-4 w-4" /> Settings
                    </li>
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#333] cursor-pointer"
                      onClick={() => alert("Option 3 selected")}
                    >
                      <LogOut className="h-4 w-4" /> Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Collapse and Add New Buttons */}
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hidden  md:flex"
                onClick={toggleSidebar}
              >
                {isSidebarOpen ? (
                  <ChevronUp className="h-4 w-4  -rotate-90" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={togglePlusMenu}
              >
                <Plus className="h-4 w-4" />
              </Button>
              {isPlusMenuOpen && (
                <div className="absolute top-12 right-0 w-48 bg-white dark:bg-black shadow-lg rounded-md border border-gray-200 z-20">
                  <ul>
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#333] cursor-pointer"
                      onClick={() => router.push("/import")}
                    >
                      <File className="h-4 w-4" /> Import
                    </li>
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#333] cursor-pointer"
                      onClick={() => router.push("/write")}
                    >
                      <NotebookPen className="h-4 w-4" /> Note
                    </li>
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#333] cursor-pointer"
                      onClick={() => alert("Upload File")}
                    >
                      <FolderOpen className="h-4 w-4" /> Group
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <ScrollArea className="flex-grow overflow-y-auto">
          <div
            className={`space-y-1 p-2 ${
              isSidebarOpen ? "" : "hidden md:block"
            }`}
          >
            <Button
              variant="ghost"
              onClick={homeclick}
              className="w-full justify-start gap-2"
            >
              <Home className="h-4 w-4" /> {isSidebarOpen && <span>Home</span>}
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-between items-center gap-2"
              onClick={() => setOpen(true)}
            >
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                {isSidebarOpen && <span>Search</span>}
              </div>
              <kbd className="px-2  py-1 text-xs font-mono dark:text-gray-500 dark:bg-black bg-gray-200 rounded">
                {isMac ? "⌘" : "Ctrl"} K
              </kbd>
            </Button>

            <SearchComponent open={open} onOpenChange={setOpen} />
            <Button
              variant="ghost"
              onClick={handleGraph}
              className="w-full justify-start gap-2"
            >
              <GitGraph className="h-4 w-4" />{" "}
              {isSidebarOpen && <span>Graph</span>}
            </Button>
          </div>

          <div
            className={`space-y-1 p-2 ${
              isSidebarOpen ? "" : "hidden md:block"
            }`}
          >
            <Button variant="ghost" className="w-full justify-start gap-2">
              <FileText className="h-4 w-4" />{" "}
              {isSidebarOpen && <span>The Mechanisms of Nucle...</span>}
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <FileText className="h-4 w-4" />{" "}
              {isSidebarOpen && <span>Prompts to get you started</span>}
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <FileText className="h-4 w-4" />{" "}
              {isSidebarOpen && <span>Welcome guide</span>}
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Keyboard className="h-4 w-4" />{" "}
              {isSidebarOpen && <span>Keyboard shortcuts</span>}
            </Button>
          </div>
        </ScrollArea>

        {/* Plan Usage & Actions at Bottom */}
        <div className="p-4 space-y-4 border-t flex-shrink-0">
          {/* Plan Usage Section */}
          <div className="mb-">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">PLAN USAGE</span>
              <Badge variant="secondary" className="font-normal">
                Free
              </Badge>
            </div>
            <div className="flex flex-col text-sm space-y-1">
              {/* AI words/day */}
              <div className="flex items-center justify-between">
                <span>AI words/day</span>
                <span className="text-gray-500">0/300</span>
              </div>
              <div
                className={`w-full h-2 rounded-full ${getBarColor(
                  0,
                  300
                )} mx-auto`}
              ></div>

              {/* Imports/day */}
              <div className="flex items-center justify-between">
                <span>Imports/day</span>
                <span className="text-gray-500">0/5</span>
              </div>
              <div
                className={`w-full h-2 rounded-full ${getBarColor(
                  0,
                  5
                )} mx-auto`}
              ></div>

              {/* Recordings/day */}
              <div className="flex items-center justify-between">
                <span>Recordings/day</span>
                <span className="text-gray-500">0/1</span>
              </div>
              <div
                className={`w-full h-2 rounded-full ${getBarColor(
                  0,
                  1
                )} mx-auto`}
              ></div>
            </div>
          </div>

          {/* Unlimited Plan Button */}
          <Button
            variant="secondary"
            className="w-full justify-start gap-2 mb-4"
          >
            <Sparkles className="h-4 w-4" />{" "}
            {isSidebarOpen && <span>Upgrade</span>}
          </Button>

          {/* Additional Actions */}
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Users className="h-4 w-4" />{" "}
              {isSidebarOpen && <span>Invite and earn</span>}
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2" onClick={() => setIsFeedbackOpen(true)}>
              <ThumbsUp className="h-4 w-4" />
              {isSidebarOpen && <span>Feedback</span>}
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <HelpCircle className="h-4 w-4" />{" "}
              {isSidebarOpen && <span>Support</span>}
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500  bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-[#222] rounded-md shadow-lg w-1/2 p-6 relative">
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
                <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1">
                  Display name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2 dark:text-white text-gray-700 focus:ring focus:ring-blue-500"
                  defaultValue="Tarun Sai Srinivas"
                />
              </div>

              {/* Workspace Name */}
              <div>
                <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1">
                  Workspace name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2 dark:bg-[#222] text-gray-400 bg-gray-100"
                  defaultValue="My Workspace"
                  disabled
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium dark:text-gray-300  text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border rounded-md p-2 text-gray-400 dark:bg-[#222] bg-gray-100"
                  defaultValue="tarunsaisrinivas7@gmail.com"
                  disabled
                />
              </div>

              {/* Language */}
              <div>
                <label className="block text-sm font-medium dark:text-white text-gray-700 mb-1">
                  Language
                </label>
                <select
                  className="w-full border rounded-md p-2 dark:text-white text-gray-700 focus:ring focus:ring-blue-500"
                  defaultValue="English"
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>

              {/* Citation Format */}
              <div>
                <label className="block text-sm font-medium dark:text-white text-gray-700 mb-1">
                  Citation Format
                </label>
                <select
                  className="w-full border rounded-md p-2 dark:text-white text-gray-700 focus:ring focus:ring-blue-500"
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
       <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
    </div>
  );
}
