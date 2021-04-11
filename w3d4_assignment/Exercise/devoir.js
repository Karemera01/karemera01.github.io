const quiz = {};
quiz.students = [{ sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
{ sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
{ sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }];
quiz.key = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }];

/**
 * 
 * @param {Object} ans1 is an answer object
 * @param {Object} ans2 is an answer object 
 * @returns {number} difference of the identifiers
 */
function answerComparator(ans1, ans2) {
    //IMPLEMENT THIS
    if (ans1 > ans2) return 1;
    else if(ans2<ans1) return -1;
    else return 0;
}

/**
 * 
 * @param {*} sid student id
 * @returns {number} score for student
 * find this student
 * sort the student answers
 * compare them against key and add up matches
 */
quiz.scoreStudent = function (sid) {

    let scored =quiz.scoreStudent.find(score=>score.sid===sid);

    
        }

    /**
     * @returns {number} average score of all students
     * go through list of students and get score of each, then the average
     */
    quiz.getAverage = function () {
        //IMPLEMENT THIS

    };



    /* comment out when running in browser */
    module.exports = { quiz }; 