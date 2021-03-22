class ProcessingState extends State {
    Play() {
        this.game.alreadyPlaying();
    }

    Submit(ans) {
        this.evaluateAnswer(ans);
    }
}