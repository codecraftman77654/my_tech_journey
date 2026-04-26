public class class_object_function {
    public static void main(String[] args) {
        Student s1 = new Student(); // Object
        s1.name = "Kuldeep";
        s1.study(); // method call
    }

}

class Student {
    String name;

    void study() {
        System.out.println(name + " is coding");
    }
}
