//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here

  const name = 'Mariia Tsenkush';
  const age = 39;
  const hobbies = [
    'Studying',
    'Dog training',
    'Reading',
    'Traveling',
    'Moovies',
    'Gym',
  ];

  return (
    <div>
      {/* add JSX here */}
      <h1>Let me introduce myself!</h1>
      <p>
        {' '}
        My name is {name} and I am {age} years old.
        <br />
        And I am a student again - that is how long stories start, lol.
        <br />
        But if you are really interested, there is some info you should know
        about me.
      </p>
      <h2>
        You are still here? Really?
        <br />
        Okay, let us start with my hobbies:
      </h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
