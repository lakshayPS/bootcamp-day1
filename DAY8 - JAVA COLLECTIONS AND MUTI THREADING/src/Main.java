import javax.swing.*;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
void main() {
    Functions f = new Functions();

//    find first non-repeating character
    char res = f.findFirstNonRepeatingChar(new char[]{'a', 'b', 'a', 'b','c','f','t','t'});
    if(res == ' ') {
        System.out.println("No first non repeating character");
    } else {
        System.out.println("First non-repeating character is : " + res);
    }

//    find unique indices that sum up to given target
    int[] uniqueIndices = f.findIndices(new int[]{1,9,3,4,5}, 8);
    if(uniqueIndices.length == 0) {
        System.out.println("No indices found");
    } else {
        System.out.println("Index1: " + uniqueIndices[0] + ", Index2: " + uniqueIndices[1]);
    }

//    merge 2 sorted arrays into a unique sorted array
    ArrayList<Integer> list1 = new ArrayList<>(Arrays.asList(1,2,3,4,6,9));
    ArrayList<Integer> list2 = new ArrayList<>(Arrays.asList(3,4,5,6,7,8));
    ArrayList<Integer> sortedList = f.mergeSortedList(list1, list2);
    System.out.println("Sorted list: " + sortedList);

//    using threads print tables one by one
    TablePrinter table = new TablePrinter();

    Thread t1 = new Thread(() -> table.printTwoTable(10));
    Thread t2 = new Thread(() -> table.printFourTable(10));

    t1.start();
    t2.start();

//    using executor service
    ExecutorService executor = Executors.newFixedThreadPool(2);

    executor.submit(() -> table.printTwoTable(10));
    executor.submit(() -> table.printFourTable(10));

    executor.shutdown();

}
