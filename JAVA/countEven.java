class countEven {
    public static void main(String[] args) {
        int arr[] = { 15, 17, 44, 51, 48, 65, 88, 12, 32 };
        int count = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                count++;
            }
        }
        System.out.println("total even numbers are : " + count);
    }
}