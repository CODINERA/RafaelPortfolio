import "./contact.scss"
import { motion, useInView, } from "framer-motion";
import { useEffect } from "react";

    const variants = {
        initial:{
            y:500,
            opacity: 0,
        },
        animate:{
            y:0,
            opacity: 1,
            transition: {
                duration: 0.5,
               
            },
        },
    };

const Contact = () => {
  
    

    return (
        <motion.div 
        className="contact" 
        variants={variants} 
        initial="initial" 
        animate="animate"
        >
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>codinera.rafael.balongacas@gmail.com </span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>1 Lunduyan St. Batasan Hills Quezon City</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>09564907867</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                 
                <motion.form>
                    <input type="text" required placeholder="Name" />
                    <input type="email" required placeholder="Email" />
                    <textarea rows={8} placeholder="Message" />
                    <button>Submit</button>
                </motion.form>
            </div>
        </motion.div>
    );
};

export default Contact 