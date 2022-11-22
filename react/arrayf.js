const items=[
{
    origin:"human",
    age:34, 
},
{
    origin:"vampire",
    age:975,
},
{
    origin:"werewolf",
    age:124,
},
{
    origin:"siren",
    age:547,    
}
];

//map
items.map((item)=>{
    console.log(item.origin)
});

//push

items.push({origin:"fairy", age: 98});
items.push({origin:"demon", age:1785});

items.map((item)=>{
    console.log(item)
});

//find
const result=items.find((item)=>item.origin ==="vampire");
console.log(result);

//filter

const filtered = items.filter((item)=>item.age>200);
console.log(filtered )

//some->bazıları koşulu sağlarsa true

const some=items.some((item)=> item.age>50);
console.log("bazıları koşulu sağlıyor mu", some)

//every -> hepsi koşulu sağlarsa true

const hepsi=items.every((item)=>item.age>20);
console.log("hepsi koşulu sağlıyor mu",hepsi);

//includes

const varmi=items.includes("witch");
console.log(varmi);