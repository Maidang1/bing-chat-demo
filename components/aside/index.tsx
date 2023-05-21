export const Aside = () => {
  return (
    <div className="border-base overflow-hidden shrink-0 w-[300px] h-100dvh border-r hidden md:block">
      <div data-hk="s00-0" className="h-full flex flex-col bg-sidebar">
        <div className="h-14 fi border-b border-base px-4 text-xs uppercase flex items-center text-center">
          Conversations
        </div>
        <div className="flex-1 overflow-auto">
          <div className="group flex items-center h-16 px-4 gap-3 border-b border-l-4 border-b-base hv-base border-l-emerald-600">
            {/* <div className="fcc w-8 h-8 rounded-full text-2xl shrink-0">
              <div className="text-xl i-carbon-chat"></div>
            </div> */}
            <div className="flex-1 truncate">chat1</div>
            <div className="hidden group-hover:block">
              <div className="inline-flex p-2 items-center gap-1 rounded-md hv-base">
                <div className="i-carbon-close"></div>
              </div>
            </div>
          </div>
          <div
            data-hk="s00-2-0"
            className="flex items-center h-18 px-4 gap-4 border-b border-l-4 border-l-transparent border-b-base hv-base"
          >
            <div className="w-8 h-8 flex items-center justify-center op-60">
              <div className="i-carbon-add text-2xl"></div>
            </div>
            <div className="op-60">New Conversation</div>
          </div>
        </div>
      </div>
    </div>
  )
}
