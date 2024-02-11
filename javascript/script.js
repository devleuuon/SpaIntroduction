import { Router } from './router.js'

const router = new Router() //passando o nome e o link
router.add('/', '/pages/home.html')
router.add('/about', '/pages/about.html')
router.add('/contact', '/pages/contact.html')
router.add( 404, '/pages/404.html')

router.handle() //chamando função

window.onpopstate = () => router.handle() //função para poder navegar pelas setas de avançar e retroceder do navegador.
window.route = () => router.route() //o onlick route() para de funcionar, necessário chama-lo direto no window