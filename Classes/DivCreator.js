class DivCreator extends OperationCreator {
    createOperation(lvl) {
        let arg1 = Math.floor((Math.random() * 10) + 1);
        let arg2 = Math.floor((Math.random() * 10) + 1);
        let sol = arg1 / arg2
        let exp = "" + arg1 + " / " + arg2 + "";
        return new Div(exp, sol, lvl);
    }
}