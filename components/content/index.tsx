"use client";
import { useRef, useState } from "react"
import ReactMarkdown from "react-markdown";

export const Content = () => {
    const [dataList, setDataList] = useState<string[]>([])
    const [disableInput, setDisableInput] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const handleKeydown = async (e: any) => {
        const code = e.code
        if (code === "Enter" && inputValue) {
            let updateList = [...dataList, inputValue]
            console.log(updateList)
            setDataList(() => updateList)
            setDisableInput(true)
            setInputValue(() => '')
            const res = await fetch("/api/bing-chat", {
                method: "POST",
                body: JSON.stringify({ info: inputValue }),
            })
            const data = await res.json()
            const ans = data?.detail?.text || ""
            if (ans) {
                setDataList(() => [...updateList, ans])
            }
            setDisableInput(false)
        }
    }

    return (
        <main className="flex-1 mt-14 flex felx-col overflow-hidden">
            <div className="flex-1 relative overflow-hidden">
                <div className="scroll-list relative flex flex-col h-full overflow-y-scroll pb-[120px]">
                    <div className="border-b border-base">
                        {dataList.map((item, index) => {
                            return (
                                <div
                                    className="p-6 break-words group relative bg-base-100 border-b border-base"
                                    key={index}
                                >
                                    <div className="max-w-base flex gap-4 overflow-hidden">
                                        <div className="shrink-0 w-7 h-7 rounded-md op-80 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300"></div>
                                        <div
                                            id="menuList-wrapper"
                                            className="block absolute bottom-2 right-4 z-10 op-70 cursor-pointer false"
                                        >
                                            <div>
                                                <div
                                                    className="text-xl i-carbon:overflow-menu-horizontal"
                                                    data-scope="menu"
                                                    data-part="trigger"
                                                    id="menu:cl-6:trigger"
                                                    data-uid="cl-6"
                                                    aria-haspopup="menu"
                                                    aria-controls="menu:cl-6:content"
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="hidden absolute right-6 -top-4 top-0 false">
                                            <div className="op-0 group-hover:op-80 fcc space-x-2 !bg-base px-2 py-1 rounded-md border border-base transition-opacity">
                                                <div>
                                                    <div
                                                        className="i-carbon:restart menu-icon"
                                                        data-scope="tooltip"
                                                        data-part="trigger"
                                                        id="tooltip:cl-7:trigger"
                                                    ></div>
                                                </div>
                                                <div>
                                                    <div
                                                        className="i-carbon:edit menu-icon"
                                                        data-scope="tooltip"
                                                        data-part="trigger"
                                                        id="tooltip:cl-8:trigger"
                                                    ></div>
                                                </div>
                                                <div>
                                                    <div
                                                        className="menu-icon i-carbon-copy"
                                                        data-scope="tooltip"
                                                        data-part="trigger"
                                                        id="tooltip:cl-9:trigger"
                                                    ></div>
                                                </div>
                                                <div>
                                                    <div
                                                        className="i-carbon-trash-can menu-icon"
                                                        data-scope="tooltip"
                                                        data-part="trigger"
                                                        id="tooltip:cl-10:trigger"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div>
                                                <ReactMarkdown>
                                                    {item}
                                                </ReactMarkdown>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="absolute left-0 right-0 bottom-0 h-[60px] border-t border-base flex items-center overflow-hidden">
                    <input
                        autoComplete="off"
                        className="h-full w-full absolute inset-0 py-4 px-[calc(max(1.5rem,(100%-48rem)/2))] scroll-pa-4 input-base outline-none"
                        placeholder={disableInput ? "loading" : "Enter Something..."}
                        onKeyDown={handleKeydown}
                        onChange={(e) => {
                            setInputValue(e.target?.value || '')
                        }}
                        value={inputValue}
                        disabled={disableInput}
                    ></input>
                </div>
            </div>
        </main>
    )
}
