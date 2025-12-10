import { contactsData } from "@/datasets/contacts"
import { Switch } from "@/components/ui/switch"
import { Menu, Moon, SunDim } from "lucide-react"
import { useEffect, useState } from "react"

export const HeroSection = () => {

    const [darkMode, setDarkMode] = useState(false)
    const links = [
        { title: 'About', href: '#about' },
        { title: 'Projects', href: '#projects' },
        { title: 'Contact Me', href: '#contacts' }
    ]

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === 'dark') {
            document.documentElement.classList.add("dark")
            setDarkMode(true)
        }
    }, [])

    const themeToggle = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark")
            localStorage.removeItem("theme")
            setDarkMode(prev => !prev)
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
            setDarkMode(prev => !prev)
        }
    }

    // for downloading the cv
    const downloadFile = () => {
        const link = document.createElement("a");
        link.href = "https://res.cloudinary.com/di1otqhjw/image/upload/v1764919127/RAE_ALLEN_RETUTA_pmpis2.jpg";
        link.download = "CV-Retuta, Rae Allen.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <section id="hero" className="section gap-0 md:gap-5 md:h-screen">
                {/* NAVBAR */}
                <nav className="flex justify-between w-full pb-10 md:pb-0" >

                    {/* BUTTONS FOR LARGE SCREENS */}
                    <div className="flex items-center">
                        <Menu className="flex md:hidden text-foreground fixed z-1" />
                        <div className="flex ps-8 md:ps-0 gap-1">
                            {contactsData.slice(0, 3).map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <Icon
                                        onClick={() => window.location.href = item.link}
                                        key={idx}
                                        className="w-4 h-4 hover:cursor-pointer text-foreground"
                                    />
                                );
                            })}
                        </div>
                    </div>

                    {/* PAGE LINKS */}
                    <div className="hidden md:flex gap-5" >
                        {links.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.href}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>

                    {/* THEME SWITCH */}
                    <div className="flex gap-3 items-center">
                        <Switch checked={darkMode} onClick={() => themeToggle()} />
                        {darkMode ? <Moon className="text-foreground" /> : <SunDim />}
                    </div>
                </nav>

                <div className="h-full flex flex-wrap gap-10">
                    <div className="flex flex-col flex-1 justify-center pb-5 md:pb-0">
                        <h2>RAE ALLEN</h2>
                        <h1>RETUTA</h1>
                        <p>A web developer that builds clean and performant applications.</p>
                        <div className="flex gap-1 pt-5" >
                            <button className="btn-primary" onClick={() => (window.location.href = '#about')}>
                                Get to Know Me
                            </button>
                            <button className="btn-secondary" onClick={downloadFile} >Download CV</button>
                        </div>
                    </div>

                    <div className="flex flex-2 min-w-50 m-auto justify-end ">
                        <img src="https://res.cloudinary.com/di1otqhjw/image/upload/v1764746383/Untitled_design_mxqiwx.png"
                            alt="Picture"
                            className="bg-accent grayscale"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}