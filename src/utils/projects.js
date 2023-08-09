import SASSLogo from "../assets/sass.svg";
import ReactLogo from "../assets/react.svg";
import NodeJSLogo from "../assets/nodejs.svg";
import MongoDBLogo from "../assets/mongodb.svg";
import FirebaseLogo from "../assets/firebase.svg";
import ExpressJSLogo from "../assets/expressjs.svg";
import ReduxLogo from "../assets/redux.svg";
import SocketIOLogo from "../assets/socketIO.svg";
import TypeScriptLogo from "../assets/typescript.svg";
import CSSLogo from "../assets/css3.svg";

export const projects = [
    {
        name: "ProjectMania",
        shortDesc: "Project management tool",
        description: "ProjectMania is a project management tool made to help you organize and keep track of your project tasks",
        technologies: [
            {
                logo: ReactLogo,
                name: "React"
            },
            {
                logo: ReduxLogo,
                name: "Redux"
            },
            {
                logo: NodeJSLogo,
                name: "Node.js"
            },
            {
                logo: ExpressJSLogo,
                name: "Express"
            },
            {
                logo: SocketIOLogo,
                name: "Socket.io"
            },
            {
                logo: MongoDBLogo,
                name: "MongoDB"
            },
            {
                logo: FirebaseLogo,
                name: "Firebase"
            },
            {
                logo: SASSLogo,
                name: "SASS"
            }
        ],
        repoLink: "https://github.com/TomRossner/project-mania.git",
        webPage: "https://TomRossner.github.io/project-mania"
    },
    {
        name: "SmartBrain",
        shortDesc: "Face recognition app",
        description: "SmartBrain is a face detection application which can detect people's faces in images",
        technologies: [
            {
                logo: ReactLogo,
                name: "React"
            },
            {
                logo: ReduxLogo,
                name: "Redux"
            },
            {
                logo: NodeJSLogo,
                name: "Node.js"
            },
            {
                logo: ExpressJSLogo,
                name: "Express"
            },
            {
                logo: MongoDBLogo,
                name: "MongoDB"
            },
            {
                logo: SASSLogo,
                name: "SASS"
            },
        ],
        repoLink: "https://github.com/TomRossner/smartbrain.git",
        webPage: "https://TomRossner.github.io/smartbrain"
    },
    {
        name: "CRWN Clothing",
        shortDesc: "E-commerce app",
        description: "CRWN Clothing is an E-commerce application which includes different clothing categories for both men and women",
        technologies: [
            {
                logo: ReactLogo,
                name: "React"
            },
            {
                logo: ReduxLogo,
                name: "Redux"
            },
            {
                logo: FirebaseLogo,
                name: "Firebase"
            },
            {
                logo: SASSLogo,
                name: "SASS"
            }
        ],
        repoLink: "https://github.com/TomRossner/crwn-clothing.git",
        webPage: "https://TomRossner.github.io/crwn-clothing"
    },
    {
        name: "Wordle",
        shortDesc: "Wordle game clone",
        description: "Wordle is a word guessing game, the goal is to find the secret 5-letter word in only 6 attempts",
        technologies: [
            {
                logo: ReactLogo,
                name: "React"
            },
            {
                logo: TypeScriptLogo,
                name: "TypeScript"
            },
            {
                logo: CSSLogo,
                name: "CSS3"
            }
        ],
        repoLink: "https://github.com/TomRossner/wordlev2.git",
        webPage: "https://TomRossner.github.io/wordlev2"
    }
]