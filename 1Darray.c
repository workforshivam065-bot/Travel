#include<stdio.h>
int main(){
    int n , i;
    printf("enter the number");
    scanf("%d",&n);
    int arr[n];
    for(i=0;i<5;i++){
        printf("enter the elements");
        scanf("%d",&arr[i]);
    }
    for(i=4;i>0;i--){
        printf("the array is %d",arr[i]);
    }
    return 0;

}