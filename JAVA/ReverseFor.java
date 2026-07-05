import java.util.Scanner;

class ReverseFor {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter Number :");

        int i = 10;

        for (i = 10; i >= 1; i--) {
            System.out.println(i);
        }
        sc.close();
    }
}