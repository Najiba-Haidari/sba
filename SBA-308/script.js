// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
  function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
const result = [];
const learners= {};
// // ID from learnersSubmission 
// const uniqueIds =  new Set();
// submissions.forEach(submission => {
//   uniqueIds.add(submission.learner_id)
// })

// result.push(...uniqueIds)
for (let i = 0; i < submissions.length; i++) {
        // submissions[i].learner_id= learners[i];
   
    if (learners.id === submissions[i].learner_id){
            // console.log(learners.id)
            continue;
        }
        console.log(submissions[i].learner_id)
        
    learners["id"] = submissions[i].learner_id;
    learners["avg"] = 0;
    learners['as1'] = 0;
    learners['as2'] = 0;
    // console.log(submissions[i].learner_id)

    console.log(learners)
    result.push(learners);
    // console.log(result)
}
console.log(result)
// console.log(learners)
function filterId(){

}

const checkObjValue = (obj, value) => learners[i].values(obj).includes("2023");
// average score = total score (learnerSubmission)/ total possible points (AssignmentGroup)
function averageScore(submissions){
    let sumScoreSubmission = 0;
    let sumPossibleScore = 0;
    for (let i = 0; i < submissions.length; i++) {
        if (submissions[i].learner_id == learners.id) {
            sumScoreSubmission += submissions[i].submission.score;
            // sumPossibleScore += ag.assignments[i].points_possible
        }
        
    }
    console.log(sumScoreSubmission)
}
averageScore(LearnerSubmissions)

  
    return result;
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result);
  

//   const result = [
//       {
//         id: 125,
//         avg: 0.985, // (47 + 150) / (50 + 150)
//         1: 0.94, // 47 / 50
//         2: 1.0 // 150 / 150
//       },
//       {
//         id: 132,
//         avg: 0.82, // (39 + 125) / (50 + 150)
//         1: 0.78, // 39 / 50
//         2: 0.833 // late: (140 - 15) / 150
//       }
//     ];