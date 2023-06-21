// [10, 5, 8, 3, 1]
// [100, 50, 25, 75, 200]
// [7, 2, 9, 4, 6];


//nums1
const nums1 = [10, 5, 8, 3, 1];

nums1.sort((a, b) => a - b)

console.log('nums1 ===', nums1)

//nums2
const nums2 = [100, 50, 25, 75, 200];

nums2.sort((a, b) => a - b);

console.log("nums1 ===", nums2);

//nums3
const nums3 = [7, 2, 9, 4, 6];

nums3.sort((a, b) => a - b);

console.log("nums1 ===", nums3);



//SUMA

//nums1Total
let total = 0

const nums1Total = nums1.reduce((total, sk, idx) => total + sk, 0);
console.log('nums1Total === ', nums1Total)

//nums2Total
let total2 = 0;

const nums2Total = nums2.reduce((total, sk, idx) => total + sk, 0);
console.log("nums2Total === ", nums2Total);

//nums3Total
let total3 = 0;

const nums3Total = nums3.reduce((total, sk, idx) => total + sk, 0);
console.log("nums3Total === ", nums3Total);


//SANDAUGA