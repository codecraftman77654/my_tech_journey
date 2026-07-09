import java.util.Scanner;

class CalculatorSwitch {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter First Number : ");
        int num1 = sc.nextInt();

        System.out.print("Enter Operator (+, -, *, /): ");
        char op = sc.next().charAt(0);

        System.out.print("Enter Second Number :");
        int num2 = sc.nextInt();

        switch (op) {
            case '+':
                System.out.println("Result = " + (num1 + num2));
                break;

            case '-':
                System.out.println("Result =" + (num1 - num2));
                break;

            case '*':
                System.out.println("Result =" + (num1 * num2));
                break;

            case '/':
                if (num2 != 0) {
                    System.out.println("Result = " + (num1 / num2));
                } else {
                    System.out.println("Cannot be divided by zero.");
                }
                break;

            default:
                System.out.println("INVALID OPERATION");

        }
        sc.close();
    }
}