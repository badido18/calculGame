const Jeu = new Game();

const GamePlay = () => {
    Jeu.GamePlay();
}

const Answer = () => {

    Jeu.evaluateAnswer();
}

const setLevel = (lvl) => {
    Jeu.setLevel(lvl)
}

Jeu.init();