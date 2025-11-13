import java.util.SortedMap;

public class Assignment {
    public int sumOfDigits(int num) {
        int sum = 0;
        num = Math.abs(num);
        while(num != 0) {
            int d = num % 10;
            num /= 10;
            sum += d;
        }
        return sum;
    }

    public void multiplicationTable(int num) {
        for(int i = 1; i <= 10; i++) {
            System.out.println(num+" x " + i + " = " + num * i);
        }
    }

    public int getFactorial(int num) {
        int fact = 1;
        int n = num;
        for(int i = 0; i < n; i++) {
            fact *= num;
            num--;
        }
        return fact;
    }

    public int reverseDigits(int num) {
        int ans = 0;
        while(num > 0) {
            int d = num % 10;
            num /= 10;
            ans = ans * 10 + d;
        }

        return ans;
    }
}
