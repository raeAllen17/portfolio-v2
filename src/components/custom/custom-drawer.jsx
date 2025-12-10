import { ArrowLeft, ArrowRight, X } from "lucide-react"
import { useState } from "react"

export const Drawer = ({ open, onClose, data }) => {

    const [current, setCurrent] = useState(0)
    const total = data?.img.length

    const next = () => {
        setCurrent(prev => (prev + 1 < total ? prev + 1 : 0))
    }

    const prev = () => {
        setCurrent(prev => (prev - 1 >= 0 ? prev - 1 : total - 1))
    }

    return (
        <>
            <div
                className={`fixed inset-0 transition-opacity duration-300 w-full bg-accent/50 backdrop-blur-md cursor-pointer
                ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'} z-2`}
                onClick={onClose}
            />
            <div
                className={`fixed inset-y-0 right-0 w-full md:w-1/2 shadow-xl p-5 flex flex-col bg-card gap-5 overflow-auto
                transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} z-2`}>

                {/* CLOSE BUTTON */}
                <span className="flex justify-end">
                    <button onClick={onClose} className="cursor-pointer" >
                        <X className="text-foreground" />
                    </button>
                </span>

                {/* TITLE */}
                <h3>{data?.title}</h3>

                {/* Images */}
                <div className="relative w-full">
                    <img
                        src={data?.img[current] || data?.thumbnail}
                        className="w-full h-100 rounded"
                    />

                    <button
                        onClick={prev}
                        className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full z-10 cursor-pointer"
                    >
                        <ArrowLeft />
                    </button>

                    <button
                        onClick={next}
                        className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full z-10 cursor-pointer"
                    >
                        <ArrowRight />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {data?.img.map((_, idx) => (
                            <div
                                key={idx}
                                className={
                                    idx === current
                                        ? "h-3 w-3 rounded-full bg-foreground"
                                        : "h-3 w-3 rounded-full bg-accent/50"
                                }
                            />
                        ))}
                    </div>
                </div>

                {/* Description */}
                <p>{data?.desc}</p>
                <div className="flex gap-2 flex-wrap scrollbar-none">
                    {data?.tech
                        .split(",")
                        .map((item, i) => (
                            <span
                                key={i}
                                className="inline-block px-2 py-1 bg-accent/20 rounded text-sm"
                            >
                                <p>
                                    {item.trim()}
                                </p>
                            </span>
                        ))}
                </div>

                {/* Project Links */}
                <div>
                    <h3>Project Links</h3>

                    <div className="flex items-center gap-2 mt-4 flex-wrap" >
                        {data?.links.map((item, idx) => {
                            const Icon = item.icon
                            return (
                                <a
                                    key={idx}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopen noreferrer"
                                    className="flex items-center gap-2 bg-accent/20 px-4 py-2 rounded"
                                >
                                    {item.title}
                                    <Icon />
                                </a>
                            )
                        })}
                    </div>
                </div>

                {/* Notes */}
                <p>{data?.note}</p>
            </div>
        </>
    )
}