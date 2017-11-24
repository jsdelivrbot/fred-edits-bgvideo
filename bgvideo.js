var bgImage = document.querySelector('#full_screen_image')
bgImage.style.backgroundImage = 'url(https://cdn.rawgit.com/rwest202/fred-edits-bgvideo/master/Into_the_Wild.jpg)'

bgImage.innerHTML += `
<video autoplay loop>
    <source src="https://cdn.rawgit.com/rwest202/fred-edits-bgvideo/blob/master/Into_the_Wild.webm">
    <source src="https://cdn.rawgit.com/rwest202/fred-edits-bgvideo/blob/master/Into_the_Wild.mp4">
</video>
`

var node = document.createElement('style')
node.innerHTML += `
video {
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
    object-position: center center;
    padding: 0;
    margin: 0;
}
`
document.body.appendChild(node)