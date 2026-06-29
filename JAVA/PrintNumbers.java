import java.util.Scanner;

class PrintNumbers {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Give Number : ");
        int num = sc.nextInt();

        int i = 1;

        while (i <= num) {
            System.out.println(i);
            i++;
        }
        sc.close();
    }
}