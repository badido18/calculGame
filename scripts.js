const Jeu = new Game();

const GamePlay = () => {
    Jeu.GamePlay();
}

const Answer = () => {

    Jeu.evaluateAnswer();
}

const setLevel = (lvl) => {
    Jeu.level = lvl;
    switch (lvl) {
        case 0:
            Jeu.setLevelEasy();
            break;
        case 1:
            Jeu.setLevelMedium();
            break;
        case 2:
            Jeu.setLevelHard();
            break;
    }
}