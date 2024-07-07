const container=document.querySelector('.container')
const yesBTN=document.getElementById('yes')
const noBTN=document.getElementById('no')
const heroHead=document.querySelector('.hero-head')
const img=document.getElementById('img')

noBTN.addEventListener('mouseover', (e) => {
    const buttonWidth=getComputedStyle(e.target).getPropertyValue('width')
    const buttonHeight=getComputedStyle(e.target).getPropertyValue('height')
    const numWidth=+buttonWidth.substring(0,buttonWidth.length-2)
    const numHeight=+buttonHeight.substring(0,buttonHeight.length-2)
    
    const containerHeight=container.clientHeight
    const containerWidth=container.clientWidth
    noBTN.style.top=`${getRandomSize(containerHeight,numHeight)}px`
    noBTN.style.left=`${getRandomSize(containerWidth,numWidth)}px`
    heroHead.innerText="Mann jaa na please!!🙃"
    img.src="https://i.pinimg.com/originals/a7/2a/3b/a72a3b5448d522f6a855bdf9da7f9f79.jpg"
    console.log('mouseover')
});
yesBTN.addEventListener('click',()=>{
    heroHead.innerText="Yayy!!"
    img.src="https://media.tenor.com/gQ8oSahAc3oAAAAM/thankful.gif"
    yesBTN.style.display="none"
    noBTN.style.display="none"
    console.log('click')
})
function getRandomSize(containerSize,buttonSize){
    size=Math.floor(Math.random() * containerSize-buttonSize)+1
    return size
}