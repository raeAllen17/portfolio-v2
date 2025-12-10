import { Drawer } from "@/components/custom/custom-drawer"
import { projectsData } from "@/datasets/projectsData"
import { MoveUpRight } from "lucide-react"
import { useState } from "react"

export const ProjectSection = () => {

    const [detailsOpen, setDetailsOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <>
            <section id="projects" className="section gap-5 mt-10">
                <h2 className="">Recent Projects.</h2>

                <div className="flex flex-col md:flex-row gap-10 pt-5 ">
                    {projectsData.slice(0, 3).map((item, idx) => {
                        return (
                            <div key={idx} className="flex flex-col gap-3 flex-1" >
                                <img
                                    src={item.thumbnail}
                                    alt="Project thumbnail"
                                    className="shadow-light bg-accent rounded h-50 md:h-80 w-full"
                                />
                                <span>
                                    <h3>{item.title}</h3>
                                    <p className="line-clamp-2" >{item.desc}</p>
                                </span>
                                <div className="flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-none">
                                    {item.tech
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
                                <span
                                    className="flex gap-2 items-center"
                                    onClick={() => {
                                        setSelectedProject(item)
                                        setDetailsOpen(true)
                                    }}
                                >
                                    <a>Show Details</a>
                                    <MoveUpRight className="text-foreground h-5 w-5" />
                                </span>
                            </div>
                        )
                    })}
                </div>
            </section>

            <Drawer
                open={detailsOpen}
                onClose={() => setDetailsOpen(false)}
                data={selectedProject}
            />
        </>
    )
}