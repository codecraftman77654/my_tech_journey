import java.util.Scanner;

class LoginSystem {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        String storedUsername = "kuldeep";
        String storedPassword = "1234";

        String username;
        String password;

        int attempt = 3;

        do {

            System.out.println("*************************");
            System.out.println(" Login Page ");
            System.out.println("*************************");

            System.out.print("Enter Username : ");
            username = sc.nextLine();

            System.out.print("Enter Password :");
            password = sc.nextLine();

            if (username.equals(storedUsername) && password.equals(storedPassword)) {
                System.out.println(" Login Successful !");
                break;
            }

            else {
                attempt--;
                System.out.println("Invalid Username or Password !");
                if (attempt > 0) {
                    System.out.println("Attempts Left : " + attempt);
                }

            }
        } while (attempt > 0);
        if (attempt == 0)

        {
            System.out.println("Account Locked ! ");
        }
        sc.close();
    }

}
