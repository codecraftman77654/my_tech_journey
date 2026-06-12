class SI {
    public static void main(String[] args) {
        double principle = 25000.00;
        double rate = 6.00;
        double time = 5.00;

        double si = (principle * rate * time) / 100;

        System.out.println("Simple Interest :" + si);

    }
}