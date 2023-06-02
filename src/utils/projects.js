import SASSLogo from "../assets/sass.svg";
import ReactLogo from "../assets/react.svg";
import NodeJSLogo from "../assets/nodejs.svg";
import MongoDBLogo from "../assets/mongodb.svg";
import FirebaseLogo from "../assets/firebase.svg";
import ExpressJSLogo from "../assets/expressjs.svg";
import ReduxLogo from "../assets/redux.svg";
import FirestoreLogo from "../assets/Firestore.svg";
import SocketIOLogo from "../assets/socketIO.svg";

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
                logo: MongoDBLogo,
                name: "MongoDB"
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
            },
            {
                logo: SocketIOLogo,
                name: "Socket.io"
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
                logo: NodeJSLogo,
                name: "Node.js"
            },
            {
                logo: ExpressJSLogo,
                name: "Express"
            },
            {
                logo: SASSLogo,
                name: "SASS"
            },
            {
                logo: MongoDBLogo,
                name: "MongoDB"
            },
            {
                logo: ReduxLogo,
                name: "Redux"
            }
        ],
        repoLink: "https://github.com/TomRossner/smart-brain.git",
        webPage: "https://TomRossner.github.io/smart-brain"
    },
    {
        name: "CRWN Clothing",
        shortDesc: "E-commerce app",
        description: "CRWN Clothing is an E-commerce application which includes different clothing categories for men and women",
        technologies: [
            {
                logo: ReactLogo,
                name: "React"
            },
            {
                logo: FirebaseLogo,
                name: "Firebase"
            },
            {
                logo: FirestoreLogo,
                name: "FireStore"
            },
            {
                logo: SASSLogo,
                name: "SASS"
            },
            {
                logo: ReduxLogo,
                name: "Redux"
            }
        ],
        repoLink: "https://github.com/TomRossner/CRWN-Clothing.git",
        webPage: "https://TomRossner.github.io/CRWN-Clothing"
    }
]