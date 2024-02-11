export class Router { //na classe Router, pode tirar a function da palavra route().
    routes = {} //objeto vazio

    add(routeName, link) {
        this.routes [routeName] = link
    }
    
    route(event) { // função do disparo no click.
        event = event || window.event //retorna evento ou evento do window.
        event.preventDefault() //não carrega a página
    
        window.history.pushState( {}, "", event.target.href) //pega window, o histórico da aplicação, coloque o estado no histórico. o evento pega quem disparou ele, que foi o target e pega o href de quem disparou.
    
        this.handle() //sempre na classe tem que usar a palavra this.
    }

    handle() { //localiza o nome de cada href
        const { pathname } = window.location //{ desestrutura, evitando maior número de linhas} || const pathname = window.location.pathname
        const route = this.routes[pathname] || this.routes[404] //pega os roteamentos, se não houver nome da pagina, retorna 404;
    
        // fetch é uma função assíncrona, quebra a leitura do javascript, não lê linha por linha... ela retorna depois.
        fetch(route).then(data => data.text()) //busca route, então pega os dados.text,
        .then(html => { //então pega o html, busca o #app e passa o html para ele.
            document.querySelector('#app').innerHTML = html
        })
    }
}