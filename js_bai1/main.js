var courses = [{
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'Php',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 0
    }
];

// phương thức every kiểm tra tất cả các phần tử xem giá trị có thỏa mã cùng diều kiện hay không
// ví dụ phương thức every là phải kiểm tra tất cả học sinh có học hết 1 khóa học hay không
var isFree = courses.every(function(course, index) {
    return course.coin === 0;
});
//phương thức some kiểm tra chỉ cần 1 phần tử đúng thì sẽ thỏa mãn điều kiện giống với OR
var isFree2 = courses.some(function(course, index) {
    return course.coin === 0;
});
//console.log(isFree);
// courses.forEach(function(courses, index) {
//     console.log(index, courses);
// });
// phương thức find chỉ tìm kiếm 1 kết quả
// phương thức filter trả về tất cả phần tử thỏa mãn khi tìm kiếm
var listCourse = courses.find(function(course, index) {
    return course.name === 'Ruby';
});
//console.log(listCourse);

// phương thức map dùng để lấy các giá trị và để hiện thị lên html

function courseHandler(course, index) {
    return `<h2>${course.name}</h2></br>`
};

var newCourses = courses.map(courseHandler);
//console.log(newCourses.join(''));

// phương thức reduce khi cần nhận về giá trị duy nhất khi tính toán 1 giá trị trong array
// ví dụ tính tổng số coin trong 1 array
// phương thức reduce thì sẽ khai báo 1 hàm và gán giá trị lưu trữ
// trong hàm thì sẽ có 3 tham số: biến lưu trữ chính là được gán ở giá trị lưu trữ, 
// giá trị hiện tại của vòng lặp khi được trỏ đến
// giá trị index hiện tại
function coinHandler(accumulator, currentValue, currentIndex) {
    var total = accumulator + currentValue.coin;
    // console.table({
    //     'lượt chạy: ': currentIndex,
    //     'biến tích trữ: ': accumulator,
    //     'giá khóa học: ': currentValue.coin,
    //     'tích trữ được': total
    // });
    // function trong reduce return cái gì thì sẽ lưu trữ cái đó
    return total;
}
var totalCoin = courses.reduce(coinHandler);
// console.log(totalCoin);

// bài tập về reduce
// Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
// var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
//     console.log(flatOutput);
//     return flatOutput.concat(depthItem);
// }, []);
//console.log(flatArray);

function getRequestBodyFromValues(formValues) {
    var obj = {};
    formValues.forEach(items =>
        obj[items['field']] = items['value']
    )
    return obj;
}

function hasFreeCourses(courses) {
    var isBoolean = true;
}

hasFreeCourses([
    { name: 'Javascript', vnd: 1000000 },
    { name: 'PHP', vnd: 990000 },
    { name: 'HTML, CSS', vnd: 0 }
    // ...
]);

function findAMonsterByAttack(monsters) {
    let obj = {};
    obj = monsters.find(items => {
        return items.attack == 150;
    });
    if (typeof obj == "object") {
        return obj;
    } else {
        return null;
    }
}


function findStringsInArrayByKeyword(keyword, strings) {
    var result = [];
    result = strings.filter(items => {
        return items.indexOf(keyword) >= 0;
    });
    return console.log(result);


}

//findStringsInArrayByKeyword('PHP', ['Javascript', 'PHP', 'Học PHP']);

function findEqualValues(array1, array2) {
    var result = [];
    result = array1.filter(items => {
        return array2.indexOf(items) >= 0;
    })
    return result;
}
//findEqualValues([1, 2, 6, 8], [2, 9, 6]);

function convertToBoolean(inputs) {
    var result = [];
    result = inputs.map(items => {
        if (Boolean(items)) {
            return true;
        } else {
            return false;
        }
    });
    return result;

}
//console.log(convertToBoolean([1, 'hi', false, 8, undefined, '', NaN]));


function sumNumbers(inputs) {

    return inputs.reduce((accumulator, currentvalue) => {
        console.log(accumulator);
        return (isNaN(accumulator) ? 0 : parseInt(accumulator)) + (isNaN(currentvalue) ? 0 : parseInt(currentvalue));
    }, 0);


}
//console.log(sumNumbers([{}, 1, [], 2, 'hi', 0, 6]));

// tạo Object Contructor giống như tạo 1 bản thiết kế cho 1 ngôi nhà

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return $this.className;
}
var author = new User('Sơn', 'Dặng', 'Avatar');
var user = new User('Vũ', 'Nguyễn', 'Avatar');
//console.log(author.constructor); gọi đến constructor để kiểm tra bản thiết kế của nó
console.log(user.className);