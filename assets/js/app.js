
// font changer
const fontChange = document.getElementById('fontChanger');


// select font changer elements
const fontBold = document.getElementById('fontBold');
const fontItalic = document.getElementById('fontItalic');
const fontUnderline = document.getElementById('fontUnderline');
const inputText = document.getElementById('inputText');

// Select alignment elements
const alignLeft = document.getElementById('alignLeft');
const alignJustify = document.getElementById('alignJustify');
const alignCenter = document.getElementById('alignCenter');
const alignRight = document.getElementById('alignRight');

//select Font size and color
const fontSize = document.getElementById('fontSize');




function fontChanger(target){

    const inputText = document.getElementById('inputText');

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
    const inputText = document.getElementById('inputText');
    
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

//inputText.style.fontSize = target.value

// font changer
    fontBold.addEventListener('click',function(){
        fontChanger(this)
    });
    fontItalic.addEventListener('click',function(){
        fontChanger(this)
    });
    fontUnderline.addEventListener('click',function(){
        fontChanger(this)
    });

    // allignment center
    alignLeft.addEventListener('click', function(){
        fontChanger(this)
    });
    alignJustify.addEventListener('click', function(){
        fontChanger(this)
    });
    alignCenter.addEventListener('click', function(){
        fontChanger(this)
    });
    alignRight.addEventListener('click', function(){
        fontChanger(this)
    });



    fontColor.addEventListener('input', function(){
        changeColor(this)
        const fontColor = document.getElementById('fontColor');
        console.log(fontColor.value)
    });
    fontSize.addEventListener('input', function(){
        changeColor(this)
    });









