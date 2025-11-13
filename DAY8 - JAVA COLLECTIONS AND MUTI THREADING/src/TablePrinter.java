public class TablePrinter {
    private boolean turnForTwo = true;

    synchronized void printTwoTable(int n) {
        for(int i = 1; i <= n; i++) {
            while(!turnForTwo) {
                try {
                    wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }

            System.out.println("2 x " + i + " = " + (2 * i));
            turnForTwo = false;
            notify();
        }
    }

    synchronized void printFourTable(int n) {
        for(int i = 1; i <= n; i++) {
            while(turnForTwo) {
                try {
                    wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }

            System.out.println("4 x " + i + " = " + (4 * i));
            turnForTwo = true;
            notify();
        }
    }
}
