
function MojsInit(props) {
    
    window.COLORS = {
      purple: '#8A5CE6',
      blue:   '#42AFE3',
      yellow: '#FADD4A',
      red:    '#FF6680'
    }

    const duration  = 350,
          delayStep = duration/3,
          yShift    = 150,
          endAngle  = 30;

    let delay = 0;

    // Common options for a bubble
    const OPTS = {
      // shape:   'bubble',
      top:'20%',
      left: '50%',
      scale:   { 0.5 : 1 },
      // angle:   { 0 : 10, easing: 'cubic.out'  },
      rotate: {0:-10},
      y:       { 0: -yShift },
      opacity: {0.2:1},
      easing:  'sin.out',
      duration 
    }

    window.THEN_OPTS = {
      left: '50%',
      // angle: { to: -360},
      rotate: {'-10': 360},
      duration : 300
    }
    window.END_OPTS = {
      y:        yShift,
      // angle:    { to: -10, easing: 'cubic.in' },
      left: '50%',
      scale:    { to: 0.5, easing: 'quad.in' },
      easing:   'sin.in',
      duration
    }

    // blue logo then options
    const LOGO_THEN_OPTS = {
      scale: 0,
      delay: 1000
    }

    window.moRect_Init = {
        ...OPTS,
        shape: 'rect',
        fill: 'none',
        origin: '0% 0%',
        stroke:       { 'rgba(0,255,255, 1)' : 'magenta' },
        strokeWidth: 5
        
    }

    window.moTri_int ={
        ...OPTS,
        shape:'triangle',
        origin: '0% 0%',
        delay: 1150,
    }

    window.moCross_init = {
        ...OPTS,
        shape:'cross',
        stroke: '#FC46AD',
        strokeWidth : 10,
        delay: 1150*2
    }
    
    window.moCheck_init = {
        ...OPTS,
        shape:    'check',
        stroke:   COLORS.blue,
        fill:     'none',
        radius:   18,
        strokeWidth: 15,
        x: 1, y: 2,
        strokeLinecap: 'round',
        strokeDasharray: '100%',
        strokeDashoffset: { '100%': 0 },
    }

    return (<></>)
}   

export { MojsInit as default };