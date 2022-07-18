import React from "react";
import { useEffect, useState } from "react";
// import MemesData from "./MemesData"

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])
    

    function getmemeImage() {
        const randomNum = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNum].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <section>
            <div>
                <div className="input">
                    <input type="text" className="text-input" placeholder="Top Text" name="topText" value={meme.topText} onChange={handleChange} />
                    <input type="text" className="text-input" placeholder="Bottom Text" name="bottomText" value={meme.bottomText} onChange={handleChange} />
                </div>
                {/* <button type="button" className="button-1">Get a new meme image🖼️</button> */}
                {/* <a href="#" class="buttonf">Get a new meme image🖼️</a> */}
                <button class="buttonf" onClick={getmemeImage}>Get a new meme image🖼️</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </section>

    )
}