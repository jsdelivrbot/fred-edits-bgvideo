let path = window.location.pathname

if (path === '/') {
    document.body.innerHTML += `<video playsinline loop muted autoplay>
        <source src="https://cdn.jsdelivr.net/gh/rwest202/fred-edits-bgvideo/edit_reel.webm">
        <source src="https://cdn.jsdelivr.net/gh/rwest202/fred-edits-bgvideo/edit_reel.mp4">
    </video>`
}
