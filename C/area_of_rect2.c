#include <stdio.h>

int main()
{
    int length, breadth, area;

    printf("Enter the value of length: ");
    scanf("%d", &length);

    printf("Enter the value of breadth: ");
    scanf("%d", &breadth);

    area = length * breadth;

    printf("The area of the rectangle is: %d", area);

    return 0;
}