import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from "react";
import { List, ListItem, ListIcon,
    OrderedList, UnorderedList,
    } from '@chakra-ui/react'

import lodash from "lodash";

const moListItem = motion(ListItem);


const menuVariants = {
    enter: {
        x: -100,
    },
    exit : {
        x: 100,
    }
}

// [documentLenght, elementOffese, elemntoffeset...]
const ScrollMemu = (props) => {
    const [popOrNot, setPop] = useState([true, false, false, false]);
    const [Yposi, setYposi] = useState(0);
    const menuTitle = ['Home', 'Profile', 'Biography', 'Programming'];
    
    const setYpos = () => {
        let scly = window.scrollY;
        let eleY = [0,
                scly + document.getElementsByClassName('prof')[0].getBoundingClientRect().top,
                scly + document.getElementsByClassName('bio')[0].getBoundingClientRect().top,
                scly + document.getElementsByClassName('proj')[0].getBoundingClientRect().top]; 
        return eleY
    }
    const eleBotmY = useMemo(() => setYpos(),[]);

    const popItems = () => {

    }

    const consE = (e) => {
        if(eleBotmY[1]-10 <= window.scrollY <= eleBotmY[1]+10){
            setYposi(window.scrollY);
            console.log(Yposi);
        }
    }
    const popMenu = (e) => {
        console.log('set', window.scrollY, eleBotmY);
        let nowYpos = window.scrollY;

        if (nowYpos > eleBotmY[3]){
            setPop([false, false, false, true]);
        } else if (nowYpos >  eleBotmY[2]) {
            setPop([false,, false, true, false]);
        } else if (nowYpos > eleBotmY[1]) {
            setPop([false, true, false, false]);
        } else if (nowYpos > eleBotmY[0]) {
            setPop([true, false, false, false]);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', consE, { passive: true });
        window.addEventListener('scroll', popMenu, { passive: true });
      return () => {
        window.removeEventListener('scroll', consE);
        window.removeEventListener('scroll', popMenu);
      };
    }, [popOrNot])
    

    return(
        <List layout  position='fixed' spacing='10%' right={10}>
            <ListItem>
            {Yposi}
            </ListItem>
            {popOrNot.map((pop, index) => (
                pop ? <ListItem>
                    <motion.div initial='enter' exit='exit' variants={menuVariants}>pop</motion.div></ListItem> 
                    : <ListItem>notpop</ListItem>
            ))}
        </List>
    )
}

export { ScrollMemu as default };