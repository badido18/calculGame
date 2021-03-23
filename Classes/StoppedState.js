class StoppedState extends State {
    Play() {
        this.game.tryAgain();
        this.game.indice = 0;
        this.game.loadOperations();
    }
    Submit(ans) {

    }
}