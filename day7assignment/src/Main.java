void main() {
    Scanner sc = new Scanner(System.in);
    Assignment ques = new Assignment();

//    1
    System.out.println("Enter a number for sum of its digit: ");
    int num = sc.nextInt();
    int sumOfDigits = ques.sumOfDigits(num);
    System.out.println(sumOfDigits);

//    2
    System.out.println("Enter a number for its multiplication table: ");
    int num2 = sc.nextInt();
    ques.multiplicationTable(num2);

//    3
    System.out.print("Enter a number for factorial: ");
    int num3 = sc.nextInt();
    int fact = ques.getFactorial(num3);
    System.out.println(fact);

//    4
    System.out.print("Enter a number for reversing digit: ");
    int num4 = sc.nextInt();
    int rev = ques.reverseDigits(num4);
    System.out.println("After reversing " + num4 + " : " + rev);

//    5
    Calculator calc = new Calculator();
    System.out.println("Enter num1: ");
    int num5 = sc.nextInt();
    System.out.println("Enter num2: ");
    int num6 = sc.nextInt();

    System.out.println("Enter: 1 for addition \n 2 for subtraction \n 3 for multiplication \n 4 for division");
    int opt = sc.nextInt();
    switch (opt) {
        case 1:
            System.out.println("Result: " + calc.add(num5, num6));
            break;
        case 2:
            System.out.println("Result: " + calc.sub(num5, num6));
            break;
        case 3:
            System.out.println("Result: " + calc.multiply(num5, num6));
            break;
        case 4:
            System.out.println("Result: " + calc.divide(num5, num6));
            break;
        default:
            System.out.println("Wrong option!!!");
    }

//    6
    System.out.print("Enter name: ");
    String name = sc.nextLine();

    System.out.print("Enter number of subjects: ");
    int n = sc.nextInt();

    int[] marks = new int[n];
    for (int i = 0; i < n; i++) {
        System.out.print("Enter marks for subject " + (i + 1) + ": ");
        marks[i] = sc.nextInt();
    }
    Student student = new Student(name, marks);

    int total = student.calculateTotal();
    double avg = student.calculateAverage();

    System.out.println("\nStudent Name: " + name);
    System.out.println("Total Marks: " + total);
    System.out.println("Average Marks: " + avg);

//    7
    System.out.print("Enter bank holder: ");
    String name7 = sc.nextLine();
    System.out.println("Enter account number: ");
    int accNum = sc.nextInt();
    System.out.println("Enter balance");
    int balance = sc.nextInt();

    BankAccount b = new BankAccount(name7, accNum, balance);
    System.out.println("Holder name: " + b.getHolderName());
    System.out.println("Account Number: " + b.getAccountNumber());
    System.out.println("Balance: " + b.getBalance());

//    8
    Counter c1 = new Counter();
    c1.getCounter();
    Counter c2 = new Counter();
    c1.getCounter();


//    9
    System.out.println("Max: " + MathUtils.max(8, 9));
    System.out.println("Min: " + MathUtils.min(8, 9));
    System.out.println("Average: " + MathUtils.average(8, 9));

//    10
    Book book = new Book("Java", "J",499);
    System.out.println("Book title: " + book.getTitle());
    System.out.println("Book author: " + book.getAuthor());
    System.out.println("Book price: " + book.getPrice());

//    11
    Car car1 = new Car("Creta");
    System.out.println("Model name: " + car1.getModelName());
    Car car2 = new Car("SUV", 1300000);
    System.out.println("Model name: " + car2.getModelName());
    System.out.println("Car price: " + car2.getPrice());

//    12
    ExceptionHandeling exp = new ExceptionHandeling();
    exp.divisionByZero(4, 2);
    exp.divisionByZero(4, 0);

//    13
//    ExceptionHandeling expp = new ExceptionHandeling();
    exp.nestedExceptionHandeling();

//    14
    exp.m1();

//    15
    System.out.print("Enter email: ");
    String email = sc.nextLine();
    exp.customException(email);

//    16
    Customer cust1 = new Customer(1, "cust1", "cust1@gmail.com");
    Customer cust2 = new Customer(2,"cust2","cust2@gmail.com");
    Customer cust3 = new Customer(3,"cust3","cust3@gmail.com");

    List<Customer> customers = new ArrayList<>();
    customers.add(cust1);
    customers.add(cust2);
    customers.add(cust3);

    for(Customer c: customers) {
        System.out.println(c);
    }
}