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
        this.game.alreadyPlaying();
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

class Dificulty {
    constructor() {
        this.min = 0;
        this.max = inifinity;
    }
}

class Easy extends Dificulty {

    constructor() {
        super();
        this.min = 0;
        this.max = 20;
    }
}
class Medium extends Dificulty {

    constructor() {
        super();
        this.min = 0;
        this.max = 100;
    }
}
class Hard extends Dificulty {

    constructor() {
        super();
        this.min = 0;
        this.max = 1000;
    }
}

class Operation {
    constructor(exp, sol, lvl) {
        this.exp = exp;
        this.sol = sol;
        this.level = this.instLevel(lvl);
    };

    instLevel() {
        switch (lvl) {
            case 0:
                return new Easy();
            case 1:
                return new Medium();
            case 2:
                return new Hard();
            default:
                null;
        }
    }

}

class Add extends Operation {

}
class Mult extends Operation {

}
class Minus extends Operation {

}
class Div extends Operation {

}
class OperationCreator {

    createOperation(lvl) {

    }
}

class AddCreator extends OperationCreator {

    createOperation(lvl) {
        let arg1 = Math.floor((Math.random() * this.level.min) + 1);
        let arg2 = Math.floor((Math.random() * 10) + 1);
        let sol = arg1 + arg2
        let exp = "" + arg1 + " + " + arg2 + "";
        return new Add(exp, sol, lvl);
    }
}
class MinusCreator extends OperationCreator {
    createOperation(lvl) {
        let arg1 = Math.floor((Math.random() * 10) + 1);
        let arg2 = Math.floor((Math.random() * 10) + 1);
        let sol = arg1 - arg2
        let exp = "" + arg1 + " - " + arg2 + "";
        return new Minus(exp, sol, lvl);
    }
}
class MultCreator extends OperationCreator {
    createOperation(lvl) {
        let arg1 = Math.floor((Math.random() * 10) + 1);
        let arg2 = Math.floor((Math.random() * 10) + 1);
        let sol = arg1 * arg2
        let exp = "" + arg1 + " * " + arg2 + "";
        return new Mult(exp, sol, lvl);
    }
}
class DivCreator extends OperationCreator {
    createOperation(lvl) {
        let arg1 = Math.floor((Math.random() * 10) + 1);
        let arg2 = Math.floor((Math.random() * 10) + 1);
        let sol = arg1 / arg2
        let exp = "" + arg1 + " / " + arg2 + "";
        return new Div(exp, sol, lvl);
    }
}