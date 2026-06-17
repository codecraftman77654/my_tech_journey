import java.util.Scanner;

class CharacterComparision {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Character :");
        char ch = sc.next().charAt(0);

        if (ch == 'A') {
            System.out.println("Excellent");
        }
        sc.close();
    }
}