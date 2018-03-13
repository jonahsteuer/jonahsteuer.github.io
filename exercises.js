var exercises = [
"4-Way Neck",
"Neck PushUp",
"Manual Neck",
"Bench Press",
"Deadlift",
"Dumbbell Bench Press",
"Floor Press",
"Spoto Press",
"Paused Bench Press",
"Decline Bench Press",
"Dumbbell Decline Bench Press",
"Incline Bench Press",
"Dumbbell Incline Bench Press",
"Chest Fly",
"Incline Chest Fly",
"Decline Chest Fly",
"Push Up",
"Incline PushUp",
"Decline PushUp",
"Wide-Grip PushUp",
"Military Press",
"Behind-Neck Press",
"Push Press",
"Pulldown",
"Lateral Raise",
"Internal Rotator Cuff",
"External Rotator Cuff",
"Front Raise",
"Pull-Over",
"Barbell Shoulder Shrug",
"Dumbbell Shoulder Shrug",
"Overhead Press",
"Cable Shoulder Shrug",
"Upright Row",
"Cable Upright Row",
"Arnold Press",
"Shoulder Press",
"Clean Pull",
"Split Jerk",
"Jerk",
"Power Clean",
"Barbell Shoulder Press",
"Barbell Row",
"Tricep Kickback",
"Barbell Tricep Extension",
"Dumbbell Tricep Extension",
"Tricep Pushdown",
"Close-Grip Bench Press",
"Reverse Grip Bench Press",
"Dip",
"Press/Tricep Extension",
"One-Arm Dumbbell Skull-Crusher",
"Dumbbell Skull-Crusher",
"Barbell Skull-Crusher",
"Barbell Curl",
"Dumbbell Curl",
"Preacher Curl",
"One-Arm Preacher Curl",
"Hammer Curl",
"Concentration Curl",
"Incline Dumbbell Curl",
"Reverse Barbell Curl",
"Reverse Dumbbell Curl",
"Forearm Dumbbell Curl",
"Forearm Barbell Curl",
"Forearm Dumbbell Extension",
"Forearm Barbell Extension",
"Back Extension",
"Good Morning",
"Paused Deadlift",
"Snatch-Grip Deadlift",
"Sumo Deadlift",
"Conventional Deadlift",
"Deficit Deadlift",
"Deadlift",
"Block Pull",
"Rack Pull",
"Romanian Deadlift",
"Stiff-Legged Deadlift",
"T-Bar Row",
"Bent-Over Barbell Row",
"Dumbbell Row",
"One-Arm Dumbbell Row",
"Wide-Grip Pulldown",
"Reverse-Grip Pulldown",
"Close-Grip Pulldown",
"Behind-Neck Pulldown",
"Reverse-Grip Lat Pulldown",
"Cable Row",
"Pull-Up",
"Wide-Grip Pull-Up",
"Behind-Neck Pull-Up",
"Close-Grip Pull-Up",
"SitUp",
"Crunch",
"Jackknife",
"Ab Machine",
"Raised-Leg Crunch",
"Reverse Trunk Twist",
"Hip Thrust",
"Ab Wheel",
"Side Crunch",
"Russian Twist",
"Hanging Leg Raise",
"Superman",
"Flutter Kick",
"Medicine Ball Crunch",
"Decline Crunch",
"Crunches",
"Toe Touch",
"Crossover Crunch",
"Oblique Crunch",
"Dumbbell Side Bend",
"Oblique Twist",
"Dip Bar Leg Raise",
"V-Spread Toe Touches",
"High-bar Squat",
"Pin Squat",
"Low-bar Squat",
"Front Squat",
"Paused Squat",
"Box Squat",
"Hack Squat",
"Jump Squat",
"Sumo Squat",
"One-Arm Overhead Dumbbell Squat",
"Narrow Dumbbell Squat",
"Leg Press",
"Single-Leg Leg Press",
"Leg Curl",
"Unilateral Leg Curl",
"Leg Extension",
"Unilateral Leg Extension",
"Dumbbell Lunge",
"Barbell Lunge",
"Dumbbell Walking Lunge",
"Barbell Walking Lunge",
"Glute/Ham Raise",
"Step-Up",
"Box Jump",
"Wall Sit",
"Standing Calf Raise",
"Single-Leg Standing Calf Raise",
"Leg Press Calf Raise",
"Barbell Calf Raise",
"Dumbbell Calf Raise",
"Seated Calf Raise"
 
];

var muscle_exercises = {
"chest_compounds":[
"Bench Press",
"Dumbbell Bench Press",
"Decline Bench Press",
"Dumbbell Decline Bench Press",
"Incline Bench Press",
"Dumbbell Incline Bench Press",
"Push Up",
"Incline PushUp",
"Decline PushUp",
"Wide-Grip PushUp"
],
"chest_isolations":[
"Cable Fly",
"Incline Cable Fly",
"Decline Cable Fly",
"Incline Dumbbell Fly",
"Dumbbell Fly",
"Pec-Deck"
],
"horizontal_pull":[
"T-Bar Row",
"Chest-Supported Row",
"Seal Row",
"Barbell Row",
"Dumbbell Row",
"One-Arm Dumbbell Row",
"Cable Row"
],
"vert_pull":[
"Pulldown",
"Pull-Up",
"Chin-Up"
],
"lat_compounds":[
"Pulldown",
"T-Bar Row",
"Chest-Supported Row",
"Seal Row",
"Barbell Row",
"Dumbbell Row",
"One-Arm Dumbbell Row",
"Wide-Grip Pulldown",
"Reverse-Grip Pulldown",
"Close-Grip Pulldown",
"Behind-Neck Pulldown",
"Cable Row",
"Pull-Up",
"Wide-Grip Pull-Up",
"Behind-Neck Pull-Up",
"Close-Grip Pull-Up",
],
"lat_isolations": [
"Pull-Over",
"Rope Pull-Over",
],
"front_delts" : [
"Arnold Press",
"Shoulder Press",
"Barbell Shoulder Press",
"Dumbbell Shoulder Press",
"Overhead Press",
"OHP"
],
"front_delt_compounds": [
"Arnold Press",
"Shoulder Press",
"Barbell Shoulder Press",
"Dumbbell Shoulder Press",
"Overhead Press",
"OHP"
],
"front_delt_isolations": "Front Raise",
"lateral_delt_exercises": [
"Upright Row",
"Cable Upright Row",
"Lateral Raise",
"Cable Lateral Raise"
],
"rear_delt_exercises" : [
"Reverse Pec-Deck",
"Reverse Dumbbell Fly",
"Reverse Cable Fly"
],
"upper_back_exercises" : [
"Face Pulls",
"Barbell Shrug",
"Dumbell Shrug",
"Power Shrug",
],
"quad_compounds" : [
"High-bar Squat",
"Low-bar Squat",
"Front Squat",
"Box Squat",
"Hack Squat",
"Jump Squat",
"Sumo Squat",
"One-Arm Overhead Dumbbell Squat",
"Narrow Dumbbell Squat",
"Leg Press",
"Single-Leg Leg Press",
"Dumbbell Lunge",
"Barbell Lunge",
"Dumbbell Walking Lunge",
"Barbell Walking Lunge",
"Bulgarian Split Squat",
"Belt Squat",
"Goblet Squat"
],
"quad_isolations" : [
"Leg Extension",
"Single-Leg Leg Extension",
],
"hamstring_compounds" : [
"Good Morning",
"Romanian Deadlift",
"Stiff-Legged Deadlift",
"Dumbbell Stiff-Legged Deadlift",
],
"hamstring_isolations" : [
"Leg Curl",
"Single-Leg Leg Curl",
"Glute/Ham Raise",
],
"tricep_exercises" : [
"Tricep Kickback",
"Barbell Tricep Extension",
"Dumbbell Tricep Extension",
"Standing Tricep Extension",
"Tricep Pushdown",
"Close-Grip Bench Press",
"Dip",
"One-Arm Dumbbell Skull-Crusher",
"Dumbbell Skull-Crusher",
"Barbell Skull-Crusher",
],
"bicep_exercises" : [
"Barbell Curl",
"Dumbbell Curl",
"Preacher Curl",
"One-Arm Preacher Curl",
"Hammer Curl",
"Concentration Curl",
"Incline Dumbbell Curl",
"Reverse Barbell Curl",
"Reverse Dumbbell Curl",
],
"calf_exercises" : [
"Standing Calf Raise",
"Single-Leg Standing Calf Raise",
"Leg Press Calf Raise",
"Barbell Calf Raise",
"Dumbbell Calf Raise",
"Seated Calf Raise"
],
"ab_exercises" : [
"SitUp",
"Crunch",
"Jackknife",
"Ab Machine",
"Raised-Leg Crunch",
"Reverse Trunk Twist",
"Hip Thrust",
"Ab Wheel",
"Side Crunch",
"Russian Twist",
"Hanging Leg Raise",
"Superman",
"Flutter Kick",
"Medicine Ball Crunch",
"Decline Crunch",
"Crunches",
"Toe Touch",
"Crossover Crunch",
"Oblique Crunch",
"Dumbbell Side Bend",
"Oblique Twist",
"Dip Bar Leg Raise",
"V-Spread Toe Touches",
],
"triceps_optional":[
"Tricep Kickback",
"Barbell Tricep Extension",
"Dumbbell Tricep Extension",
"Standing Tricep Extension",
"Tricep Pushdown",
"One-Arm Dumbbell Skull-Crusher",
"Dumbbell Skull-Crusher",
"Barbell Skull-Crusher",
],
"biceps_optional":[
"Barbell Curl",
"Dumbbell Curl",
"Preacher Curl",
"One-Arm Preacher Curl",
"Hammer Curl",
"Concentration Curl",
"Incline Dumbbell Curl",
"Reverse Barbell Curl",
"Reverse Dumbbell Curl",
],
"calves_optional":[
"Standing Calf Raise",
"Single-Leg Standing Calf Raise",
"Leg Press Calf Raise",
"Barbell Calf Raise",
"Dumbbell Calf Raise",
"Seated Calf Raise"
]

}

var bench_accessories = [
"Close-Grip Bench Press",
"Paused Bench Press",
"Spoto Press",
"Pin Press",
"Incline Bench Press",
"Floor Press",
"Face Pull",
"Barbell Row",
"Chest-Supported Row"
];

var squat_accessories = [
"Front Squat",
"Paused Squat",
"Pin Squat",
"High-bar Squat",
"Low-bar Squat",
"Belt Squat",
"Leg Press",
"Bulgarian Split Squat"
];

var deadlift_accessories = [
"Paused Deadlift",
"Snatch-Grip Deadlift",
"Sumo Deadlift",
"Conventional Deadlift",
"Deficit Deadlift",
"Block Pull",
"Rack Pull",
"Barbell Shrug",
"Barbell Row"
];




