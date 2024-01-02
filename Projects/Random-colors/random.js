const on = document.getElementById('on');
const off = document.getElementById('off');

const randomColor = () =>{
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

// console.log(randomColor());
let lights;
const startLights = () =>{
    if(!lights){
        lights = setInterval(()=>{
            document.body.style.backgroundColor = randomColor();
        },500)
    }
    // console.log('started');
}

const stopLights = () => {
    // console.log('stopped');
    clearInterval(lights);
    document.body.style.backgroundColor = 'white';
    //also to save memory clean the lights variable
    lights=null;
}
on.addEventListener('click',startLights);
off.addEventListener('click',stopLights);