class State {
    constructor(game) {
        this.game = game;
    }
    Play() {

    }
    Submit(ans) {

    }
    PrintExpression() {
        this.game.PrintExpression();
    }
    evaluateAnswer() {
        let answer = this.game.getAnswer();
        let evaluation = this.game.VerifAnswer(answer);
        this.game.ResultFeedBack(evaluation);
        if (!evaluation) {
            this.game.setStoppedState();
        } else {
            this.game.Next();
            this.game.incScore();
        }
    }
}