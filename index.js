const receivesAFunction = (callback) => callback()

const returnsANamedFunction = () => function theName() {
    return 'I think I did it!'
}

const returnsAnAnonymousFunction = () => (() => "Yes?")

// function Monday() {
//     console.log('Go for a five-mile run');
//     console.log('Pump iron');
// }
// function Tuesday() {
//     console.log('Go for a five-mile run');
//     console.log('Swim 40 laps');
// }
// function Wednesday() {
//     console.log("Go for a five-mile run");
//     console.log("Go for a five-mile run");
//   }
  
//   function Thursday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }
  
//   function Friday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
//   }
//   function runFiveMiles() {
//       console.log('Go for a five-mile run')
//   }
//   function lifeWeights() {
//       console.log('Pump iron');
//   }
//   function swimFortyLaps() {
//       console.log('Swim 40 laps')
//   }
//   function Monday() {
//       exerciseRoutine(lifeWeights);
//   }
//  exerciseRoutine(() => console.log('Stretch'))
//  function morningroutine(exercise) {
//      let breakfast;

//      if (exercise === lifeWeights) {
//          breakfast = "protein bar"
//      } else if (exercise === swimFortyLaps) {
//          breakfast = "kale smoothie"
//      } else {
//          breakfast = "granola"
//      }
//      exerciseRoutine(exercise);

//      return function () {
//          console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//      }
//  }
 