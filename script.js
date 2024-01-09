const $ = document
const pElem = $.getElementById('text');


let textArray = ['ali astereki', 'sara jokari', 'arad astereki']

const delWriter = (text, index, cb)=>{
    pElem.innerHTML = text.substring(0,--index)

    if(index>=0){
        
    setTimeout(() => {
        delWriter(text, index, cb)
    }, 100);
    }else{
        setTimeout(() => {
            cb()
        }, 1000);
    }

}

const typeWriter = (text,index, cb)=>{
    if(index<text.length){
        pElem.innerHTML += text[index]
        index++
        setTimeout(() => {
            typeWriter(text,index, cb)
        }, 100);
    }else{
        setTimeout(() => {
            delWriter(text,index,cb)
        }, 2000);
    }   
}

const startWriter = (i)=>{

if(i<textArray.length){
    typeWriter(textArray[i],0, function(){
        startWriter(i+1)
    })
}else{
    startWriter(0)
}

}


setTimeout(()=>{
    startWriter(0)
},1000)