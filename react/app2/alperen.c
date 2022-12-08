//bunlar kütüphane 
#include<stdio.h>
#include<string.h>
//bunlar swap işlemini yapmak için arraydeki en büyük ve en küçük sayıların indexini tutsundiye var, farklı fonksiyonlar eriştiği için globale yazdım
int largestindex;
int smallestindex;


//bu self explainatory arraydeki en büyük rakamı buluyor, indexini globalde tanımladığımız variablea atıyor
int largest(char arr[],int size){
    int max=0;
    for(int i=0;i<size;i++){
        if(arr[i]>max){
            max=arr[i];
            largestindex=i;
        }        
    }
    return max;
}

//üsttekinin smallest için olanı
int smallest(char arr[],int size){
    int min=arr[0];
    for(int i=1;i<size;i++){
        if(arr[i]<min && arr[i]!='0'){
            min=arr[i];
            smallestindex=i;
        }        
    }
    return min;
}

void getSmallest(char a[],int len){ 
    //maindeki arrayi fonksiyonda direkt olarak kullanınca array değişiyordu ve sonuç doğru çıkmıyordu o yüzden kopyasını oluşturdum burda
    char new[5];
    strcpy(new,a); //bu already existing bir fonksiyon, strcpy(hedef,kaynak) olarak çalışıyor
    //burda bildiğimiz swap işlemi, arrayin ilk elemanı ile en büyük elemanı yer değiştiriyor
    int temp=new[0];
    new[0]=smallest(new,len);
    new[smallestindex]=temp;

    //c uyuz bir dil olduğu için karakter karakter bastırmak gerekebiliyor böyle
    for(int i=0;i<len;i++){
        printf("%c",new[i]);
    }    
}

void getLargest(char a[],int size){
    char new[5];
    strcpy(new,a);
    int temp=new[0];
    new[0]=largest(new,size);
    new[largestindex]=temp;

    for(int i=0;i<size;i++){
        printf("%c",new[i]);

    }    
}


int main(){
    //yine c uyuz bir dil olduğu için array tanımlarken içine size vermek zorundasın o yüzden 5 verdim. dinamik hafıza tanımlamak biraz uzun çünkü
    //ve size olarak 5 verdiğim için 2.örenek inputta 780 verince boş yerler kalıyor. luck for you pythonda veri tipleri daha kolay diye hatırlıyorum
    char input[5];
    gets(input);
   
    getLargest(input,sizeof(input));
    printf("\n");
    getSmallest(input,sizeof(input));
   
}
//bu kadardı xoxo

//ve bunu çalıştırmak için gcc compiler falan olması lazım bi vscode da gcc alperen.c diyip enterla sıkıntı çıkarırsa da online compilerda falan çalıştırırsın
