const metaShareContainer = document.querySelector('.links');
const shareBox = document.querySelector('.links-icons');

metaShareContainer.addEventListener('mouseover', (e)=> {
    shareBox.classList.add('showsharebox');
    shareBox.addEventListener('mouseleave', () => {
        shareBox.classList.remove('showsharebox');
    })
});
    
    