import java.util.Scanner;

class Agecategory {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Age : ");
        int age = sc.nextInt();

        if (age >= 0 & age <= 12) {
            System.out.println("child");
        }

        else if (age > 12 & age < 20) {
            System.out.println("Teenager");
        }

        else if (age > 19 & age < 60) {
            System.out.println("Adult");
        }

        else {
            System.out.println("Senior Citizen");
        }

        sc.close();
    }
}