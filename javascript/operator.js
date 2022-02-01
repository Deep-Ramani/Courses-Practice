// operator 

// we calculate discount using the some operator

// forumula for calculate discount  D = ((L - S)/L) * 100

var listingPrice = 700;
var sellingPrice = 200;

var disountCounting = ((listingPrice - sellingPrice)/listingPrice) * 100

console.log(disountCounting);

// in that upar when we calculate discount then we not get the exact value. we get some point value.
// we get some exact value then we use the math.round() for get exact value

discountExactPercentage = Math.round(disountCounting);

console.log(discountExactPercentage);

var result = listingPrice > sellingPrice;
console.log(result);