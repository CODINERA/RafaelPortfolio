import { useRef } from "react";
import "./services.scss"
import { motion, useInView } from "framer-motion"

const variants = {
    initial:{
        x: -500,
        y:100,
        opacity: 0
    },
    animate:{
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const Services = () => {

    return (
        <motion.div 
        className="services" 
        variants={variants} 
        initial="initial" 
        // animate="animate"
         whileInView={"animate"}
     
        >
                <motion.div className="textContainer"  variants={variants} >
                    <p> 
                        I focus developing my skills by 
                        <br /> creating unique projects
                    </p>
                    <hr />
                </motion.div>
            <motion.div className="titleContainer"  variants={variants} >
                <div className="title">
                  
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>Create Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Projects.
                    </h1>
                    {/* <motion.button whileHover={{color:"white"}}>WHAT WE DO?</motion.button> */}
                </div>
            </motion.div>
            <motion.div className="listContainer"  variants={variants} >
                 <motion.div 
                 className="box" 
                 whileHover={{ background: "lightgray" , color: "black"}}
                 >
                    <h2>Responsive Web Development</h2>
                    <p>I consistently seek innovative ways to enhance user interactions and elevate the overall user experience. One of my proudest accomplishments is the implementation of advanced animations in React, showcasing my dedication to creating visually stunning and intuitive interfaces.</p>
                    <motion.button whileHover={{color:"white"}}>Go</motion.button>
                </motion.div>
                <motion.div 
                className="box" 
                whileHover={{ background: "lightgray" , color: "black"}}
                >
                    <h2>Logo Design</h2>
                    <p> I believe in the power of visual storytelling to leave a lasting impression. Simplicity is the hallmark of effective design, and my approach revolves around distilling complex ideas into clean, impactful visuals.</p>
                    <motion.button whileHover={{color:"white"}}>Go</motion.button>
                </motion.div>
                <motion.div 
                className="box" 
                whileHover={{ background: "lightgray" , color: "black"}}
                >
                    <h2>User Interface Design</h2>
                    <p> I bring a harmonious blend of creativity and functionality to every project. My approach to user interface design goes beyond aesthetics; it's about crafting seamless and intuitive digital experiences that resonate with users.</p>
                    <motion.button whileHover={{color:"white"}}>Go</motion.button>
                </motion.div>
                <motion.div 
                className="box"
                whileHover={{ background: "lightgray" , color: "black"}}
                >
                    <h2>Front-end Development</h2>
                    <p> Proficient in leveraging the latest HTML and CSS standards, I bring websites to life with clean and semantic code, ensuring both accessibility and optimal performance.</p>
                    <motion.button whileHover={{color:"white"}}>Go</motion.button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;