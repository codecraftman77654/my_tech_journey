import java.util.Scanner;

class ReverseNumber {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Number");
        int n = sc.nextInt();

        int i = n;

        do {
            System.out.println(i);
            i--;
        } while (i >= 1);
        sc.close();
    }
}