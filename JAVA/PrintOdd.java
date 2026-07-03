import java.util.Scanner;

class PrintOdd {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Number :");
        int n = sc.nextInt();

        int i = 1;

        do {
            System.out.println(i);
            i += 2;

        } while (i <= n);
        sc.close();
    }
}