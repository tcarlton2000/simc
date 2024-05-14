/**
 * Test synchronous code.
 * 
 * @param {string} desc 
 * @param {function} fn 
 */
exports.sync = (desc, fn) => {
    try {
        fn();
        console.log('\x1b[32m%s\x1b[0m', `\u2714 ${desc}`);
    } catch (error) {
        console.log('\n');
        console.log('\x1b[31m%s\x1b[0m', `\u2718 ${desc}`);
        console.error(error);
    }
};

/**
 * Test Asynchronous code.
 * 
 * @param {string} desc 
 * @param {function} fn 
 */
exports.async = async (desc, fn) => {
    try {
        await fn();
        console.log('\x1b[32m%s\x1b[0m', `\u2714 ${desc}`);
    } catch (error) {
        console.log('\n');
        console.log('\x1b[31m%s\x1b[0m', `\u2718 ${desc}`);
        console.error(error);
    }
};
