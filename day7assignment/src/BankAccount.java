public class BankAccount {
    private String holderName;
    private int accountNumber;
    private int balance;

    BankAccount(String userName, int accNum, int bal) {
        this.holderName = userName;
        this.accountNumber = accNum;
        this.balance = bal;
    }

}
