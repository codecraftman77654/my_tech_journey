import java.util.Scanner;

class EvenWhile {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Number :");
        int num = sc.nextInt();

        int i = 2;

        while (i <= num) {
            System.out.println(i);
            i += 2;
        }
        sc.close();

    }
}