class Game {
    constructor() {
        this.ProState = new ProcessingState(this);
        this.FiniState = new FinishedState(this);
        this.StoState = new StoppedState(this);
        this.state = this.FiniState;
        this.exp = new Operation("1+1", 2);
        this.indice = 0;
        this.operations = Array() // getexpressions
        this.score = 0;
        this.level = 0;
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
    alreadyPlaying() {
        document.getElementById("remark").innerText = "You are already in a game";
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

    setScore() {
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
        this.indice++;
        this.exp = this.operations[this.indice]; //next one ;
        this.PrintExpression();
    }

    loadOperations() {
        let creator = new AddCreator();
        for (let i = 0; i < 10; i++) {
            this.operations.push(creator.createOperation(this.level));
        }
        this.exp = this.operations[0];
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