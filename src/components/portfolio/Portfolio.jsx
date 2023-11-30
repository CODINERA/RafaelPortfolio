import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "About Me",
        img: "https://www.iconpacks.net/icons/1/free-user-login-icon-305-thumb.png",
        desc: "I'm Rafael Emmanuel B. Codinera Passionate and driven individual, born on March 03, 2004, currently 19 years old. I am a dynamic individual who finds joy in the pursuit of physical sports and continuous learning through online exploration. My commitment to personal and professional growth is evident in my proactive approach towards acquiring new skills.",
    },
    {
        id: 2,
        title: "Quezon City University",
        img: "https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/xgfz5w23trmhp7veqakd",
        desc: "I am a 1st Year student at Quezon City University taking Bachelor of Science in Computer Science.",
    },
    {
        id: 5,
        title: "HTML",
        img: "https://cdn3d.iconscout.com/3d/free/thumb/free-html-5728485-4781249.png?f=webp",
        desc: "I possess a strong command of HTML, the foundational language for creating and structuring web content. My expertise in HTML allows me to craft well-organized and semantically meaningful web pages, ensuring a solid foundation for seamless user experiences.",
    },
    {
        id: 6,
        title: "CSS",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
        desc: "I have honed my skills in CSS to craft visually stunning and highly responsive websites. CSS is the backbone of modern web design, and I take pride in my ability to leverage its power to create seamless and engaging user experiences.",
    },
    {
        id: 7,
        title: "JavaScript",
        img: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
        desc: "I designed and implemented an interactive task manager using JavaScript, HTML, and CSS to enhance productivity and organization. This web application allows users to add, edit, and delete tasks effortlessly, providing a seamless and intuitive user experience.",
    },
    {
        id: 8,
        title: "React.js",
        img: "https://cdn3d.iconscout.com/3d/free/thumb/free-react-native-5562339-4642743.png",
        desc: "I have a strong command of React.js, a cutting-edge JavaScript library for building user interfaces. With a focus on creating modular and reusable components, I leverage React's declarative syntax to efficiently design interactive and dynamic web applications.",
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        // offset: ["start start" ,"end start"]
    });

    const y = useTransform(scrollYProgress,[0,1], [-300, 300]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See More</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        offset: ["end end" , "start start"]
    });

    const scalepogi = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return(
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Information / Proficiencies</h1>
                <motion.div style={{scaleX:scalepogi}} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id}/>
            ))}
        </div>
    );
};

export default Portfolio;