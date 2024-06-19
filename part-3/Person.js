const Person = ({name, age, hobbies}) => (
    <div>
         <p>Learn some information about this person:</p>
         <p>Name: {name.length > 8? name.substr(0, 6): name}</p>
         <p>Age: {age}</p>
         <p>Hobbies:</p>
         <ul>{hobbies.map(h => (
            <li>{h}</li>
         ))}</ul>
         <h3>{ age >= 18 ? "please go vote!" : "you must be 18."}</h3>

    </div>
)