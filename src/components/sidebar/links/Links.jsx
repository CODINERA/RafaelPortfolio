import { motion } from "framer-motion";

const variants = {
    open: {
        Transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        Transition: {
            staggerChildren: 0.5,
            staggerDirection: -1,
        },
    },
};
const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};
const Links = () => {

const items = ["Homepage", "Services", "Portfolio","Contact"];

    return  (
        <motion.div className="Links" variants={variants}>
            {items.map((item) =>(
            <motion.a href={`#${item}`} key={item} variants={itemVariants}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.90}}
            >
                {item}
            </motion.a>  
            ))}
            </motion.div>
    )
}

export default Links