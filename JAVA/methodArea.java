public class methodArea {

    static int area(int side) {
        return side * side;
    }

    static int area(int length, int breadth) {
        return length * breadth;
    }

    static double area(double radius) {
        return 3.14 * radius * radius;
    }

    public static void main(String[] args) {
        System.out.println("Area of Square:" + area(5));
        System.out.println("Area of Rectangle :" + area(8, 4));
        System.out.println("Area of circle :" + area(7.0));
    }
}