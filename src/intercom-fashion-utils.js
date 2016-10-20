var timeout;

/**
 * Keep checking a certain condition until it's truthy, and then invoke callback.
 *
 * @param {function} condition
 * @param {function} callback
 * @param {number} [interval]
 */
function checkConditionPoll(condition, callback, interval) {
    if (condition()) {
        callback();
        clearTimeout(timeout)
    } else {
        timeout = setTimeout(function() {
            checkConditionPoll(condition, callback, interval);
        }, interval);
    }
}
    
module.exports = {
    checkConditionPoll: checkConditionPoll
}