class Game {
    constructor() {
        this.ProState = new ProcessingState(this);
        this.FiniState = new FinishedState(this);
        this.StoState = new StoppedState(this);
        this.state = this.FiniState;
        this.exp = null;
        this.indice = 0;
        this.operations = new Array() // getexpressions
        this.score = 0;
        this.level = 0;
    }

    PrintExpression() {
        if (!!this.exp)
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
        document.getElementById("answer").value = '';
        document.getElementById("score").innerText = this.score;
        this.score = 0
        this.loadOperations();
        this.setFinishedState();
    }

    ResultFeedBack(result) {
        switch (result) {
            case true:
                this.printProcess();
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
        if (this.indice < this.operations.length) {
            this.exp = this.operations[this.indice];
            this.PrintExpression();
        } else {
            this.EndGame();
        }
    }

    init() {
        this.indice = 0;
        this.score = 0;
        this.operations = new Array();
        this.loadOperations();
        document.getElementById('answer').value = '';
    }

    EndGame() {
        this.setFinishedState();
        document.getElementById('remark').innerText = "You Won ! press play to play again";
        this.init();
        this.setScore();
    }

    loadOperations() {

        this.indice = 0;
        let Addcreator = new AddCreator(this.level);
        let Minuscreator = new MinusCreator(this.level);
        let Multcreator = new MultCreator(this.level);
        let Divcreator = new DivCreator(this.level);
        let creator = [Addcreator, Minuscreator, Multcreator, Divcreator]
        for (let i = 0; i < 10; i++) {
            this.operations.push(creator[Math.floor((Math.random() * 4) + 0)].createOperation());
        }
        this.exp = this.operations[0];
    }

    printProcess() {
        let remark = "correct";
        document.getElementById("score").innerText = this.score;
        document.getElementById("remark").innerText = remark;
    }


    setLevel(lvl) {
        this.level = lvl
        this.init();
        this.PrintExpression();
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