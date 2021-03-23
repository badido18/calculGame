class OperationCreator {
    constructor(lvl) {
        this.lvl = this.instLevel(lvl);
    }


    instLevel(lvl) {
        switch (lvl) {
            case 0:
                return new Easy();
                break;
            case 1:
                return new Medium();
                break;
            case 2:
                return new Hard();
                break;
            default:
                null;
        }
    }

    createOperation() {

    }

}