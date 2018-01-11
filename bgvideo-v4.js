let path = window.location.pathname

if (path === '/') {
    document.body.innerHTML += `
    <video autoplay loop muted plays-inline>
        <source src="https://cdn.rawgit.com/rwest202/fred-edits-bgvideo/master/edit_reel.webm">
        <source src="https://cdn.rawgit.com/rwest202/fred-edits-bgvideo/master/edit_reel.mp4">
    </video>
}
