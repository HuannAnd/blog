import { ReactNode } from "react"


type ContactProps = {
    children?: ReactNode
}

export default function Contact({ children }: ContactProps) {
    return (!children ? (
        <p>There isn't contact here</p>
    ) : (
        <>
            <h2>Contact(s)</h2>
            <div className="contacts">
                <div className="contact">
                    <img src="" alt="" />
                </div>
                <div className="contact">
                    <img src="" alt="" />
                </div>
                <div className="contact">
                    <img src="" alt="" />
                </div>
            </div>
        </>
    ))

}