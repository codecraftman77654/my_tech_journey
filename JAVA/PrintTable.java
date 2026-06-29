import java.util.Scanner;

class PrintTable {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Write table Of : ");
        int table = sc.nextInt();

        int i = 1;

        while (i <= 10) {
            System.out.println(table + "x" + i + "=" + (table * i));
            i++;
        }
        sc.close();
    }
}