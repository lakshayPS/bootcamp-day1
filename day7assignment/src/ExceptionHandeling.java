public class ExceptionHandeling {

    public void divisionByZero(int a, int b) {
        try {
            int result = a / b;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Division by zero exception");
        } finally {
            System.out.println("Division completed");
        }
    }

    public void nestedExceptionHandeling() {
        try {
            int[] arr = new int[3];
            System.out.println("Outer try block");

            try {
                int res = 9 / 0;
                System.out.println("Result: " + res);
            } catch (ArithmeticException e) {
                System.out.println("Division by zero exception occured.");
            }

            arr[5] = 100;
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index out of bounds exception occured.");
        }
    }

    private void m3() {
        System.out.println("Inside m3()");
        int result = 10 / 0;
    }
    private void m2() {
        System.out.println("Inside m2()");
        try {
            m3();
        } catch (ArithmeticException e) {
            System.out.println("Exception caught in m2(): " + e);
            throw e;
        }
    }
    public void m1() {
        System.out.println("Inside m1");
        try {
            m2();
        } catch (ArithmeticException e) {
            System.out.println("Exception in m1(): " + e);
        }
    }

    public void customException(String email) {
        try {
            validateEmail(email);
            System.out.println("Email is valid!");
        } catch (InvalidEmailException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            System.out.println("Validation process completed.");
        }
    }

    public static void validateEmail(String email) throws InvalidEmailException {
        if(!email.contains("@")) {
            throw new InvalidEmailException("Email must contain '@' symbol!");

        }
    }


}
