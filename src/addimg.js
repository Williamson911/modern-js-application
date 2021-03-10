// Adding the new image
async function addImage() {
    document.querySelector('#hero-image').addEventListener('change', (element) => {
        const file = element.target.files[0]
        const reader = new FileReader()
        reader.onloadend = () => {
            image = reader.result.replace('data:', '').replace(/^.+,/, '')
        }
        reader.readAsDataURL(file)
    })
}

export { addImage }