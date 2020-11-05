import { share } from './share.js'

share.map(status => {
    if ( status.actived === false ) {
        const networks = document.querySelectorAll(`#${status.name}`)
        networks.forEach(item => {
            item.classList.add('disable')
        })
    }
})

const navigatorHasShare = navigator.share
const URL = 'http://localhost:3000/'
const browser = document.querySelector("#browser")
/* const title = "Paketá Academy - Article Preview" */

const shareInfo = () => {
    navigator.share({
        title: "Paketá Academy - Article Preview",
        url: URL
    })
}

const copyInfo = () => {
    navigator.clipboard.writeText(`${shareInfo.title} - *Learn more about in* ${URL}/`)/* ${id} */
}

browser.addEventListener('click', () => {

    if (navigatorHasShare) {
        shareInfo().then(() => {
            console.log('Compartilhado com sucesso!');
        })
        .catch(console.error)
    } else{
        copyInfo()
    }

})