public class overloadS {

    static int square(int num) {
        return num * num;
    }

    static double square(double num) {
        return num * num;
    }

    public static void main(String[] args) {
        System.out.println(square(5));
        System.out.println(square(5.5));
    }
}