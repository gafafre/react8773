import { Tweet } from '/js/components/Tweet/Tweet.js';

const listaTweets = [
    'tweet 1',
    'tweet 2',
    'tweet 3',
    'tweet 4'
]

const $listaTweets = listaTweets.map((conteudo) => Tweet(conteudo))

ReactDOM.render(
    $listaTweets,
    document.querySelector('.tweetsArea')
)