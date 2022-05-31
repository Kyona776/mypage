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
        },  { title: "Automated hedged P2P lending defi platform",
            url: "",
            status : "Ongoing",
            tags : ['solidity', 'truffle', 'ganache'],
            text: `This is personal research project of Ethereum based P2P lending platform. The great feature of this defi
            is automated currency hedging without any counterparty. It utilize stablecoin mechanism, such as Dai.
            For future, it needs to be intergrated with zksnark or FHE based creadit scoring, accounting and  KYC system.
            It is beacuse any Defi projects cannot avoid regulation.
            `
        },
        { title: "Stable Crypto Coin",
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
        },
        { title: "Simple WYSIWYG Note application",
            url:"",
            status : "Ongoing",
            tags: ['Node.js', 'Python', 'React', 'flask'],
            text : `React based simple note application.`,
            img: ""
        }
        ]
        },
    jp: { 
        "prof" : `エノモトキョウナです。
        生まれは愛知県で、高校２年生まで愛知県で暮らしていました。
        高校２年生の時から３年間シンガポールで放浪して、
        ２１歳の時から台湾の大学へ留学してました。
        台湾では大学と大学院で財務金融学科を学んでいました。
        ２年くらい前からプログラミングを趣味で始めて、いろいろなものを広く浅く学んでいます。
        プログラミング言語はPython, Node.js, Solidityをよく使います。
        音楽が好きで、DTMでEDM系の音楽を作曲をしてます。
        使ってる音楽ソフトはFL Studioです。
        `, 
        "bio" : `
        中国文化大学 商院 財務金融學系（台灣） 2016-2020
        中國文化大學 商院 財務金融學系 碩士班（台灣） 2020-2021
        `,
        projs : [
            { title: "Browse Dog",
            url:"",
            status : "Ongoing",
            tags: ['Node.js', 'Python', 'React', 'flask'],
            text : `インターン時に新規アプリ事業としてデモアプリを作りました。
            初めて作ったウェブアプリでした。機能として固有名詞抽出apiサービスを利用してして、
            タグを自動生成する機能があります。`,
            image: "/images/browsedog.png"
            },{ 
            title: 'Polygon Planet',
            url: '',
            status: '',
            tags: ['Blender', 'Threejs'],
            text: `
                Blenderで作ったポリゴン惑星を作りました。
            `, image: "/images/lowpoly.png"
        }, {
            title: 'P2P lending credit scoring with transformer and dynamicConv',
            url: `https://github.com/Kyona776/creditscoring`,
            status: '',
            tags:['tensorflow', 'python'],
            text: `大学院での論文で信用スコアリングモデルの作成で使用しました。
            TransformerベースのモデルとDynamicConvベースの二つのシークエンスモデルを
            Lending Clubのデータセットを使い比較研究しました。\n
            結果的にはかなりの精度でデフォルト予測をおこなることがわかりました。`
        }
        ]
        },
    ch: {},
}