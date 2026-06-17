import java.util.Scanner;

class SalaryMeasure {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Salary : ");
        int salary = sc.nextInt();

        if (salary > 50000) {
            System.out.println("High Salary");
        }
        sc.close();
    }
}