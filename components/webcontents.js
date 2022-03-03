const {Icon} = require("@chakra-ui/react")

import {cibPython} from "@coreui/icons";
import { parse } from 'node-html-parser';

export const cIcon = (props) => {
    return(
    <Icon viewBox={`0 0 ${props.size[0]} ${props.size[1]}`}>
        {parse(props.icon)}
    </Icon>)
}

export const cTag = (props) => {
    console.log(props);
    return(
        <Tag size={props.size} variant='outline' colorScheme='blue'>
            <TagLabel>{props.text}</TagLabel>
            <TagRightIcon {...props.icon} as={cIcon} />
        </Tag>
    )
}

export const tags = {
    Python : {text: 'Python', icon: cibPython},
    Tensorflow : {text : 'Tensorflow', icon: 'https://w7.pngwing.com/pngs/56/909/png-transparent-tensorflow-deep-learning-keras-machine-learning-caffe-thumbtack-miscellaneous-angle-rectangle-thumbnail.png'},
    React : {text: 'Rreact.js', icon: 'ReactIcon' }

}

export const pagetext =  {
    en : {
        prof : "My name is Enomoto Kyona, I'm from Japan.",
        bio : `I am educated bachelar and master degrees in Chinese Cultural University, 
            which university is located in Taiwan. 
            My department was fiancial and banking and learned
            Accounting, Financial analysis and system. My research topic in master
            degree, was about credit socring system and machine learning.`,
        projs : [{
            title: "Transformer and DynamicConv model for credit scoring", 
            url: "" ,
            tags : ["Python", "Tensorflow", ],
            status: "Done",
            text: `This is my master research porject, is aimed to research the possibility of sequence model 
                    and embedding methods for credit scoring. It is because previous research papers are focused 
                    on logistic regressor, decision tree based model or simple MLP models. Those are taken input 
                    as scalar values. Howevery, there is many models achieve better result with utilizing sequence 
                    model and embeding layer as efficecy of feature interaction and computing latent facotrs.
                    The experiment results shows that these sequence models are much robust to imbalanced data and 
                    small size of dataset. I usded Tensorflow and keras tuner for hyperparameter tuning, conducted
                    experiment on google colab.`,
            img: ""
        },  { title: "Stable Crypto Coin",
            url: "",
            status : "Ongoing",
            tags : ['solidity', 'truffle', 'ganache'],
            text: `This is personal hobby projects of Ethereum based crypto stable coin. It is aimed to build hybrid
            stable coin of collateral deby based coin, such as Dai and Non-Collateralized coin like Beanstalk.
            Stable coins has much possibility for distributed finance system. However, current crypto's value are not 
            based on economic activity. So I am trying to build a stable coin or floating price crypto coin which connected
            to real economic activity. This coin will have two stability function. One is cyrpto economic stabilizing mechanism
            that algorismic mechanism like beanstalk and gradual decreasing transaction cost system. Another is lending based stabilizing mechanism which is based on 
            based on real economic acitivity.`
        }, { title: "Simple WYSIWYG Note application",
            url:"",
            status : "Ongoing",
            tags: ['Node.js', 'Python', 'React', 'flask'],
            text : `React based simple note application.`,
            img: ""
        }
        ]
        },
    jp: { 
        "prof" : "", 
        "bio" : ""    
        },
    ch: {},
}