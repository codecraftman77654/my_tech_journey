class salary_calculator {
    public static void main(String[] args) {
        double basic = 25000;
        double hra = (20.0 / 100) * basic;
        double da = (10.0 / 100) * basic;

        double total = basic + hra + da;
        System.out.println("HRA :" + hra);
        System.out.println("DA :" + da);
        System.out.println("Total Salary" + total);
    }
}