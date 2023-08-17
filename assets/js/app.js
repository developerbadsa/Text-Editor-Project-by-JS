// select font changer elements
const inputText = document.getElementById('inputText');


function fontChanger(target){

    switch(target.id){
        case 'fontBold': inputText.style.fontWeight = 'bold'
        break;
        case 'fontItalic': inputText.style.fontStyle = 'italic'
        break;
        case 'fontUnderline': inputText.style.textDecoration = 'underline'
        break;
        case 'alignLeft': inputText.style.textAlign = 'left'
        break;
        case 'alignJustify': inputText.style.textAlign = 'justify'
        break;
        case 'alignCenter': inputText.style.textAlign = 'center'
        break;
        case 'alignRight': inputText.style.textAlign = 'right'
        break;

    }


}

// for change color
function changeColor(target){
    
const fontColor = document.getElementById('fontColor');
    inputText.style.color = fontColor.value
    console.log(target.value)
    switch(target.id){
        case 'fontColor': inputText.style.fontColor = target.value
        break;
        case 'fontSize': inputText.style.fontSize = target.value+'px'
        break;
    }
}


//select Font size and color
const fontSize = document.getElementById('fontSize');


// font changer
document.getElementById('fontBold').addEventListener('click',function(){
        fontChanger(this)
    });
document.getElementById('fontItalic').addEventListener('click',function(){
        fontChanger(this)
    });
document.getElementById('fontUnderline').addEventListener('click',function(){
        fontChanger(this)
    });


    // allignment
document.getElementById('alignLeft').addEventListener('click', function(){
        fontChanger(this)
    });
document.getElementById('alignJustify').addEventListener('click', function(){
        fontChanger(this)
    });
document.getElementById('alignCenter').addEventListener('click', function(){
        fontChanger(this)
    });
document.getElementById('alignRight').addEventListener('click', function(){
        fontChanger(this)
    });


// font size and color elements
    fontColor.addEventListener('input', function(){
        changeColor(this)
    });
    fontSize.addEventListener('input', function(){
        changeColor(this)
    });









