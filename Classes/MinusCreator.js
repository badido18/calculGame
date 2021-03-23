class MinusCreator extends OperationCreator {

    constructor(lvl) {
        super(lvl)
    }

    createOperation() {
        let arg1 = Math.floor((Math.random() * this.lvl.max) + this.lvl.min);
        let arg2 = Math.floor((Math.random() * this.lvl.max) + this.lvl.min);
        let sol = arg1 - arg2
        let exp = "" + arg1 + " - " + arg2 + "";
        return new Minus(exp, sol, this.lvl);
    }
}