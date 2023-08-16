
// font changer
const fontChange = document.getElementById('fontChanger');



const fontBold = document.getElementById('fontBold');
const fontItalic = document.getElementById('fontItalic');
const fontUnderline = document.getElementById('fontUnderline');
// const inputText = document.getElementById('inputText');

function fontChanger(target){

    const inputText = document.getElementById('inputText');

    switch(target.id){
        case 'fontBold': inputText.style.fontWeight = 'bold'
        break;
        case 'fontItalic': inputText.style.fontStyle = 'italic'
        break;
        case 'fontUnderline': inputText.style.textDecoration = 'underline'
        break;

    }
    
    console.log(target.id === 'fontBold')

}



// font changer
let ddfdfdf =fontChange.childNodes;


for(let i = 0; i <  ddfdfdf.length; i++){
    // fontBold.addEventListener('click',function(){
    //     fontChanger(this)
    // });
    // fontItalic.addEventListener('click',function(){
    //     fontChanger(this)
    // });
    // fontUnderline.addEventListener('click',function(){
    //     fontChanger(this)
    // });
    let ddf = ddfdfdf[i].;
    console.log(ddf)

}




