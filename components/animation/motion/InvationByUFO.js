import { motion } from 'framer-motion';
import { MoSvg, MoPath } from './MotionSVG';
import { Box } from '@chakra-ui/react';


const pathVariants = {
    twinkle: (i) => { 
        const delay = i*1 + i*Math.random();
        return {
        opacity: [1,1,0],
        transition: {
            times: [0, 0.95, 1],
            duration: 10,
            delay,
            repeat: 'Infinity'
        }
    }},
}

function InvationByUFO(){

    return(
    <Box position='absolute' bottom='20' zIndex={0} >
        <MoSvg viewBox='0 0 1280 1212' width='auto' height='auto'
            preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,1212.000000) scale(0.100000,-0.100000)"
            fill="#E0E0EF" stroke="none">
        <MoPath variants={pathVariants} animate='twinkle' custom={1} d="M5385 12089 c-15 -29 -18 -30 -61 -23 l-45 6 6 -28 c4 -16 8 -34 10
        -41 2 -7 -9 -20 -25 -30 -38 -22 -38 -38 1 -58 22 -12 29 -21 25 -36 -4 -10
        -9 -29 -12 -40 -6 -20 -4 -21 39 -15 44 7 47 6 62 -23 20 -39 30 -39 50 0 15
        29 19 30 57 24 l41 -7 -6 41 c-5 37 -2 43 24 58 16 10 29 22 29 28 0 6 -13 18
        -29 28 -26 15 -29 21 -24 58 l6 41 -41 -7 c-37 -6 -41 -4 -58 24 -23 39 -30
        39 -49 0z"/>
        <MoPath variants={pathVariants} animate='twinkle' custom={2} d="M9493 11693 c-30 -23 -33 -24 -62 -8 -40 20 -51 13 -51 -31 0 -24 -5
        -36 -17 -40 -10 -3 -29 -10 -42 -15 l-24 -10 29 -30 28 -30 -18 -34 c-11 -19
        -17 -37 -15 -38 2 -2 22 -8 43 -13 33 -7 41 -14 48 -41 10 -39 23 -41 55 -11
        22 21 24 21 58 5 46 -22 45 -22 45 12 0 41 9 61 29 61 10 0 26 6 37 14 19 14
        18 15 -6 41 -22 23 -23 28 -12 58 20 50 19 51 -22 57 -33 4 -41 10 -50 37 -15
        44 -17 44 -53 16z"/>
        <MoPath variants={pathVariants} animate='twinkle' custom={3} d="M11684 11559 c-34 -38 -52 -42 -88 -20 -47 30 -56 27 -56 -18 0 -42
        -20 -71 -49 -71 -9 0 -26 -6 -36 -14 -18 -13 -18 -15 13 -51 l33 -37 -21 -35
        c-28 -47 -20 -63 30 -63 34 0 42 -4 50 -25 6 -14 15 -36 20 -50 l10 -26 40 32
        40 33 40 -23 c22 -12 44 -19 50 -16 5 3 10 26 10 51 0 44 0 44 45 56 25 7 45
        18 45 24 0 7 -12 27 -27 44 l-26 32 21 43 c11 24 18 46 15 49 -4 3 -23 6 -43
        6 -43 0 -54 11 -67 59 -11 43 -24 48 -49 20z"/>
        <MoPath variants={pathVariants} animate='twinkle' custom={1} d="M2195 11450 c-41 -43 -60 -46 -115 -16 -58 32 -67 24 -72 -54 l-3
        -54 -54 -16 c-30 -8 -56 -21 -58 -27 -3 -7 14 -32 37 -57 l42 -46 -26 -44
        c-39 -67 -36 -76 27 -76 28 0 57 -4 63 -8 7 -4 18 -27 25 -52 20 -74 29 -77
        83 -29 l48 42 54 -29 c65 -35 74 -28 74 53 l0 52 55 16 c30 9 57 21 61 26 3 5
        -13 30 -35 54 -23 25 -41 47 -41 50 0 4 12 26 26 51 35 60 28 72 -43 76 l-58
        3 -18 58 c-10 31 -24 57 -31 57 -7 0 -25 -13 -41 -30z"/>
        <MoPath variants={pathVariants} animate='twinkle' custom={1} d="M10610 10294 c0 -9 -13 -21 -29 -27 -26 -9 -28 -13 -18 -34 8 -17 7
        -27 -1 -35 -18 -18 -15 -28 13 -38 15 -6 25 -17 25 -30 0 -22 7 -25 30 -10 10
        6 22 5 36 -5 24 -16 34 -11 34 17 0 13 7 18 25 18 27 0 33 18 13 38 -9 9 -8
        16 5 30 22 25 22 29 -8 36 -15 4 -25 14 -25 25 0 26 -10 32 -32 20 -14 -8 -23
        -8 -31 0 -16 16 -37 13 -37 -5z"/>
        <MoPath variants={pathVariants} animate='twinkle' custom={1} d="M6805 8024 c-14 -22 -22 -25 -50 -21 -41 7 -45 3 -35 -34 7 -25 5
        -32 -22 -52 l-30 -24 30 -22 c27 -19 30 -25 22 -51 -10 -35 0 -45 37 -35 21 5
        31 1 50 -22 l23 -28 21 28 c18 24 26 27 56 21 l36 -7 -6 34 c-4 29 -1 38 25
        60 l31 26 -30 18 c-28 16 -30 22 -26 56 l5 37 -39 -5 c-35 -5 -40 -2 -51 21
        -15 33 -25 33 -47 0z"/>
        <MoPath variants={pathVariants} animate='twinkle' custom={1} d="M11410 7704 c-107 -29 -222 -120 -271 -216 -47 -91 -60 -210 -35
        -304 51 -193 219 -324 415 -324 191 0 348 115 411 301 32 93 25 212 -18 303
        -90 193 -301 294 -502 240z"/>
        <motion.path variants={pathVariants} animate='twinkle' custom={1} d="M735 6461 c-228 -106 -155 -450 96 -451 153 0 268 145 230 290 -37
        142 -197 221 -326 161z"/>
        <MoPath variants={pathVariants} animate='twinkle' custom={1} d="M1185 9803 c-30 -7 -73 -52 -86 -90 -21 -66 36 -153 102 -153 96 0
        156 120 97 195 -17 22 -78 59 -90 54 -2 -1 -12 -3 -23 -6z"/>

        <motion.path d="M2471 4931 c-19 -26 -25 -29 -62 -24 l-40 6 7 -38 c6 -33 3 -40 -22
        -61 l-29 -24 29 -24 c25 -21 28 -29 23 -60 -7 -43 0 -48 42 -36 30 8 34 7 49
        -20 21 -37 33 -37 60 -1 20 27 25 29 54 20 18 -5 35 -9 37 -9 2 0 1 19 -2 43
        -6 39 -4 44 24 59 37 22 37 34 -1 53 -28 15 -30 18 -24 57 l7 41 -41 -7 c-39
        -6 -42 -4 -57 24 -19 37 -28 38 -54 1z"/>
        
        {/* ufo upper parts */}
        <MoPath fill='#81E6D9' d="M7537 11290 c-86 -15 -188 -72 -270 -149 -67 -64 -185 -216 -175
        -226 2 -2 60 16 128 41 203 72 708 214 764 214 9 0 16 4 16 9 0 11 -171 85
        -231 100 -68 16 -177 21 -232 11z"/>
        <MoPath fill='#276749' d="M8395 9640 c-38 -5 -100 -15 -138 -24 -148 -35 -457 -169 -426 -186
        8 -4 77 -22 154 -40 468 -105 950 -246 1337 -390 73 -27 134 -48 136 -45 2 2
        -26 49 -63 105 -231 350 -479 532 -785 576 -103 15 -111 15 -215 4z"/>
        <MoPath d="M3841 8985 c-424 -75 -797 -360 -1137 -873 -120 -181 -119 -178 -58
        -154 622 245 1523 511 2312 684 83 18 152 35 152 38 0 12 -360 180 -455 213
        -132 46 -152 52 -270 78 -130 28 -417 36 -544 14z"/>
        <MoPath d="M8036 7154 c-178 -24 -361 -74 -541 -149 -88 -36 -299 -139 -356
        -174 l-32 -19 39 -10 c21 -6 122 -29 224 -52 760 -171 1606 -417 2205 -640 77
        -28 175 -65 218 -80 l78 -29 -23 37 c-162 266 -302 448 -482 627 -156 155
        -247 226 -399 313 -279 159 -604 221 -931 176z"/>
        

        {/* ufo under parts */}
        <MoPath d="M8280 11203 c-392 -64 -810 -179 -1227 -339 -265 -101 -354 -150
        -340 -188 9 -22 114 -29 287 -17 295 20 453 24 496 12 36 -10 57 -7 170 22
        115 30 136 39 194 83 36 27 142 94 235 149 303 176 382 235 368 271 -4 11 -23
        14 -82 13 -42 -1 -87 -4 -101 -6z m-615 -489 c-97 -25 -119 -29 -93 -14 25 15
        120 39 153 38 17 0 -8 -10 -60 -24z"/>
        <MoPath d="M4785 10796 c-90 -18 -153 -40 -240 -84 l-70 -36 40 -9 c313 -71 600
        -153 821 -233 69 -25 128 -43 131 -40 10 9 -102 161 -167 226 -148 149 -331
        211 -515 176z"/>
        <MoPath d="M4010 10711 c-39 -11 -36 -38 9 -80 23 -21 162 -110 309 -197 147
        -87 291 -179 321 -203 50 -40 67 -47 202 -81 108 -27 151 -34 159 -26 13 13
        267 12 460 -3 194 -16 382 -14 404 2 55 40 -82 113 -481 258 -380 138 -663
        217 -1048 293 -112 22 -289 48 -305 45 -3 -1 -16 -4 -30 -8z m902 -538 c65
        -26 32 -25 -67 2 -88 24 -88 25 -32 20 31 -3 76 -13 99 -22z"/>
        <MoPath d="M7065 9493 c-11 -2 -30 -6 -42 -8 -31 -7 -38 -39 -16 -76 35 -61 135
        -127 588 -394 351 -206 513 -311 548 -357 22 -27 42 -34 273 -92 237 -59 250
        -61 279 -46 43 21 405 19 735 -5 344 -25 622 -26 673 -3 124 56 -70 170 -663
        390 -496 183 -785 277 -1075 349 -545 136 -950 220 -1152 239 -112 10 -115 10
        -148 3z m1345 -858 c66 -14 225 -73 218 -81 -2 -1 -89 19 -193 46 -153 39
        -181 49 -143 49 26 1 79 -6 118 -14z"/>
        {/* with beam */}
        <MoPath d="M6085 8774 c-396 -38 -935 -148 -1945 -399 -241 -60 -446 -125 -955
        -303 -1093 -382 -1615 -618 -1615 -731 0 -26 39 -57 90 -73 69 -20 523 -15
        895 10 534 37 654 43 870 43 215 1 334 -12 360 -37 19 -19 25 -18 159 17 65
        17 119 29 121 27 1 -2 33 -136 70 -298 113 -497 149 -656 270 -1185 64 -280
        145 -636 180 -790 35 -154 107 -469 160 -700 53 -231 112 -491 131 -578 l35
        -157 -24 -63 c-33 -82 -42 -160 -27 -233 54 -260 326 -401 557 -288 107 52
        193 170 215 294 26 151 -52 333 -176 405 l-43 25 -558 1810 c-306 996 -555
        1813 -552 1816 3 3 65 21 137 39 142 36 138 34 154 67 27 56 311 243 776 513
        538 312 741 438 860 534 132 107 163 178 91 215 -28 15 -166 27 -236 20z
        m-1617 -1280 c-3 -3 -47 -16 -98 -28 -77 -20 -92 -21 -97 -9 -9 22 4 28 80 34
        113 9 121 9 115 3z m-218 -49 c0 -6 -38 -20 -84 -31 -75 -19 -86 -19 -91 -6
        -9 23 4 30 85 51 74 19 89 16 90 -14z m-200 -43 c0 -15 -16 -22 -77 -37 -43
        -10 -85 -20 -93 -23 -38 -13 7 14 72 44 84 39 98 41 98 16z m259 -149 c22 -71
        270 -875 551 -1788 281 -913 515 -1673 520 -1690 6 -19 26 -40 54 -58 101 -64
        164 -170 173 -292 20 -255 -206 -452 -447 -391 -113 29 -194 99 -248 214 -23
        49 -27 70 -27 152 0 82 4 103 28 155 l27 60 -95 420 c-53 231 -125 546 -160
        700 -35 154 -105 460 -155 680 -50 220 -120 526 -155 680 -196 859 -246 1078
        -264 1155 -11 47 -19 86 -18 87 4 3 151 41 164 42 7 1 29 -53 52 -126z"/>
        <MoPath d="M5807 6906 c-52 -19 -67 -34 -67 -68 0 -41 21 -77 72 -124 125 -115
        303 -229 873 -562 231 -135 472 -277 535 -315 263 -161 457 -303 462 -340 3
        -19 22 -26 152 -59 82 -21 151 -39 153 -42 2 -2 -36 -143 -86 -312 -49 -170
        -140 -482 -201 -694 -61 -212 -151 -522 -200 -690 -117 -404 -281 -969 -430
        -1485 -67 -231 -130 -450 -141 -487 -17 -59 -25 -71 -63 -97 -93 -64 -159
        -175 -179 -300 -28 -185 69 -378 230 -458 53 -25 68 -28 163 -28 101 0 108 1
        168 34 78 42 145 115 186 201 29 61 31 71 31 185 0 106 -3 127 -25 180 l-25
        60 409 1910 c225 1051 411 1912 413 1915 3 3 256 -55 289 -67 6 -2 18 3 26 11
        63 63 403 64 1293 5 571 -38 942 -44 1045 -16 35 10 72 25 82 34 28 25 22 67
        -13 108 -130 147 -862 446 -2219 906 -192 66 -374 117 -660 189 -1318 330
        -2096 469 -2273 406z m2201 -1405 c14 -1 15 -10 3 -29 -6 -10 -25 -9 -97 9
        -141 34 -130 37 94 20z m152 -29 c54 -14 66 -21 68 -39 4 -29 -9 -29 -106 -4
        -83 22 -87 24 -79 46 8 19 34 18 117 -3z m233 -85 c48 -22 86 -42 84 -44 -5
        -4 -210 48 -220 57 -4 4 -5 14 -1 24 8 20 19 17 137 -37z m-258 -26 c59 -15
        70 -21 68 -38 -1 -11 -185 -870 -408 -1910 -223 -1040 -405 -1897 -405 -1906
        0 -8 9 -34 19 -58 92 -209 7 -458 -187 -551 -154 -73 -339 -20 -437 124 -72
        107 -93 247 -56 367 33 105 66 149 185 246 20 17 47 99 171 530 81 281 182
        632 225 780 129 445 420 1450 601 2075 55 190 102 351 104 358 3 8 13 10 27 7
        13 -3 55 -14 93 -24z"/>        

        {/* town */}
        <motion.path d="M5764 3605 c-4 -8 -4 -25 0 -38 5 -20 20 -27 126 -52 66 -15 120 -31
        120 -35 0 -3 -33 -53 -74 -110 l-75 -104 56 -81 c31 -44 65 -91 75 -104 10
        -14 15 -28 11 -32 -4 -4 -60 -21 -123 -36 l-115 -28 -8 -129 c-4 -71 -9 -132
        -12 -134 -2 -2 -52 21 -110 52 -58 31 -110 56 -114 56 -4 0 -45 -43 -91 -95
        -46 -52 -85 -93 -88 -91 -2 3 -26 57 -52 121 -26 64 -51 116 -56 117 -22 1
        -168 -14 -180 -19 -12 -4 -14 -189 -14 -1158 l0 -1152 -107 -6 c-58 -4 -144
        -7 -190 -7 l-83 0 0 533 0 533 -275 274 c-152 151 -280 277 -286 279 -6 2
        -137 -122 -290 -275 l-279 -279 0 -555 0 -555 -37 -3 c-21 -2 -93 -6 -160 -10
        l-123 -7 0 672 0 672 -51 148 c-27 81 -82 253 -120 382 -77 256 -93 301 -108
        301 -17 0 -28 -29 -121 -318 -49 -152 -110 -332 -135 -397 l-45 -120 0 -275 1
        -275 -561 -3 -560 -2 2 -465 3 -465 -30 -5 c-16 -3 -68 -9 -115 -15 -47 -6
        -97 -13 -113 -16 l-27 -6 0 219 0 218 -130 130 -130 130 -135 -135 -135 -135
        0 -256 0 -257 -67 -12 c-184 -31 -504 -124 -593 -171 -34 -18 138 -18 6360
        -18 5895 0 6393 1 6365 16 -160 86 -630 195 -1185 273 -125 17 -641 80 -662
        80 -5 0 -8 153 -8 339 l0 339 -165 157 -166 158 -159 -159 -160 -158 0 -309 0
        -309 -87 6 c-49 4 -112 9 -140 13 l-53 5 0 1128 0 1127 -77 7 c-98 8 -449 8
        -586 -1 l-107 -6 0 -1104 0 -1103 -63 0 c-35 0 -105 3 -155 6 l-92 7 -1 641 0
        641 -349 355 -350 355 -250 -250 c-137 -137 -250 -252 -250 -256 0 -3 57 -19
        127 -36 l126 -30 -89 -55 c-49 -30 -119 -72 -156 -94 l-67 -39 6 -140 c3 -77
        8 -143 12 -146 3 -3 41 -18 84 -33 42 -16 80 -32 83 -37 3 -5 -17 -57 -45
        -115 -28 -59 -51 -112 -51 -119 0 -7 23 -61 51 -120 29 -60 48 -110 43 -115
        -5 -5 -45 -22 -89 -38 l-80 -30 -7 -142 c-4 -78 -8 -143 -10 -145 -2 -2 -32
        21 -68 50 -36 30 -68 54 -72 54 -5 1 -8 -26 -8 -59 0 -56 -1 -60 -24 -60 -22
        0 -24 -4 -30 -90 -4 -49 -10 -90 -13 -90 -3 0 -44 21 -91 46 l-85 47 -73 -79
        c-40 -43 -74 -77 -77 -74 -2 3 -21 48 -42 101 l-37 96 -40 -1 -41 -1 -64 150
        c-35 83 -68 154 -73 159 -4 4 -47 -51 -94 -123 -78 -118 -89 -131 -116 -131
        l-29 0 5 168 c3 92 6 184 8 205 3 26 0 37 -9 37 -7 0 -79 -16 -160 -35 -81
        -20 -150 -34 -152 -31 -2 2 41 88 97 190 56 102 100 191 98 196 -2 6 -64 57
        -138 113 -73 56 -135 107 -137 114 -3 6 55 34 139 67 79 31 149 60 156 64 9 6
        -5 58 -58 215 -38 114 -70 212 -70 218 0 16 21 6 163 -78 74 -44 132 -72 136
        -67 5 5 19 111 32 237 12 125 26 227 30 227 3 0 44 -88 89 -195 46 -107 87
        -195 91 -195 5 0 31 34 59 75 l50 74 -2 728 -3 728 -608 3 c-534 2 -608 0
        -613 -13z"/>
        </g>
    </MoSvg>
    </Box>
    )
}

export { InvationByUFO as default };