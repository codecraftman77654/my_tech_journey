import java.util.Scanner;

class largerMethod {
    static void larger(int a, int b) {
        if (a > b) {
            System.out.println("Largest number =" + a);
        } else {
            System.out.println("Largest number =" + b);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter first number :");
        int a = sc.nextInt();
        ;

        System.out.print("Enter Second Number :");
        int b = sc.nextInt();

        larger(a, b);
        sc.close();
    }
}