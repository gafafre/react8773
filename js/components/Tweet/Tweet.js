// Componente Tweet
// Função que retorna um elemento React
export function Tweet(conteudo) {
    return (
        React.createElement('article', {className: 'tweet'},[
            React.createElement('div', {className: 'tweet__header'}, 'header'),
            React.createElement('p', {className: 'tweet__conteudo'},
                [conteudo, 'continuação', conteudo]
            ),
            React.createElement('div', {className: 'tweet__footer'}, 'footer')

        ])
    )
}
