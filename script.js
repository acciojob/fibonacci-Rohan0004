function fibonacci(num) {
// your code here
	if(num<3) return num-1;
	return fibonacci(num-1)+fibonacci(num-2);
}

module.exports = fibonacci;
