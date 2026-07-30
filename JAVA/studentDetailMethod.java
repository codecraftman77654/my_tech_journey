import java.util.Scanner;

class studentDetailMethod {

    static void student(String name, int age, double percentage) {
        System.out.println("student Details");
        System.out.println("-----------------");
        System.out.println(" Name = " + name);
        System.out.println("Age =" + age);
        System.out.println("Percentage =" + percentage);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter name :");
        String name = sc.nextLine();

        System.out.print("Enter age :");
        int age = sc.nextInt();

        System.out.print("Enter Percentage :");
        ;
        double percentage = sc.nextDouble();

        student(name, age, percentage);

        sc.close();

    }
}