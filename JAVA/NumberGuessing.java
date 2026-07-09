import java.util.Scanner;

class NumberGuessing {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int secretNumber = 7;
        int num;

        System.out.println("===== Number Guessing Game =====");

        do {

            System.out.print("Guess the Number : ");
            num = sc.nextInt();

            if (num == secretNumber) {
                System.out.println("🎉 Congratulations! You guessed the correct number.");
            }

            else if (num < secretNumber) {
                System.out.println("Come up with BIGGER number.");
            }

            else {
                System.out.println("Come up with SMALLER number.");
            }
        } while (num != secretNumber);
        sc.close();
    }

}