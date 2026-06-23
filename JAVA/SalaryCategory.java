import java.util.Scanner;

class SalaryCategory {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Salary :");
        int salary = sc.nextInt();

        if (salary == 100000) {
            System.out.println("Very High");
        }

        else if (salary == 50000) {
            System.out.println("High");
        }

        else if (salary == 30000) {
            System.out.println("Medium");
        }

        else if (salary < 30000) {
            System.out.println("Low");
        }

        sc.close();
    }
}