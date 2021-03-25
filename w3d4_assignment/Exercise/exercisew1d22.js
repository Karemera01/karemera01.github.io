"use strict";
const student1={studentId:"s101",quizAnswers:[1,1,2,4]};
const student2={studentId:"s102",quizAnswers:[2,1,2,2]};
const student3={studentId:"s103",quizAnswers:[3,1,3,4]};

const key=[3,1,2,4];
const quiz=[];
quiz.push(student1);
quiz.push(student2);
quiz.push(student3);

function gradeQuiz(quizArray,keyArray){
    const report={};
    for(const student of quizArray){
        const score=scoreQuiz(student.quizAnswers,keyArray);
        report[student.studentId]=score;
    }
    return report;
}
function scoreQuiz(stuAnswers,key){
    return 10;
}
console.log("expect{s101:3,s102:2,s103:3}", gradeQuiz(quiz ,key) );


