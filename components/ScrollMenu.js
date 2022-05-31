import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useReducer } from "react";
import { List, ListItem, ListIcon,
    OrderedList, UnorderedList,
    useMediaQuery, useConst, Text,
    useToken
} from '@chakra-ui/react'
import { usePrevious } from "./utilities/usePrevious";
import { useLongState } from './utilities/useLongState';

import { neonShadows } from './NeonShadows';

import { __DEV__ } from '@chakra-ui/utils';



const MoListItem = motion(ListItem);


const menuVariants = {
    enter: {
        x: '-2vw',
        color: 'red',
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        },
        // textShadow : neonShadows['yellow'],
        // marginTop: 1
    },
    exit : {
        x: '2vw',
        // color:'blue',
        transition: {
            duration: 1,
            ease: "easeInOut"
        },
        // textShadow: neonShadows['green'],
        // marginTop: 1
    },
    bye: {
        duration: 0.5,
        ease: "easeInOut"
    }
}

function scrollReducer(state, action) {
    switch (action.type) {
        case 'update':
            return action.scrollState;
        default:
            throw new Error();
    }
}

const scrollState = [true, false, false, false];
const scrollStates = [
    [true, false, false, false],
    [false, true, false, false], 
    [false, false, true, false],
    [false, false, false, true],
]

// [documentLenght, elementOffese, elemntoffeset...]
let outState;
const ScrollMemu = (props) => {
    const [popOrNot, setPop] = useState(outState ?? scrollStates[0]);
    // const [popOrNot, setPop, prevState] = useLongState( outState ?? scrollStates[0]);
    const prevState = usePrevious(popOrNot);
    // const [popOrNot, dispatch ] = useReducer(scrollReducer, prevPosi ? prevPosi :scrollState[0]);

    // outState = prevPosi ? prevPosi : outState;
    const [Yposi, setYposi] = useState(0);
    const menuTitle = ['Home', 'Profile', 'Biography', 'Programming'];
    const anchorIds = ['home', 'prof', 'bio', 'prog']
    const [isMobile] = useMediaQuery("(max-width: 768px)");
    const win_center = window.innerHeight*0.05;
    window.console.log('menu rerendered')
    
    const setYpos = () => {
        // let scly = window.scrollY; 
        let scly = window.pageYOffset // for IE and safari
        
        let eleY = [0,
                scly - win_center + document.getElementById('prof').getBoundingClientRect().top,
                scly - win_center + document.getElementById('bio').getBoundingClientRect().top,
                scly - win_center + document.getElementById('prog').getBoundingClientRect().top]; 
        return eleY
    }
    const eleBotmY = useConst(() => setYpos());

    // document.getElementById('prof').scrollIntoView({block:"start", behavior:"smooth"});

    const setHash = (hash) => {
        // location.hash = hash;
        // history.pushState({url:'/', as: '/#'+hash, options:{}}, '', '/#'+hash })
        history.pushState({}, '', '/#'+hash);
    }

    const popMenu = () => {
        // console.log('set', window.scrollY, eleBotmY);
        let nowYpos = window.scrollY;

        if (nowYpos > eleBotmY[3]-10){
            popOrNot !== [false, false, false, true] && setPop(scrollStates[3])
            // && !dispatch({type: 'update', scrollState:[false, false, false, true]}) 
        } else if (nowYpos >  eleBotmY[2]-10) {
            popOrNot !== [false, false, true, false] && setPop(scrollStates[2])
            // && !dispatch({type: 'update', scrollState:[false, false, true, false]}) 
            window.console.log(popOrNot)
        } else if (nowYpos > eleBotmY[1]-10) {
            popOrNot !== [false, true, false, false] && setPop(scrollStates[1]);
            // && !dispatch({type: 'update', scrollState:[false, true, false, false]}) 
            console.log('rerender')
        } else if (nowYpos > eleBotmY[0]) {
            popOrNot !== [true, false, false, false] && setPop(scrollStates[0])
            //&& !dispatch({type: 'update', scrollState:[true, false, false, false]}) 
        }
    }

    function scroll2(top, index, hash) {
        window.scrollTo({
            top: top, //+ window.outerHeight*0.1,
            behavior: 'smooth'
        })
        // popMenu();
        // dispatch({type:'update', scrollState: scrollStates[index]})
        setPop(scrollStates[index]);
        setHash(hash);
    }

    function scrollId(Id) {
        document.getElementById(Id).scrollIntoView({block:"start", behavior:"smooth"});
    }

    useEffect(() => {
        // window.addEventListener('scroll', consE, { passive: true });
         // popMenu(); how to maybe push the # and 
        window.console.log('mount');
        // window.addEventListener('scroll', slowPop, { passive: true });
        window.addEventListener('scroll', popMenu, {passive:true});
      return () => {
        // window.removeEventListener('scroll', consE);
        window.console.log('unamount')
        outState = prevState;
        
        window.removeEventListener('scroll', popMenu, {passive:true});
        // window.removeEventListener('scroll', slowPop,  { passive: true });
      };
    }, [])

    useEffect(() => console.log('state effect', [popOrNot]))
    // useEffect(() => console.log(prevPosi), [prevPosi]);
    
    return(
        <List position='fixed' spacing='10%' right={'5%'} top={'5%'} zIndex={'banner'}>
            {menuTitle.map((item, index) => (
                <MoListItem fontSize='sm' cursor="pointer" // x={popOrNot[index] ? '5vw' : '0'} // variant={}
                    key={item+`${index}_pop`} onClick={() => {scroll2(eleBotmY[index], index, item);}}
                    animate={popOrNot[index] ? 'enter' : 'exit'} textShadow={'purpleneon'}
                    exit='exit' variants={menuVariants}> 
                    {item}
                    {popOrNot}
                </MoListItem>
            ))}
        </List>
    )
}

if (__DEV__) {
    ScrollMemu.displayName = "ScrollMenu"
}

export { ScrollMemu as default };