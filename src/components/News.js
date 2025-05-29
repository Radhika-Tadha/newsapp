import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "Marielle Segarra",
            "title": "Want to cut through small talk? Try asking a 'magical question'",
            "description": "These creative questions are fun to answer and can help reveal people's personalities. Conflict resolution facilitator Priya Parker shares her favorites and explains how to come up with your own.",
            "url": "https://www.npr.org/2025/05/29/nx-s1-5355077/want-to-cut-through-small-talk-try-asking-a-magical-question",
            "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/600x338+0+267/resize/1400/quality/100/format/gif/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F1e%2Fb3%2Ff66df5d94d90b72da948341569cc%2Flk-magicalquestions-lead-shortened-resize.gif",
            "publishedAt": "2025-05-29T09:00:00Z",
            "content": "What's the weirdest thing you've ever found in your pocket? What topic could you give a 20-minute talk on with no preparation? What's a path you almost took but didn't?\r\nIf you find yourself immediat… [+4440 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Javier Pastor",
            "title": "Donald Trump sacudió el mundo con sus aranceles recíprocos. El Tribunal de Comercio acaba de tirárselos a la basura",
            "description": "El miércoles el Tribunal de Comercio Internacional de Estados Unidos  dictaminó que el presidente del país, Donald Trump, no tiene la autoridad necesaria para imponer los aranceles recíprocos que ha anunciado en todo el mundo. Las consecuencias de la decisión…",
            "url": "https://www.xataka.com/legislacion-y-derechos/donald-trump-sacudio-mundo-sus-aranceles-reciprocos-tribunal-comercio-acaba-tirarselos-a-basura",
            "urlToImage": "https://i.blogs.es/a13ffc/trump2/840_560.jpeg",
            "publishedAt": "2025-05-29T07:05:16Z",
            "content": "El miércoles el Tribunal de Comercio Internacional de Estados Unidos  dictaminó que el presidente del país, Donald Trump, no tiene la autoridad necesaria para imponer los aranceles recíprocos que ha … [+3458 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Miguel Jorge",
            "title": "Un hombre ha sobrevivido a un vuelo accidental de 8.000 metros de altura. El vídeo de la proeza le ha costado caro: ocurrió en China",
            "description": "Para que nos hagamos una idea, 8.000 metros de altura equivale prácticamente a lo que se conoce como zona de la “muerte” en montañismo, ese punto donde la atmósfera es tan delgada que el cuerpo humano no puede sobrevivir mucho tiempo sin oxígeno suplementario…",
            "url": "https://www.xataka.com/magnet/hombre-ha-sobrevivido-a-vuelo-accidental-8-000-metros-altura-video-proeza-le-ha-costado-caro-ocurrio-china",
            "urlToImage": "https://i.blogs.es/552a4a/756/840_560.jpeg",
            "publishedAt": "2025-05-29T08:30:56Z",
            "content": "Para que nos hagamos una idea, 8.000 metros de altura equivale prácticamente a lo que se conoce como zona de la muerte en montañismo, ese punto donde la atmósfera es tan delgada que el cuerpo humano … [+3514 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Github.com"
            },
            "author": "rsyncOSX",
            "title": "RSyncUI – A SwiftUI based macOS GUI for rsync",
            "description": "A SwiftUI based macOS GUI for rsync. Contribute to rsyncOSX/RsyncUI development by creating an account on GitHub.",
            "url": "https://github.com/rsyncOSX/RsyncUI",
            "urlToImage": "https://opengraph.githubassets.com/0a8a3f718fbc93d624ed4988e96506b3c9af93627bd93a4072d3a169fdf66e0c/rsyncOSX/RsyncUI",
            "publishedAt": "2025-05-29T05:05:43Z",
            "content": "This is the repository for RsyncUI, a SwiftUI based macOS application. RsyncUI is released for macOS Sonoma and later.\r\nRsyncUI is a GUI on the Apple macOS platform for the command line tool rsync. I… [+877 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Mirko Dölle",
            "title": "Apple will Versionsnummern geräteübergreifend vereinheitlichen",
            "description": "Eine einheitliche Versionierung der Apple-Betriebssysteme für iPhone, iPad, Mac & Co. soll es künftig Anwendern erleichtern, die aktuelle Version zu erkennen.",
            "url": "https://www.heise.de/news/Apple-will-Versionsnummern-geraeteuebergreifend-vereinheitlichen-10419533.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/8/6/2/9/9/7/tre210928_205_Apple-Logo-iPhone-41b4be7eac8c9326.jpg",
            "publishedAt": "2025-05-29T09:12:00Z",
            "content": "WatchOS 12, iOS 18.5, macOS 15.5 es ist für Anwender nicht leicht, zu erkennen, ob die Versionsnummer der verschiedenen Apple-Betriebssysteme aktuell oder längst veraltet ist. Apple soll deshalb plan… [+1637 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Police"
            },
            "author": "Rajesh Pandey",
            "title": "Play Store taps Gemini for AI-powered Q&A about apps",
            "description": "Gemini can now answer your app questions in the Play Store",
            "url": "https://www.androidpolice.com/play-store-taps-gemini-ai-powered-qa-about-apps/",
            "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/12/google-play-store-logo-1.jpg",
            "publishedAt": "2025-05-29T08:33:51Z",
            "content": "Summary\r\n<ul><li>\r\n Google is integrating Gemini into the Play Store with the \"Ask Play about this app\" feature.\r\n </li><li>\r\n The feature uses AI to answer general app questions but struggles with s… [+2150 chars]"
        }
    ]

    constructor() {
        super();
        console.log("heelo i am constructor");
        this.state = {
            articles:this.articles
        }
    }
    render() {
        return (
            <div cla="container my-3">
                <h2>NewsMonkey-Top Headlines</h2>
                <div className="row justify-content-center">
                    <div className=" col-md-4">
                        <NewsItem title="mytitle" description="mydesc" ImageUrl="https://www.n-tv.de/img/incoming/crop25800868/0921325222-cImg_16_9-w1200/010debe77324a23e4d0e926e97234c1b.jpg" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="mytitle" description="mydesc" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="mytitle" description="mydesc" />
                    </div>

                </div>
            </div>
        )
    }
}
export default News
