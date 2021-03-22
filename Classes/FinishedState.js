class FinishedState extends State {
    Play() {
        document.getElementById("score").innerText = "";
        this.PrintExpression();
        this.game.setProState();
    }
    Submit(ans) {

    }
}