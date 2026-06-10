class marks_calculator {
    public static void main(String[] args) {
        int math = 80;
        int science = 75;
        int english = 90;

        int total = math + science + english;
        double average = total / 3;

        System.out.println("Total Marks :" + total);
        System.out.println("Average Marks :" + average);
    }
}