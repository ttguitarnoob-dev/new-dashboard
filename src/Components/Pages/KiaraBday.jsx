import { Button, Image, Link } from "@nextui-org/react"
import { useState } from "react"

export default function KiaraBday() {

    const [numero, setNumero] = useState(0)

    const words = ["Hi, welcome to your 29th year!", <Image src="http://3.bp.blogspot.com/-0Yeu1BlYjiQ/Vyvr8jERoiI/AAAAAAAAAoo/e5QMuGxWUrwpU0gHx1gz8yjXOnB-BAhOACHM/s1600/kitten-cute-kitty-cat.jpg"/>, "When I first met you I thought it was so attractive that you were still in your youth", "At 24, you brought out a part of my life that I thought I'd missed", "Now that you're almost out of your 20s, you may not seem as youthful as you were when we first met", "But you're even more you than you ever were", "You've been growing in wisdom since we met, and now you're more attractive than ever.", "So this year, hold on to your youth and cultivate your wisdom!", "Life starts for real at 30!", "LOVE YOU HAPPY BIRTHDAY!", <Button as={Link} href="/normalkiara"><a>Go to your normal dashboard!</a></Button>]
    let number = 1

    return(
        <>
        <section>
            <h1 className="page">Hello Birthday girl!</h1>
            <div className="page mt-10">
                {words[numero]}
            </div>
            <div className="page mt-10">
                <Button onClick={() => setNumero(numero + 1)}>Next</Button>
            </div>
        </section>
        </>
    )
}