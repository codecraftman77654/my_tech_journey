import java.util.Scanner;

class reverseWhile {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number :");
        int num = sc.nextInt();

        int i = 10;

        while (i >= num) {
            System.out.println(i);
            i--;
        }
        sc.close();
    }
}