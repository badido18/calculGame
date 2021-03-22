class Game {
    constructor() {
        this.ProState = new ProcessingState(this);
        this.FiniState = new FinishedState(this);
        this.StoState = new StoppedState(this);
        this.state = this.FiniState;
        this.exp = new Expression("1+1", 2);
        this.score = 0;
    }

    PrintExpression() {
        document.getElementById("expression").innerText = this.exp.exp;
    }

    getAnswer() {
        return document.getElementById("answer").value;
    }

    VerifAnswer(ans) {
        return (ans == this.exp.sol);
    }

    GamePlay() {
        this.state.Play();
    }

    evaluateAnswer() {
        let answer = this.getAnswer();
        console.log(this.state)
        this.state.Submit(answer);
    }

    incScore() {
        this.score++;
        document.getElementById("score").innerText = this.score;
    }

    getScore() {
        document.getElementById("score").innerText = this.score;
    }

    tryAgain() {
        document.getElementById("expression").innerText = '';
        document.getElementById("remark").innerText = '';
        document.getElementById("answer").innerText = '';
        document.getElementById("score").innerText = this.score;
        this.score = 0
        this.setFinishedState();
    }

    ResultFeedBack(result) {
        switch (result) {
            case true:
                this.printProcess();
                this.Next();
                break;
            case false:
                this.printStopped();
                break;
            default:
                break;
        }
    }

    Next() {
        this.exp = new Expression("1+5", 6); //next one ;
        this.PrintExpression();
    }

    printProcess() {
        let remark = "correct";
        document.getElementById("score").innerText = this.score;
        document.getElementById("remark").innerText = remark;
    }

    printStopped() {
        let remark = "Failed ! Try Again";
        this.score = 0;
        document.getElementById("score").innerText = this.score;
        document.getElementById("remark").innerText = remark;
    }

    setProState() {
        this.state = this.ProState;
    }
    setStoppedState() {
        this.state = this.StoState;
    }
    setFinishedState() {
        this.state = this.FiniState;
    }
}