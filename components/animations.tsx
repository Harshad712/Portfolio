export const riseWithFade={
    initial: {
        y:100,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition: {
            ease:[0.6, 0.01, 0.05, 0.95],
            duration:0.7
        }
    }
};

export const profileAnimation={
    initial: {
        y:100,
        opacity:0,
        scale:0.8
    },
    animate: {
        y:0,
        opacity:1,
        scale:1,
        transition: {
            ease:[0.6, 0.01, 0.05, 0.95],
            duration:1
        }
    }
};

export const staggerChildren = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
        }  
    }
};
export const wordAnimation ={
    initial: {
        y:100,
    },
    animate: {
        y:0,
        transition: {
            ease:[0.6, 0.01, 0.05, 0.95],
            duration:1,
        },
    }
};
export const delayedWordAnimation ={
    initial: {
        y:100,
    },
    animate: {
        y:0,
        transition: {
            // delay:0.88,
            ease:[0.02, 0.01, 0.68, 0.95],
            duration:1,
        },
    },
};