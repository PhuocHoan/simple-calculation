const operations = document.querySelectorAll("input[type=radio]");
const submit = document.querySelector("input[type=submit]");
const nums = document.querySelectorAll("input[type=text].number");
const error = document.querySelector("#error");
const result = document.querySelector("#result");
let nums_arr = [];

console.log(operations, submit, nums);
submit.addEventListener("click", (e) => {
    e.preventDefault();

    for (let i = 0; i < nums.length; ++i) {
        nums_arr[i] = nums[i].value;
        if (nums_arr[i] == "") {
            error.textContent = `Chưa nhập số vào ô ${nums[i].labels[0].textContent}`;
            return;
        } else if (isNaN(parseFloat(nums[i].value))) {
            error.textContent = `Giá trị nhập ở ô ${nums[i].labels[0].textContent} không phải là số`;
            return;
        } else {
            nums_arr[i] = parseFloat(nums[i].value);
        }
    }
    operations.forEach((operation) => {
        error.textContent = "";
        if (operation.checked) {
            switch (operation.id) {
                case "addition":
                    result.value =
                        Math.round((nums_arr[0] + nums_arr[1]) * 100) / 100;
                    break;
                case "subtraction":
                    result.value =
                        Math.round((nums_arr[0] - nums_arr[1]) * 100) / 100;
                    break;
                case "multiplication":
                    result.value =
                        Math.round(nums_arr[0] * nums_arr[1] * 100) / 100;
                    break;
                case "division":
                    if (nums_arr[1] == 0) {
                        error.textContent = `Không thể chia 0 được`;
                        break;
                    } else {
                        result.value =
                            Math.round((nums_arr[0] / nums_arr[1]) * 100) / 100;
                        break;
                    }
            }
            return;
        }
    });
});
