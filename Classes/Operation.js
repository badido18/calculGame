class Operation {
    constructor(exp, sol, lvl) {
        this.exp = exp;
        this.sol = sol;
        this.level = this.instLevel(lvl);
    };

    instLevel(lvl) {
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