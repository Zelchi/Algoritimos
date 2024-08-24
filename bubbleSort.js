const numbers = [9, 4, 200, 10, 333, 10, 15, 2, 12, 3, 10, 100, 14, 13];

function ordenar(nums) {
    let t = nums.length;
    let swap;

    do {
        swap = false;
        for (let i = 0; i < t - 1; i++){
            if (nums[i] > nums[i + 1]){
                let temp = nums[i]
                nums[i] = nums[i + 1]
                nums[i + 1] = temp;
                swap = true
            };
        };
    } while (swap)

    return nums;
};

console.log(ordenar(numbers));