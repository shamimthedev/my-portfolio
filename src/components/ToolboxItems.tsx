export const ToolboxItems = () => {
    return (
        <div className="">
            {toolboxItems.map((item) => (
                <div key={item.title} className="inline-flex gap-4 py-2 px-3 items-centeroutline outline-2 outline-white/10 rounded-lg">
                    <span>{item.icon}</span>
                    <span className='font-semibold'>{item.title}</span>
                </div>
            ))}
        </div>
    )
}