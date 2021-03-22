class Expression {
    constructor(exp, sol) {
        this.exp = exp;
        this.sol = sol;
    };

}

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
            this.game.incScore();
        }
    }
}

class FinishedState extends State {
    Play() {
        document.getElementById("score").innerText = "";
        this.PrintExpression();
        this.game.setProState();
    }
    Submit(ans) {

    }
}

class ProcessingState extends State {
    Play() {

    }

    Submit(ans) {
        this.evaluateAnswer(ans);
    }
}

class StoppedState extends State {
    Play() {
        this.game.tryAgain();
    }
    Submit(ans) {

    }
}