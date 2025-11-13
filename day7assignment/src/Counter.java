public class Counter {
    private static int counter = 0;
    Counter() {
        counter++;
    }

    public static void getCounter() {
        System.out.println("Counter: " + counter);
    }
    public void resetCounter() {
         counter = 0;
    }
}
