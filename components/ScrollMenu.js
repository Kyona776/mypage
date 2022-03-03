import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useMemo } from "react";
import { List, ListItem, ListIcon,
    OrderedList, UnorderedList, transition,
    } from '@chakra-ui/react'

import lodash from "lodash";

const MoListItem = motion(ListItem);



const menuVariants = {
    enter: {
        x: '-2vw',
        color: 'red',
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    },
    exit : {
        x: '2vw',
        color:'blue',
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    },
    bye: {
        duration: 0.5,
        ease: "easeInOut"
    }
}

// [documentLenght, elementOffese, elemntoffeset...]
const ScrollMemu = (props) => {
    const [popOrNot, setPop] = useState([true, false, false, false]);
    const [Yposi, setYposi] = useState(0);
    const menuTitle = ['Home', 'Profile', 'Biography', 'Programming'];
    
    const setYpos = () => {
        let scly = window.scrollY;
        let win_center = window.innerHeight*0.35;
        let eleY = [0,
                scly - win_center + document.getElementsByClassName('prof')[0].getBoundingClientRect().top,
                scly - win_center + document.getElementsByClassName('bio')[0].getBoundingClientRect().top,
                scly - win_center + document.getElementsByClassName('proj')[0].getBoundingClientRect().top]; 
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
            popOrNot !== [false, false, false, true]
            && setPop([false, false, false, true]);
        } else if (nowYpos >  eleBotmY[2]) {
            popOrNot !== [false, false, true, false] 
            && setPop([false, false, true, false]);
        } else if (nowYpos > eleBotmY[1]) {
            popOrNot !== [false, true, false, false] 
            && setPop([false, true, false, false]);
        } else if (nowYpos > eleBotmY[0]) {
            popOrNot !== [true, false, false, false] 
            && setPop([true, false, false, false]);
        }
    }

    function scroll2(top) {
        window.scrollTo({
            top: top,
            behavior: 'smooth'
        })
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
        <List layout  position='fixed' spacing='10%' right={'5%'} top={'5%'} zIndex={'banner'}>
            {menuTitle.map((item, index) => (
                <MoListItem fontSize='sm' cursor='pointer' // x={popOrNot[index] ? '5vw' : '0'} // variant={}
                    key={item+`${index}_pop`} onClick={() => scroll2(eleBotmY[index])}
                    animate={popOrNot[index] ? 'enter' : 'exit'} 
                    exit='exit' variants={menuVariants}>
                    {item}
                </MoListItem>
            ))}
        </List>
    )
}

export { ScrollMemu as default };