import { Code2 } from "lucide-react"
import { skillsData } from "@/datasets/skillsData"

export const AboutSection = () => {
    return (
        <section id="about" className="section w-full">
            <div className="flex flex-col md:flex-row gap-10 h-full items-center" >
                <div className="flex flex-col gap-1 flex-1" >
                    {/* TITLE & SUBTITLE */}
                    <h1 className="text-4xl md:text-7xl" >Building websites using
                        modern technologies.
                    </h1>
                    <p>I build websites with simple and efficient designs for a wonderful <br />
                        experience and clear intent delivery.
                    </p>

                    {/* BUTTON LINKS */}
                    <div className="pt-5 flex gap-1">
                        <span className="flex">
                            <button className="btn-primary" onClick={() => (window.location.href='https://www.credly.com/users/rae-allen-retuta')}>
                                Visit Credly
                            </button>
                        </span>
                        <button className="btn-secondary" onClick={() => (window.location.href='#contacts')}>
                            Hire Me
                        </button>
                    </div>
                </div>
                <div className="flex flex-1  items-center justify-center md:justify-end flex-wrap-reverse h-full">
                    {skillsData.map((item, idx) => {
                        return (
                            <img
                                key={idx}
                                src={item.img}
                                className={`h-20 w-20 m-3 p-5 bg-accent/20 rounded shadow-light`}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    )
}