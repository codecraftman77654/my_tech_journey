import java.util.Scanner;

class OddWhile {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter Number :");
        int num = sc.nextInt();

        int i = 1;

        while (i < num) {
            System.out.println(i);
            i += 2;
        }
        sc.close();
    }
}