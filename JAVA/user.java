import java.util.Scanner;

public class user {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String name = sc.nextLine();
        int age = sc.nextInt();

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        sc.close();
    }
}