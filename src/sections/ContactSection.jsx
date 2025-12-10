import { contactsData } from "@/datasets/contacts"

export const ContactSection = () => {
    return (
        <section id="contacts" className="section mt-5">
            <div className="flex flex-col md:flex-row justify-between gap-10 item">
                {/* MESSAGE AREA */}
                {/* <span  className="flex flex-col gap-3">
                    <span>
                        <h2>Get in touch.</h2>
                        <p>You can send directly at my messages.</p>
                    </span>

                    <span className="flex flex-col mt-5 gap-2">
                        <input type="text" id="name" placeholder="Name*" required />
                        <input type="text" id="company" placeholder="Company or Email (Optional)" />
                        <textarea name="message" id="message" rows={3} cols={40} placeholder="Message"></textarea>
                    </span>

                    <span className="flex gap-2 justify-end" >
                        <button className="btn-secondary" >Clear</button>
                        <button className="btn-primary">Send</button>
                    </span>
                </span> */}

                {/* LINKS */}
                <span className="flex flex-col md:text-left" >
                    <h2 className="mb-5">Get in touch.</h2>
                    <p>Contacts</p>
                    {contactsData
                        .filter(item => item.account === "Gmail")
                        .map((item, idx) => (
                            <a key={idx} className="font-semibold" href={item.link}>{item.title}</a>
                        ))
                    }
                    {contactsData
                        .filter(item => item.account === "Phone")
                        .map((item, idx) => (
                            <a key={idx} href={item.link}>{item.title}</a>
                        ))
                    }
                    <span className="flex gap-2 md:justify-start" >
                        {contactsData.slice(0, 4).map((item, idx) => {
                            const Icon = item.icon
                            return (
                                <a key={idx} href={item.link}>
                                    <Icon />
                                </a>
                            )
                        })}
                    </span>
                </span>

                {/* PICTURE */}
                {/* <img
                    src="https://res.cloudinary.com/di1otqhjw/image/upload/v1764917318/Untitled_design_1_tmljqh.png"
                    alt="Picture"
                    className="h-90 min-w-80 bg-accent grayscale"
                /> */}
            </div>
        </section>
    )
}