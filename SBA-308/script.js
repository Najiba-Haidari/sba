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
  const result = [];
  const learners = {};

  for (const submission of submissions) {
    const learnerId = submission.learner_id;
    const assignmentId = submission.assignment_id;
    const score = submission.submission.score;

    if (!learners[learnerId]) {
      // learner's scores if not already present are to initialize
      learners[learnerId] = {
        totalScore: 0,
        totalPossibleScore: 0
      };
      // console.log(learners[learnerId])
    }

    learners[learnerId].totalScore += score;
    // console.log(`score for each assignment submitted ${score} `)
    //based on submission of assignment- total score and total possible points 
    learners[learnerId].totalPossibleScore += ag.assignments.find(x => x.id === assignmentId).points_possible;
  }

//each learner
  for (const learnerId in learners) {
    const learner = {
      id: parseInt(learnerId), // to get the number form used parseInt
      //finding the average for scores of assignment submitted
      avg: (learners[learnerId].totalScore / learners[learnerId].totalPossibleScore).toFixed(2) // average 
    };

    // score for each assignment
    for (const assignment of ag.assignments) {
      //only two assignments for each learner
      const submission = submissions.find(z => z.learner_id === learner.id && z.assignment_id === assignment.id && assignment.id <= 2);
      // console.log(submission)
      if (submission) {
        //finding the percentage or ratio for the the assignment submitted for each learner
        learner[assignment.id] = (submission.submission.score / assignment.points_possible).toFixed(2);
      }
    }

    result.push(learner);
    console.log(learner)
  }

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