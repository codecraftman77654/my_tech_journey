import java.util.Scanner;

class ReverseArray {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the value of N : ");
        int n = sc.nextInt();

        int[] arr = new int[n];

        System.out.println("Enter" + n + "numbers: ");

        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
        }

        System.out.println("Numbers in Reverse Order : ");

        for (int i = arr.length - 1; i >= 0; i--) {
            System.out.println(arr[i]);
        }
        sc.close();
    }
}