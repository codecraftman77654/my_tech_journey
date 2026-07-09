import java.util.Scanner;

class ATM_Menu {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int choice;
        int balance = 50000;
        int amount;

        do {
            System.out.println("=========================");
            System.out.println("      JAVA ATM          ");
            System.out.println("=========================");
            System.out.println("1. Check Balance");
            System.out.println("2. Deposit");
            System.out.println("3. Withdraw");
            System.out.println("4. Exit");
            System.out.print("Enter Your Choice : ");

            choice = sc.nextInt();

            switch (choice) {

                case 1:
                    System.out.println("Current Balance : RS " + balance);
                    break;

                case 2:
                    System.out.print("Enter Deposite Amount : RS ");
                    amount = sc.nextInt();

                    if (amount > 0) {
                        balance = balance + amount;
                        System.out.println("RS" + amount + "Deposited Successfully.");
                        System.out.println("Updated Balance : RS " + balance);
                    } else {
                        System.out.println("Invalid Amount!");
                    }
                    break;

                case 3:
                    System.out.print(" Enter Withdraw Amount : RS ");
                    amount = sc.nextInt();

                    if (amount <= balance && amount > 0) {
                        balance = balance - amount;
                        System.out.println("RS" + amount + "Withdrawn Successfully.");
                        System.out.println("Remaining Balance : RS " + balance);
                    } else {
                        System.out.println("Insufficient Balance or Invalid Amount !");
                    }
                    break;

                case 4:
                    System.out.println("Thank You For Using JAVA ATM !");
                    break;

                default:
                    System.out.println("Invalid Choice !");
            }
        } while (choice != 4);

        sc.close();
    }
}