import java.util.Scanner;

class gradeCalc {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Student Name : ");
        String name = sc.nextLine();

        System.out.print("Enter marks: ");
        int marks = sc.nextInt();

        if (marks < 0 || marks > 100) {
            System.out.println("❌ Invalid Marks!");
            System.out.println("Please enter marks between 0 and 100.");
        } else {
            System.out.println("========== RESULT ==========");
            System.out.println("Name  : " + name);
            System.out.println("Marks : " + marks);

            if (marks >= 90) {
                System.out.println("Grade : A ");
            }

            else if (marks >= 80) {
                System.out.println("Grade : B");
            }

            else if (marks >= 70) {
                System.out.println("Grade : C");
            }

            else if (marks >= 60) {
                System.out.println("Grade : D");
            }

            else {
                System.out.println("Grade : F (Fail)");
            }

        }
        sc.close();
    }
}