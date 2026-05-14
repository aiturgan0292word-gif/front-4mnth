



const  tabBlocks = document.querySelectorAll(".tab_content_block")
const tabs = document.querySelectorAll(".tab_content_item")
const tabsParent = document.querySelector(".tab_content_items")

const hideBlocks = () => {
    tabBlocks.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}
const showBlock = (index = 0) => {
    tabBlocks[index].style.display = 'block';
    tabs[index].classList.add('tab_content_item_active')
}
     
hideBlocks();
showBlock(2);
tabsParent.onclick = (event) => {
    if(event.target.tagName.toLowerCase() === 'button') {    
        tabs.forEach((item, index) =>{
            if (event.target === item) {
                hideBlocks();
                showBlock(index)
            }
        })    
    }
}


//5 дз



const usdInput = document.querySelector('#usd');
const somInput = document.querySelector('#som');
const eurInput = document.querySelector('#eur');


const converter = (element, otherElement,anyElement  ) => {
    element.addEventListener('input', () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/converter.json');
        request.setRequestHeader( 'Content-type', 'application/json')
        request.send ();
       
    
        request.onload = () => {
            const reasopns = JSON.parse(request.response);
             if( element.value == ''){
                otherElement.value = '';
                return;
            }
            const som = reasopns?.som
            const usd = reasopns?.usd;
            const eur = reasopns?.eur;


            if(element.id === 'som'){
                otherElement.value = (element.value / usd ).toFixed(2)
                anyElement.value = (element.value / eur ).toFixed(2)
            }
            else if (element.id  === 'usd'){
                otherElement.value = (element.value * usd ).toFixed(2)
                anyElement.value = ((element.value * eur) / usd ).toFixed(2)
            }
            else if(element.id === 'eur'){
                otherElement.value = ( element.value * (eur / usd)).toFixed(2)
                anyElement.value = ( element.value * eur).toFixed(2)
            }
        }
    })

}
converter (somInput , usdInput,eurInput);
converter (usdInput,somInput ,eurInput);
converter (eurInput,usdInput, somInput);