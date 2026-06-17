import java.util.Scanner;

class PassingStatus {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Marks :");
        int marks = sc.nextInt();

        if (marks >= 40) {
            System.out.println("Passed");
        }
        sc.close();
    }
}