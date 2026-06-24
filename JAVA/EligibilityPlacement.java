import java.util.Scanner;

class EligibilityPlacement {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your age :");
        int age = sc.nextInt();

        System.out.print("Enter your Percentage : ");
        int Percentage = sc.nextInt();

        if (age >= 18) {
            if (Percentage >= 60) {
                System.out.println("Eligible");
            }
        }

        sc.close();
    }
}