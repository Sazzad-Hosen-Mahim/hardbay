import { useState } from "react"
import { cn } from "@/lib/utils"
import { tabData } from "./ConfigureDetails"
import CommonWrapper from "@/common/CommonWrapper"

export default function ProductSpecifications() {
  const [activeTab, setActiveTab] = useState<"details" | "more">("details")

  return (
 <CommonWrapper>
       <div className=" mx-auto border border-gray-200 rounded-md p-4 mt-4">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        {["details", "more"].map((tab) => (
          <button
            key={tab}
            className={cn(
              "px-4 py-3 text-sm font-medium border-b-2 focus:outline-none cursor-pointer ",
              activeTab === tab
                ? "border-primary-orange text-primary-blue"
                : "border-transparent text-gray-500 hover:text-gray-700"
            )}
            onClick={() => setActiveTab(tab as "details" | "more")}
          >
            {tab === "details" ? "DETAILS" : "MORE INFORMATION"}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "details" ? (
          tabData.details.map((section, i) => (
            <div key={i} className="border-b border-gray-200 pt-4">
              <div className="bg-cyan-600 text-white p-2 rounded-sm">{section.title}</div>
              {section.rows.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 border-b border-gray-200"
                >
                  <div className="col-span-3 p-4 text-gray-700">{row.label}</div>
                  <div className="col-span-9 p-4 text-gray-700">{row.value}</div>
                </div>
              ))}
            </div>
          ))
        ) : (
          tabData.more.map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-12 border-b border-gray-200 p-4 "
            >
              <div className="col-span-3 p-2 text-gray-700">{row.label}</div>
              <div className="col-span-9 p-2 text-gray-700">{row.value}</div>
            </div>
          ))
        )} 
     
      </div>
    </div>
 </CommonWrapper>
  )
}
