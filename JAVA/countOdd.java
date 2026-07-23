class countOdd {
    public static void main(String[] args) {
        int[] arr = { 12, 13, 14, 151, 16, 17, 18, 19, 20, 210, 22, 23, 24, 25, 26, 27, 28, 29, 30, 35, 37 };
        int count = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] % 2 != 0) {
                count++;
            }
        }
        System.out.println(" Total Odd numbers are :" + count);
    }
}