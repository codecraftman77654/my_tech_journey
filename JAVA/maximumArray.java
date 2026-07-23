class maximumArray {
    public static void main(String[] args) {
        int[] arr = { 25, 80, 10, 90, 45 };
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        System.out.println("Maximum = " + max);

    }
}