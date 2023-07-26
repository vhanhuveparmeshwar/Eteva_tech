const List1 = ["Arjun", "Adwait", "Swapnil", "Amit", "Vishal", "Adnan"];
const List2 = ["Adwait", "Laxman", "Amit", "Adnan", "Nitin", "Gaurav"];

const finalList1NotInList2 = [];
for (let i of List1) {
  if (!List2.includes(i)) {
    finalList1NotInList2.push(i);
  }
}
console.log(finalList1NotInList2);

const finalList2NotInList1 = [];
for (let i of List2) {
  if (!List1.includes(i)) {
    finalList2NotInList1.push(i);
  }
}
console.log(finalList2NotInList1);

const finalList2IntersectionList1 = [];
for (let i of List2) {
  if (List1.includes(i)) {
    finalList2IntersectionList1.push(i);
  }
}
console.log(finalList2IntersectionList1);
