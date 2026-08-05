public class StringMethodOverload {

    static void display(String name) {
        System.out.println("Name :" + name);
    }

    static void display(String name, int age) {
        System.out.println("Name:" + name);
        System.out.println("Age :" + age);
    }

    static void display(String name, int age, double percentage) {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Percentage :" + percentage);
    }

    public static void main(String[] args) {
        display("Kuldeep");
        System.out.println();

        display("Kuldeep", 22);
        System.out.println();

        display("Kuldeep", 22, 89.5);

    }
}