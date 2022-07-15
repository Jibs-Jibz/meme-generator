import React from "react";
import MemesData from "./MemesData"

export default function Meme() {



    const [memeImage, setmemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImage, setAllMemeImage] = React.useState(MemesData)

    function getmemeImage() {
        const memesArray = allMemeImage.data.memes
        const randomNum = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNum].url
        setmemeImage(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <section>
            <div>
                <div className="input">
                    <input type="text" className="text-input" placeholder="Top Text" />
                    <input type="text" className="text-input" placeholder="Bottom Text" />
                </div>
                {/* <button type="button" className="button-1">Get a new meme image🖼️</button> */}
                {/* <a href="#" class="buttonf">Get a new meme image🖼️</a> */}
                <button class="buttonf" onClick={getmemeImage} >Get a new meme image🖼️</button>
            </div>
            <img src={memeImage.randomImage} className="meme-image"/>
        </section>

    )
}